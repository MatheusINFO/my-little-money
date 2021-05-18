export namespace EncrypterRepository {
  export type Params = string
  export type Result = string
}

export interface EncrypterRepository {
  encrypt (params: EncrypterRepository.Params): Promise<EncrypterRepository.Result>
}
