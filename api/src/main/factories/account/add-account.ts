import { DbAddAccount } from '@/data/usecases/account'
import { BcryptAdapter } from '@/infra/cryptography'
import { AccountMongoRepository } from '@/infra/mongodb'
import { AddAccountController } from '@/presentation/controllers/account'

export const makeAddAccountController = (): AddAccountController => {
  const encrypter = new BcryptAdapter()
  const addAccountRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(encrypter, addAccountRepository)
  return new AddAccountController(dbAddAccount)
}
