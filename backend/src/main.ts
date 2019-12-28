import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontendMiddleware } from './frontend.middleware';
import * as config from 'config';

async function bootstrap() {
    const server: any = config.get('server');

    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.use(frontendMiddleware);
    const port = process.env.PORT || server.port;

    await app.listen(port);
}
bootstrap();
