export class LoginResponse {
  userId: bigint
  username: string

  constructor(_userId: bigint, _username: string) {
    this.userId = _userId
    this.username = _username
  }
}
