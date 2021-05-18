import { LoadAccountByToken } from '@/domain/usecases/account'
import { LoadAccountByTokenRepository } from '@/data/protocols/account'
import { DecrypterRepository } from '@/data/protocols/cryptography'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypterRepository: DecrypterRepository,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async loadByToken (params: LoadAccountByToken.Params): Promise<LoadAccountByToken.Result> {
    const accessToken = await this.decrypterRepository.decrypt(params)
    if (accessToken) {
      const account = await this.loadAccountByTokenRepository.loadByToken(params)
      if (account) {
        return account
      }
    }
    return null
  }
}
