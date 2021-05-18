import { Router } from 'express'
import { adaptRoute } from '@/main/adapter'
import { makeAddAccountController, makeLoadAccountController } from '@/main/factories/account'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeAddAccountController()))
  router.post('/signin', adaptRoute(makeLoadAccountController()))
}
