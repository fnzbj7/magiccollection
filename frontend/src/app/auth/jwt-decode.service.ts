import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtDecodeService {
    decode<TTokenDto>(token: string, options?: any): TTokenDto {
        if (typeof token !== 'string') {
            throw new InvalidTokenError('Invalid token specified');
        }

        options = options || {};
        const pos: number = options.header === true ? 0 : 1;
        try {
            return JSON.parse(this.base64_url_decode(token.split('.')[pos]));
        } catch (e) {
            throw new InvalidTokenError('Invalid token specified: ' + e.message);
        }
    }

    b64DecodeUnicode(str: string) {
        return decodeURIComponent(
            atob(str).replace(/(.)/g, (m, p) => {
                let code = p.charCodeAt(0).toString(16).toUpperCase();
                if (code.length < 2) {
                    code = '0' + code;
                }
                return '%' + code;
            }),
        );
    }

    base64_url_decode(str: string) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new InvalidTokenError('Illegal base64url string!');
        }

        try {
            return this.b64DecodeUnicode(output);
        } catch (err) {
            return atob(output);
        }
    }
}

export class InvalidTokenError extends Error {
    constructor(public message: string) {
        super();
        this.name = 'InvalidTokenError';
    }
}
