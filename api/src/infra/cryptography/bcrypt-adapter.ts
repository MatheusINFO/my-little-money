import bcrypt from 'bcrypt'
import { EncrypterRepository, HashComparerRepository } from '@/data/protocols/cryptography'

export class BcryptAdapter implements EncrypterRepository, HashComparerRepository {
  async encrypt (params: EncrypterRepository.Params): Promise<EncrypterRepository.Result> {
    const password = await bcrypt.hash(params, 5)
    return password
  }

  async comparer (params: HashComparerRepository.Params): Promise<HashComparerRepository.Result> {
    const isEqual = await bcrypt.compare(params.value, params.valueToCompare)
    return isEqual
  }
}
