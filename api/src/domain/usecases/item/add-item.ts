import { ItemModel } from '@/domain/models'

export namespace AddItem {
  export type Params = Omit<ItemModel, 'id'>
  export type Result = ItemModel
}

export interface AddItem {
  add (params: AddItem.Params): Promise<AddItem.Result>
}
