import { Privilege } from './privilege.enum';

export interface JwtTokenModel {
    name: string;
    email: string;
    privileges: Privilege[];
    exp: number;
    iat: number;
}
