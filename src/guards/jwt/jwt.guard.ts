import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ERR_401 } from '@shared/constants/message.constants.js';
import { verifyToken } from '@shared/helpers/jwt.helper.js';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const jwtToken = request.headers['authorization'];
    if (!jwtToken) {
      throw new HttpException(ERR_401, HttpStatus.UNAUTHORIZED);
    }
    try {
      verifyToken(jwtToken);
      return true;
    } catch (err) {
      throw new HttpException(ERR_401, HttpStatus.UNAUTHORIZED);
    }
  }
}
