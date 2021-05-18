export namespace DecrypterRepository {
  export type Params = string
  export type Result = string
}

export interface DecrypterRepository {
  decrypt (params: DecrypterRepository.Params): Promise<DecrypterRepository.Result>
}
