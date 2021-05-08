import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import Mail = require('mailgun-js');
import * as bcrypt from 'bcrypt';
// import * as config from 'config';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { Logger } from '@nestjs/common';
// import fs = require('fs');

@Injectable()
export class MailService {
    private logger = new Logger('MailService');
    private mailgun: Mail.Mailgun;

    constructor() {
        const API_KEY = process.env.MAILGUN_API_KEY;
        const DOMAIN = 'mg.almateszekfoglaltvolt.hu';

        if (API_KEY) {
            this.mailgun = new Mail({
                apiKey: API_KEY,
                domain: DOMAIN,
                host: 'api.eu.mailgun.net',
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
            await this.mailgun.messages().send(data);
        } catch (error) {
            throw new ServiceUnavailableException(
                'Mail service is not available, please try it again later',
            );
        }
    }
}
