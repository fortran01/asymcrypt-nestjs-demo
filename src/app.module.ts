import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [
    CryptoModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
