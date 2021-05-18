export namespace UpdateAccessTokenRepository {
  export type Params = {
    accountId: string
    accessToken: string
  }
}

export interface UpdateAccessTokenRepository {
  updateAccessToken (params: UpdateAccessTokenRepository.Params): Promise<void>
}
