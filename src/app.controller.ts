import { Controller, Get,Param,Post,Body } from '@nestjs/common';
import { Logger } from './user/user.provider';
import { UserService  } from './user/user.service';
import { User } from './user/user.model';
import { AppService } from './app.service';
import { UserDto } from './user/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
