import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
