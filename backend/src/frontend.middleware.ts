import { NestMiddleware, Injectable, INestApplication } from '@nestjs/common';
import * as path from 'path';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
  '.webp',
];

const resolvePath = (file: string) => path.resolve(`./dist/magiccollection/${file}`);

const ROUTE_PREFIX = 'api';

export function frontendMiddleware(req: any, res: any, next: () => void) {
  const { url } = req;
  if (url.indexOf(ROUTE_PREFIX) === 1) {
    next();
  } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
    res.sendFile(resolvePath(url));
  } else {
    res.sendFile(resolvePath('index.html'));
  }
}
