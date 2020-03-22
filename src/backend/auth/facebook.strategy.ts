import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import FacebookTokenStrategy = require('passport-facebook-token');
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import * as config from 'config';

@Injectable()
export class FacebookStrategy {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {
        this.init();
    }

    async init() {
        // Need to spearate options from the FacebookTokenStrategy construct,
        // because it's not accepts fbGraphVersion property, but we need to set it to the newest
        const fbConfig: any = config.get('facebook');
        const options = {
            clientID: fbConfig.appId,
            clientSecret: process.env.FB_APP_SECRET,
            fbGraphVersion: 'v5.0',
        };
        use(
            new FacebookTokenStrategy(
                options,
                async (
                    accessToken: string,
                    refreshToken: string,
                    profile: FacebookTokenStrategy.Profile,
                    done: any,
                ) => {
                    try {
                        const user = await this.userRepository.findOrCreate(profile);
                        return done(null, user);
                    } catch (err) {
                        return done(err, null);
                    }
                },
            ),
        );
    }
}
