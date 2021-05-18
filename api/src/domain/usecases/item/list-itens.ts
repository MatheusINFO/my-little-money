import { ItemModel } from '@/domain/models'

export namespace ListItens {
  export type Params = string
  export type Result = ItemModel[]
}

export interface ListItens {
  list (params: ListItens.Params): Promise<ListItens.Result>
}
