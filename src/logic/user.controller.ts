import { UserEntity } from './user.entity'
import { UserService } from './user.service'

export class UserController {
  constructor(private readonly _service: UserService) {}

  async show(id: UserEntity['id']) {
    return this._service.get(id)
  }

  async store(data: unknown) {
    return this._service.create(data)
  }
}
