import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { log } from 'console';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers('Authorization') authorization = ''): string {
    let bearer: string = '';

    if (typeof authorization != 'undefined') {
      bearer = authorization.replace('Bearer ', '');
    }
    if (bearer === '') {
      throw new UnauthorizedException('No Token provided!');
    }
    console.log(bearer);
    return this.appService.getHello();
  }
}
