const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
var moment = require('moment-timezone');

// moment.locale('hu')
let a = moment().tz('Europe/Budapest');
console.log(a);
let gitInfo = a.format('YYYY-MM-DD HH:mm:ss')
console.log(gitInfo);


const file = resolve(__dirname, 'src', 'environments', 'version.service.ts');
writeFileSync(file,
`import { Injectable } from '@angular/core';

// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
@Injectable({providedIn: 'root'})
export class VersionService {
  public VERSION = ${JSON.stringify(gitInfo, null, 4)};
}
/* tslint:enable */
`, { encoding: 'utf-8' });

console.log(`Wrote version info to ${relative(resolve(__dirname, '..'), file)}`);

