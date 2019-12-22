import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import FacebookTokenStrategy = require('passport-facebook-token');
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

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
    const options = {
      clientID: '2495571677216519',
      clientSecret: '7b1a32bb6ee396961a2e20fb99b00e8d',
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
          const user = await this.userRepository.findOrCreate(profile);
          return done(null, user);
        },
      ),
    );
  }
}
