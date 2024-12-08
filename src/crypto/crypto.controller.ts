import { Controller, Get, Post, Body } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('get_public_key')
  getPublicKey() {
    return { public_key: this.cryptoService.getPublicKey() };
  }

  @Post('encrypt')
  encrypt(@Body() body: { data: string }) {
    const encrypted = this.cryptoService.encrypt(body.data);
    return { encrypted_data: encrypted };
  }

  @Post('decrypt')
  decrypt(@Body() body: { encrypted_data: string }) {
    const decrypted = this.cryptoService.decrypt(body.encrypted_data);
    return { decrypted_data: decrypted };
  }

  @Post('sign')
  sign(@Body() body: { message: string }) {
    const signature = this.cryptoService.sign(body.message);
    return { signature };
  }

  @Post('verify')
  verify(@Body() body: { message: string; signature: string }) {
    const verified = this.cryptoService.verify(body.message, body.signature);
    return { verified };
  }
}
