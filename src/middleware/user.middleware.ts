import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserDto } from './dto/user.dto';

interface RequestUser extends Request {
  user: UserDto;
}

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: RequestUser, res: Response, next: NextFunction) {
    const user: UserDto = {
      id: 1,
      name: 'admin',
      email: '123@qq.com',
    };
    req.user = user;
    next();
  }
}
