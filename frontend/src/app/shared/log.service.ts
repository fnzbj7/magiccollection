import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

export enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Off = 5,
}

@Injectable({ providedIn: 'root' })
export class LogService {
    level: LogLevel = LogLevel.All;
    logWithDate = true;

    log(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.All, optionalParams, 'color: Black');
    }

    debug(msg: string, ...optionalParams: any[]) {
        this.writeToLog(
            msg,
            LogLevel.Debug,
            optionalParams,
            'background: #222;color: #bada55',
        );
    }

    info(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Info, optionalParams, 'color: Blue');
    }

    warn(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams, 'color: Orange');
    }

    error(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Error, optionalParams, 'color: Red');
    }

    private writeToLog(
        msg: string,
        level: LogLevel,
        params: any[],
        style: string,
    ) {
        if (this.shouldLog(level)) {
            let value = '';

            // Build log string
            if (this.logWithDate) {
                value = moment()
                    .tz('Europe/Budapest')
                    .format('HH:mm:ss');
            }
            value += ' - Message: ' + msg;
            if (params.length) {
                value += ' - Extra Info: ' + this.formatParams(params);
            }

            // Log the value
            console.log('%c' + value, style);
        }
    }

    private shouldLog(level: LogLevel): boolean {
        let ret = false;
        if (
            (level >= this.level && level !== LogLevel.Off) ||
            this.level === LogLevel.All
        ) {
            ret = true;
        }
        return ret;
    }

    private formatParams(params: any[]): string {
        let ret: string = params.join(',');
        if (params.some(p => typeof p === 'object')) {
            ret = '';
            for (const item of params) {
                ret += JSON.stringify(item) + ',';
            }
        }
        return ret;
    }
}
