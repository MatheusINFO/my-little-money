import { DeleteItemRepository } from '@/data/protocols/item'
import { DeleteItem } from '@/domain/usecases/item'

export class DbDeleteItem implements DeleteItem {
  constructor (
    private readonly deleteItemRepository: DeleteItemRepository
  ) {}

  async delete (params: DeleteItem.Params): Promise<DeleteItem.Result> {
    const item = await this.deleteItemRepository.delete(params)
    return !!item
  }
}
