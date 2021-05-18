import { DbDeleteItem } from '@/data/usecases/item'
import { ItemMongoRepository } from '@/infra/mongodb'
import { DeleteItemController } from '@/presentation/controllers/item'

export const makeDeleteItemController = (): DeleteItemController => {
  const deleteItemRepository = new ItemMongoRepository()
  const dbDeleteItem = new DbDeleteItem(deleteItemRepository)
  return new DeleteItemController(dbDeleteItem)
}
