export namespace Authentication {
  export type Params = {
    username: string
    password: string
  }
  export type Result = string
}

export interface Authentication {
  auth (params: Authentication.Params): Promise<Authentication.Result>
}
