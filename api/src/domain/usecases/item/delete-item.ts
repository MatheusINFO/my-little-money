export namespace DeleteItem {
  export type Params = string
  export type Result = boolean
}

export interface DeleteItem {
  delete (params: DeleteItem.Params): Promise<DeleteItem.Result>
}
