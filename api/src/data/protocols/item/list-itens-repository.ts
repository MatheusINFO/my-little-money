import { ItemModel } from '@/domain/models'

export namespace ListItensRepository {
  export type Params = string
  export type Result = ItemModel[]
}

export interface ListItensRepository {
  list (params: ListItensRepository.Params): Promise<ListItensRepository.Result>
}
