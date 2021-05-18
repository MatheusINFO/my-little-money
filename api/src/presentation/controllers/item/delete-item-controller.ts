import { DeleteItem } from '@/domain/usecases/item'
import { serverError, success } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class DeleteItemController implements Controller {
  constructor (
    private readonly deleteItem: DeleteItem
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const item = await this.deleteItem.delete(id)
      return success(item)
    } catch (error) {
      return serverError()
    }
  }
}
