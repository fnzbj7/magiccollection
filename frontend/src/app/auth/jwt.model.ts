import { Privilege } from './privilege.enum';

export interface JwtTokenModel {
    email: string;
    privileges: Privilege[];
    exp: number;
    iat: number;
}
