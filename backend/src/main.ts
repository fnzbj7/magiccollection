import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontendMiddleware } from './frontend.middleware';
import * as config from 'config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const server: any = config.get('server');
    const log: any = config.get('log');

    let options: any = { logger: log.LogLevel };

    if (config.get('https')) {
        const fs = require('fs');
        const keyFile = fs.readFileSync(
            __dirname + '/../certificate/localhost.key',
        );
        const certFile = fs.readFileSync(
            __dirname + '/../certificate/localhost.crt',
        );
        options = {
            ...options,
            httpsOptions: {
                key: keyFile,
                cert: certFile,
            },
        };
    }

    const app = await NestFactory.create(AppModule, options);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.use(frontendMiddleware);
    const port = process.env.PORT || server.port;
    await app.listen(port);
}
bootstrap();
