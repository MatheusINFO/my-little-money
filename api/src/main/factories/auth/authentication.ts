import env from '@/main/config/env'
import { DbLoadAccountByToken } from '@/data/usecases/account'
import { AuthMiddleware } from '@/presentation/middlewares'
import { Middleware } from '@/presentation/protocols'
import { AccountMongoRepository } from '@/infra/mongodb'
import { JwtAdapter } from '@/infra/cryptography'

export const makeAuthenticationMiddleware = (): Middleware => {
  const decrypter = new JwtAdapter(env.secret)
  const accountMongoRepository = new AccountMongoRepository()
  const loadAccountByToken = new DbLoadAccountByToken(decrypter, accountMongoRepository)
  return new AuthMiddleware(loadAccountByToken)
}
