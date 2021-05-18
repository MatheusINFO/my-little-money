import { Router } from 'express'
import { adaptMiddleware, adaptRoute } from '@/main/adapter'
import { makeAuthenticationMiddleware } from '@/main/factories/auth'
import {
  makeAddItemController,
  makeDeleteItemController,
  makeListItensController
} from '@/main/factories/item'

export default (router: Router): void => {
  const authentication = adaptMiddleware(makeAuthenticationMiddleware())
  router.get('/item', authentication, adaptRoute(makeListItensController()))
  router.post('/item', authentication, adaptRoute(makeAddItemController()))
  router.delete('/item/:id', authentication, adaptRoute(makeDeleteItemController()))
}
