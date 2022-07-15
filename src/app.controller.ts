import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { log } from 'console';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authservice: AuthService,
  ) {}

  @Get()
  getHello(@Headers('Authorization') authorization = ''): string {
    let bearer: string = '';

    if (typeof authorization != 'undefined') {
      bearer = authorization.replace('Bearer ', '');
    }
    if (bearer === '') {
      throw new UnauthorizedException('No Token provided!');
    }
    try { this.authservice.isTokenValid(bearer)
    return this.appService.getHello();
    } 
    catch (error){ 
        console.log(error);
    }
    
  }
}
