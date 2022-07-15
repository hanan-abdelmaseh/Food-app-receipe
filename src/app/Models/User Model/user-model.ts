export class UserModel {
  constructor(
    public userName: string,
    public bio: string,
    public id: number,
    public city: string,
    public state: string,
    public country: string,
    public userFacebook: string,
    public userTwitter: string,
    public userSite: string
  ) {}
}
