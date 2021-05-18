import { ListItensRepository } from '@/data/protocols/item'
import { ListItens } from '@/domain/usecases/item'

export class DbListItens implements ListItens {
  constructor (
    private readonly listItensRepository: ListItensRepository
  ) {}

  async list (params: ListItensRepository.Params): Promise<ListItensRepository.Result> {
    const itens = await this.listItensRepository.list(params)
    return itens
  }
}
