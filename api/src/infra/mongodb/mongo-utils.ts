import { MongoClient } from 'mongodb'

export const MongoUtils = {
  session: null as MongoClient,

  async connect (uri: string) {
    this.session = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.session.close()
  },

  getCollection (collectionName: string) {
    return this.session.db().collection(collectionName)
  },

  map (collection: any) {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  },

  mapCollection (collection: any[]) {
    return collection.map(item => MongoUtils.map(item))
  }
}
