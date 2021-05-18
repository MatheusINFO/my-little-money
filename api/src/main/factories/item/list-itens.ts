import { DbListItens } from '@/data/usecases/item'
import { ItemMongoRepository } from '@/infra/mongodb'
import { ListItensController } from '@/presentation/controllers/item'

export const makeListItensController = (): ListItensController => {
  const listItensRepository = new ItemMongoRepository()
  const dbListItens = new DbListItens(listItensRepository)
  return new ListItensController(dbListItens)
}
