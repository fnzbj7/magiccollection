export class InvalidTokenError extends Error {
    constructor(public message: string) {
        super();
        this.name = 'InvalidTokenError';
    }
}
