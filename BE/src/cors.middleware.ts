import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowCredentials = !req.path.includes('/auth/signup');
    
    cors({
      origin: [
        'https://pay-n-roll.vercel.app', 
        'https://pay-n-roll.vercel.app/home', 
        'http://localhost:4200',
        'https://api.login.yahoo.com',
        'https://api.login.yahoo.com/oauth2/request_auth/.well-known/openid-configuration',
      ], 
      credentials: allowCredentials, 
    })(req, res, next);
  }
}