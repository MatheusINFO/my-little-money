import { AccountModel } from '@/domain/models'

export namespace LoadAccountByToken {
  export type Params = string
  export type Result = AccountModel
}

export interface LoadAccountByToken {
  loadByToken (params: LoadAccountByToken.Params): Promise<LoadAccountByToken.Result>
}
