import { UserEntity } from './user.entity'
import { UserRepository } from './user.repository'

export class UserService {
  constructor(private readonly _repo: UserRepository) {}

  async get(id: UserEntity['id']) {
    const user = await this._repo.get(id)

    if (!user) {
      throw new Error('user is not known')
    }

    return user
  }

  async create(data: unknown) {
    return this._repo.save(data)
  }
}
