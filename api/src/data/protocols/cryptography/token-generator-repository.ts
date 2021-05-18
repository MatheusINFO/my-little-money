export namespace TokenGeneratorRepository {
  export type Params = string
  export type Result = string
}

export interface TokenGeneratorRepository {
  generate (params: TokenGeneratorRepository.Params): Promise<TokenGeneratorRepository.Result>
}
