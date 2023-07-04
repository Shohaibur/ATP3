import { Controller, Get, Post,Body,Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto} from './dto/create.dto';
let User=[]
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  
  @Post('user') //add user
  createUser(@Body() create:CreateDto){
    User.push(create);
    return 'user added'
  }

  @Get('user') //show users
  getUsers(){
    return User;
  }

  @Get('user/:id') //find user by id
  getUser(@Param('id')id:number):any
  {
    return User.find((User)=>User.id===id);
  }



}
