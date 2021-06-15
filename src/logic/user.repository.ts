import { sleep } from './sleep.util'
import { UserEntity } from './user.entity'

export interface ISchema {
  users: UserEntity[]
}

export class UserRepository {
  private readonly _db: ISchema = {
    users: [
      {
        id: 1,
        username: 'woef',
        password: 'meow',
      },
    ],
  }

  async get(id: UserEntity['id']) {
    sleep()
    return this._db.users.find((u) => u.id === id)
  }

  async save(data: unknown) {
    await sleep()

    const validUser = this.doFakeDbValidation(data)

    if (!validUser) {
      throw new Error('Wrong data received')
    }

    const index = this._db.users.push({
      id: this._db.users.length + 1,
      // @ts-expect-error Missing proper type
      ...data,
    })

    return this._db.users[index - 1]
  }

  // Ignore this.
  private doFakeDbValidation(data: any) {
    if (data.username && data.password && Object.keys(data).length === 2) {
      return true
    }

    return false
  }
}
