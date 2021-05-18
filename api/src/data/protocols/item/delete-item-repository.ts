export namespace DeleteItemRepository {
  export type Params = string
  export type Result = boolean
}

export interface DeleteItemRepository {
  delete (params: DeleteItemRepository.Params): Promise<DeleteItemRepository.Result>
}
