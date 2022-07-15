import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {jwtConstants} from '../auth/constants'

@Injectable()
export class AuthService {
  configService: any;
  userService: any;
    constructor(
        private jwtService: JwtService
      ) {}

    createToken(user: Record<string,any>) {
        const payload = { username: user.login, secret:jwtConstants.secret};

      const access_token =  this.jwtService.sign(payload);
      console.log(access_token);
      
      return access_token;
    }
      async isTokenValid(bearerToken: string): Promise<boolean> {
        const verifyOptions = { secret: jwtConstants.secret};
        let isValid: boolean = false;
        try {
        const payload = await this.jwtService.verifyAsync(bearerToken, verifyOptions);
        console.log(payload);
        const { username, typeid, iat, exp } = payload;
      } catch (error) {
        console.log(error);
        throw new HttpException(error, HttpStatus.UNAUTHORIZED);

      }
    return isValid;
  }
}
