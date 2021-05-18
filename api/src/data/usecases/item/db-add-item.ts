import { AddItemRepository } from '@/data/protocols/item'
import { AddItem } from '@/domain/usecases/item'

export class DbAddItem implements AddItem {
  constructor (
    private readonly addItemRepository: AddItemRepository
  ) {}

  async add (params: AddItem.Params): Promise<AddItem.Result> {
    const item = await this.addItemRepository.add(params)
    return item
  }
}
