import { Privilege } from './privilege.enum';

export interface JwtTokenModel {
    id: number;
    name: string;
    email: string;
    privileges: Privilege[];
    exp: number;
    iat: number;
}
