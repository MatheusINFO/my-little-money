import { ListItens } from '@/domain/usecases/item'
import { serverError, success } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class ListItensController implements Controller {
  constructor (
    private readonly listItens: ListItens
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accountId = httpRequest.accountId
      const itens = await this.listItens.list(accountId)
      return success(itens)
    } catch (error) {
      return serverError()
    }
  }
}
