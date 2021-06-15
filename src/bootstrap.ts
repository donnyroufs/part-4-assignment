import 'dotenv/config'
import {
  UserController,
  UserEntity,
  UserRepository,
  UserService,
} from './logic'

export class UserRequestDto {
  constructor(
    public readonly username: string,
    public readonly password: string
  ) {}

  static from(data: Partial<UserRequestDto>) {
    if (!data.username || !data.password) {
      throw new Error('Missing values')
    }

    return new UserRequestDto(data.username, data.password)
  }
}

class UserResponseDto {
  constructor(public readonly username: string) {}

  static from(entity: UserEntity) {
    return new UserResponseDto(entity.username)
  }
}

console.clear()

async function bootstrap() {
  const controller = new UserController(new UserService(new UserRepository()))

  const body = {
    username: 'john',
    password: 'strongJohn',
    crazy: true,
  }

  const requestDto = UserRequestDto.from(body)
  const createdUser = await controller.store(requestDto)
  const responseDto = UserResponseDto.from(createdUser)

  console.log({ createdUser: responseDto })
}

bootstrap()
