import { ItemModel } from '@/domain/models'

export namespace AddItemRepository {
  export type Params = Omit<ItemModel, 'id'>
  export type Result = ItemModel
}

export interface AddItemRepository {
  add (params: AddItemRepository.Params): Promise<AddItemRepository.Result>
}
