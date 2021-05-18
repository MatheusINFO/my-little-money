export namespace HashComparerRepository {
  export type Params = {
    value: string
    valueToCompare: string
  }
  export type Result = boolean
}

export interface HashComparerRepository {
  comparer (params: HashComparerRepository.Params): Promise<HashComparerRepository.Result>
}
