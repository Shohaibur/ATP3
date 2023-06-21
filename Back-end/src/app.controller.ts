import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

let User=[];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
 
  @Get('user')
  getUsers(){
    return User;
  }
}
