import { AddItem } from '@/domain/usecases/item'
import { MissingParamError } from '@/presentation/errors'
import { badRequest, serverError, success } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddItemController implements Controller {
  constructor (
    private readonly addItem: AddItem
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'description', 'value']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, description, value } = httpRequest.body
      const accountId = httpRequest.accountId
      const item = await this.addItem.add({
        accountId,
        name,
        description,
        value
      })
      return success(item)
    } catch (error) {
      return serverError()
    }
  }
}
