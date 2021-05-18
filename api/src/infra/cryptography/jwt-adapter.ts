import jwt from 'jsonwebtoken'
import { DecrypterRepository, TokenGeneratorRepository } from '@/data/protocols/cryptography'

export class JwtAdapter implements TokenGeneratorRepository, DecrypterRepository {
  constructor (
    private readonly secret
  ) {}

  async generate (params: TokenGeneratorRepository.Params): Promise<TokenGeneratorRepository.Result> {
    const accessToken = await jwt.sign({ params }, this.secret)
    return accessToken
  }

  async decrypt (params: DecrypterRepository.Params): Promise<DecrypterRepository.Result> {
    const access: any = await jwt.verify(params, this.secret)
    return access
  }
}
