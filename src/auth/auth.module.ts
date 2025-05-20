import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [JwtModule.register({})],
  controllers: [AuthController],
})
export class AuthModule {}
