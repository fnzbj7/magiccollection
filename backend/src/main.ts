import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontendMiddleware } from './frontend.middleware';
import * as config from 'config';
import * as compression from 'compression';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const server: any = config.get('server');
    const log: any = config.get('log');
    const logger = new Logger('Bootstrap');

    let options: any = { logger: log.LogLevel };

    if (config.get('https')) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fs = require('fs');
        const keyFile = fs.readFileSync('../frontend/certificates/localhost.key');
        const certFile = fs.readFileSync('../frontend/certificates/localhost.crt');
        options = {
            ...options,
            httpsOptions: {
                key: keyFile,
                cert: certFile,
            },
        };
    }

    const app = await NestFactory.create(AppModule, options);
    // app.enableCors();
    app.setGlobalPrefix('api');
    app.use(compression());
    app.use(frontendMiddleware);
    const port = process.env.PORT || server.port;
    logger.log(`The server is listening on port ${port}`);
    await app.listen(port);
}

function wrapBackgroundTask(promise) {
    promise.catch((error: any) => console.error('Oh no!', error));
}

wrapBackgroundTask(bootstrap());
