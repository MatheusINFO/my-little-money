import { AddAccount } from '@/domain/usecases/account'
import { InvalidParamError, MissingParamError } from '@/presentation/errors'
import { badRequest, serverError, success } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddAccountController implements Controller {
  constructor (
    private readonly addAccount: AddAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'username', 'password']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, username, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        username,
        password
      })
      if (!account) {
        return badRequest(new InvalidParamError('username'))
      }
      return success(account)
    } catch (error) {
      return serverError()
    }
  }
}
