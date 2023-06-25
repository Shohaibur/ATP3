import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

let User=[];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/1')
  getTest(): string {
    return this.appService.getTest();
  }

  @Get('/2')
  getTest2(): string {
    return 'Test 2?';
  }
 


  @Get('user')
  getUsers(){
    return User;
  }
  @Post('add')
  addUser(@Body() create:CreateDto){
    User.push(create);
    return 'user added'
  }
}
