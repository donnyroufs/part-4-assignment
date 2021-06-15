export class UserEntity {
  constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly password: string
  ) {}
}
