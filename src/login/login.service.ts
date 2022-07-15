import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service'

@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService) {}
    
    async login(body: Record<string,any>) {
        //TODO verifier login/mot de passe dans la base de donnée auprès des repository     
        const userLoged = true
    if (userLoged) {
        this.authService.createToken(body);    
    } else {
      throw new UnauthorizedException('Incorrect login credentials!');
    }
    }
}
