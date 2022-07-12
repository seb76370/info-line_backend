import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {jwtConstants} from '../auth/constants'
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
      ) {}

    auth(user: Record<string,any>) {
        const payload = { username: user.login, secret:jwtConstants.secret};

      const access_token =  this.jwtService.sign(payload);
      console.log(access_token);
      
      return access_token;


         
    }





}
