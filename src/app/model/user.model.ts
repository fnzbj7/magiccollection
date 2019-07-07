export class User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token?: string;
  expiresIn?: Date | string;
}
