import env from '@/main/config/env'
import { DbAuthentication } from '@/data/usecases/cryptography'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'
import { AccountMongoRepository } from '@/infra/mongodb'
import { LoadAccountController } from '@/presentation/controllers/account'

export const makeLoadAccountController = (): LoadAccountController => {
  const hashComparer = new BcryptAdapter()
  const tokenGenerate = new JwtAdapter(env.secret)
  const accountRepository = new AccountMongoRepository()
  const dbAuthentication = new DbAuthentication(accountRepository, hashComparer, tokenGenerate, accountRepository)
  return new LoadAccountController(dbAuthentication)
}
