import { DbAddItem } from '@/data/usecases/item'
import { ItemMongoRepository } from '@/infra/mongodb'
import { AddItemController } from '@/presentation/controllers/item'

export const makeAddItemController = (): AddItemController => {
  const addItemRepository = new ItemMongoRepository()
  const dbAddItem = new DbAddItem(addItemRepository)
  return new AddItemController(dbAddItem)
}
