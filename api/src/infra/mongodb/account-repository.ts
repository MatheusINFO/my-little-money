import { ObjectID } from 'bson'
import { MongoUtils } from './mongo-utils'
import {
  AddAccountRepository,
  LoadAccountByTokenRepository,
  LoadAccountByUsernameRepository,
  UpdateAccessTokenRepository
} from '@/data/protocols/account'

export class AccountMongoRepository implements
  AddAccountRepository,
  LoadAccountByUsernameRepository,
  LoadAccountByTokenRepository,
  UpdateAccessTokenRepository {
  async add (params: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    const collection = await MongoUtils.getCollection('accounts')
    const accountExists = await collection.findOne({ username: params.username })
    if (!accountExists) {
      const account = await collection.insertOne(params)
      return MongoUtils.map(account.ops[0])
    }
    return null
  }

  async loadByUsername (params: LoadAccountByUsernameRepository.Params): Promise<LoadAccountByUsernameRepository.Result> {
    const collection = await MongoUtils.getCollection('accounts')
    const account = await collection.findOne({ username: params })
    return MongoUtils.map(account)
  }

  async loadByToken (params: LoadAccountByTokenRepository.Params): Promise<LoadAccountByTokenRepository.Result> {
    const collection = await MongoUtils.getCollection('accounts')
    const account = await collection.findOne({ accessToken: params })
    return account && MongoUtils.map(account)
  }

  async updateAccessToken (params: UpdateAccessTokenRepository.Params): Promise<void> {
    const collection = await MongoUtils.getCollection('accounts')
    await collection.updateOne({ _id: new ObjectID(params.accountId) }, {
      $set: {
        accessToken: params.accessToken
      }
    })
  }
}
