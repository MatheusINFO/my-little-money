import { AccountModel } from '@/domain/models'

export namespace AddAccountRepository {
  export type Params = Omit<AccountModel, 'id'>
  export type Result = AccountModel
}

export interface AddAccountRepository {
  add (params: AddAccountRepository.Params): Promise<AddAccountRepository.Result>
}
