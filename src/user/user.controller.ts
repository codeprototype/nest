import { Controller, Param, Body, Get, Post } from '@nestjs/common';
import { Logger } from './user.provider';
import { UserService  } from './user.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly UserService:UserService,
        private readonly logger:Logger
    ){}

    @Get()
    findAll():User[]{
        this.logger.log("getting all users")
        return this.UserService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string): User {
        this.logger.log(`getting a user by id" ${id}`)
        return this.UserService.findOne(+id)
    }
    @Post()
    create(@Body() userDto: UserDto): User {
      this.logger.log(`Creating user with name ${userDto.name}`);
      const user = this.UserService.create(userDto);
      return user;
    }
}
