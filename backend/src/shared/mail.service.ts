import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
// import * as config from 'config';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { Logger } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const formData = require('form-data');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mailgun = require('mailgun.js');

@Injectable()
export class MailService {
    private logger = new Logger('MailService');
    private mg;
    private static DOMAIN = 'mg.almateszekfoglaltvolt.hu';

    constructor() {
        if (process.env.MAILGUN_API_KEY) {
            const mailgun = new Mailgun(formData);
            this.mg = mailgun.client({
                username: 'api',
                key: process.env.MAILGUN_API_KEY,
                url: 'https://api.eu.mailgun.net',
            });
        } else {
            this.logger.error(
                `There was no Api key found for the Mailgun mail service. ` +
                    `This service will not work properly until and Api key is set for the 'MAILGUN_API_KEY' enviroment variable`,
            );
        }

        // TODO const template = fs.readFileSync((<any>config.get('template')).dir);
    }

    async sendRegMail(authCredentialsDto: AuthCredentialsDto) {
        const { email } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const emailHash = await bcrypt.hash(email, salt);
        const data = {
            from: 'Excited User <magic@mg.almateszekfoglaltvolt.hu>',
            to: email,
            subject: 'Hello, test mail',
            text: 'Testing some Mailgun awesomeness!',
            html: `Itt egy link <a href="www.almateszekfoglaltvolt.hu?${emailHash}">Klikkelj ide a hitelesítéshez</a>`,
        };
        try {
            await this.mg.messages.create(MailService.DOMAIN, data);
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(
                'Mail service is not available, please try it again later',
            );
        }
    }
}
