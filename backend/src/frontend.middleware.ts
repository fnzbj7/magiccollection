import * as path from 'path';
import { Request, Response } from 'express';

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
  '.html',
  '.json',
  '.webmanifest',
];

const resolvePath = (file: string) =>
  path.resolve(`./dist/magiccollection/${file}`);

const ROUTE_PREFIX = 'api';

export function frontendMiddleware(
  req: Request,
  res: Response,
  next: () => void,
) {
  const { url } = req;
  if (url.indexOf(ROUTE_PREFIX) === 1) {
    next();
  } else if (allowedExt.filter((ext) => url.indexOf(ext) > 0).length > 0) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(resolvePath(url.split('?')[0]));
  } else {
    res.sendFile(resolvePath('index.html'));
  }
}
