import { AddAccount } from '@/domain/usecases/account'
import { AddAccountRepository } from '@/data/protocols/account'
import { EncrypterRepository } from '@/data/protocols/cryptography'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: EncrypterRepository,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    const encryptPassword = await this.encrypter.encrypt(params.password)
    const account = Object.assign({}, params, { password: encryptPassword })
    const result = await this.addAccountRepository.add(account)
    return result
  }
}
