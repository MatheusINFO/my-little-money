import { AccountModel } from '@/domain/models'

export namespace LoadAccountByTokenRepository {
  export type Params = string
  export type Result = AccountModel
}

export interface LoadAccountByTokenRepository {
  loadByToken (params: LoadAccountByTokenRepository.Params): Promise<LoadAccountByTokenRepository.Result>
}
