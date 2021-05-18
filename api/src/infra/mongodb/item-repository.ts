import { MongoUtils } from './mongo-utils'
import { AddItemRepository, DeleteItemRepository, ListItensRepository } from '@/data/protocols/item'
import { ObjectID } from 'bson'

export class ItemMongoRepository implements
AddItemRepository,
DeleteItemRepository,
ListItensRepository {
  async add (params: AddItemRepository.Params): Promise<AddItemRepository.Result> {
    const collection = await MongoUtils.getCollection('items')
    const item = await collection.insertOne(params)
    return await MongoUtils.map(item.ops[0])
  }

  async delete (params: DeleteItemRepository.Params): Promise<DeleteItemRepository.Result> {
    const collection = await MongoUtils.getCollection('items')
    const item = await collection.findOneAndDelete({ _id: new ObjectID(params) })
    return item && await MongoUtils.map(item)
  }

  async list (params: ListItensRepository.Params): Promise<ListItensRepository.Result> {
    const collection = await MongoUtils.getCollection('items')
    const itens = await collection.find({ accountId: params }).toArray()
    return itens ? await MongoUtils.mapCollection(itens) : []
  }
}
