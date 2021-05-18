import { Authentication } from '@/domain/usecases/cryptography'
import { LoadAccountByUsernameRepository, UpdateAccessTokenRepository } from '@/data/protocols/account'
import { HashComparerRepository, TokenGeneratorRepository } from '@/data/protocols/cryptography'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByUsernameRepository: LoadAccountByUsernameRepository,
    private readonly hashComparerRepository: HashComparerRepository,
    private readonly tokenGeneratorRepository: TokenGeneratorRepository,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.loadAccountByUsernameRepository.loadByUsername(params.username)
    if (account) {
      const isValid = await this.hashComparerRepository.comparer({
        value: params.password,
        valueToCompare: account.password
      })
      if (isValid) {
        const accessToken = await this.tokenGeneratorRepository.generate(account.id)
        await this.updateAccessTokenRepository.updateAccessToken({
          accountId: account.id,
          accessToken
        })
        return accessToken
      }
    }
    return null
  }
}
