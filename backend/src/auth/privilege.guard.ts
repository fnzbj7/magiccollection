import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './entity/user.entity';

@Injectable()
export class PrivilegeGuard implements CanActivate {
    constructor(public privilege: string) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const user: User = <User>context.switchToHttp().getRequest().user;
        return user.privileges.some(priv => priv.name === this.privilege);
    }
}
