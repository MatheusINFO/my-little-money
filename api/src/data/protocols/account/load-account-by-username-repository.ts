import { AccountModel } from '@/domain/models'

export namespace LoadAccountByUsernameRepository {
  export type Params = string
  export type Result = AccountModel
}

export interface LoadAccountByUsernameRepository {
  loadByUsername (params: LoadAccountByUsernameRepository.Params): Promise<LoadAccountByUsernameRepository.Result>
}
