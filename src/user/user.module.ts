import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Logger } from './user.provider';
import { UserController } from './user.controller';
import { UserLifecycle } from './user.lifecycle';
import { EnrichedUserPipe } from './user.pipe';

@Module({
  providers: [UserService, Logger, UserLifecycle, EnrichedUserPipe],
  controllers: [UserController],
})
export class UserModule {}

