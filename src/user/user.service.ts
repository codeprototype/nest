import { Body, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';
import { UsePipes } from '@nestjs/common';
import { EnrichedUserPipe } from './user.pipe';
import { Logger } from './user.provider';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: Logger,    
    ) {}
  private readonly users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  ];
  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  @UsePipes(new EnrichedUserPipe())
  create(userDto: UserDto): User {
    const user = {
      ...userDto,
    } as User;
    this.logger.log(`userData:${JSON.stringify(user)}`);
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }
}
