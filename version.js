const { version } = require('./package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');


var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
let gitInfo = new Date().toLocaleDateString('default', options);

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

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);

