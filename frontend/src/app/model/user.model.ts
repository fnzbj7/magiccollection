import { Privilege } from '../auth/model/privilege.enum';

export class User {
    id!: number;
    username!: string;
    email!: string;
    privileges!: Privilege[];
    firstName!: string;
    lastName!: string;
    token?: string;
    expiresIn?: Date | string;
}
