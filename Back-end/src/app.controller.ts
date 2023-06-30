import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto, User } from './dto/create.dto';

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

 //'''''''''''''Code''''''''''''''
  
  @Post('addUser')
  createUser(@Body() create:CreateDto){
    User.push(create);
    return 'user added'
  }

  @Get('users')
  getUsers(){
    return User;
  }

}
