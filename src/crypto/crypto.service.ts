import { Injectable } from '@nestjs/common';
import * as forge from 'node-forge';

@Injectable()
export class CryptoService {
  private readonly keypair: forge.pki.rsa.KeyPair;

  constructor() {
    // Generate RSA key pair on service initialization
    this.keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
  }

  getPublicKey(): string {
    return forge.pki.publicKeyToPem(this.keypair.publicKey);
  }

  encrypt(data: string): string {
    const buffer = forge.util.createBuffer(data, 'utf8');
    const encrypted = this.keypair.publicKey.encrypt(buffer.getBytes(), 'RSA-OAEP');
    return forge.util.encode64(encrypted);
  }

  decrypt(encryptedData: string): string {
    const encrypted = forge.util.decode64(encryptedData);
    const decrypted = this.keypair.privateKey.decrypt(encrypted, 'RSA-OAEP');
    return forge.util.decodeUtf8(decrypted);
  }

  sign(message: string): string {
    const md = forge.md.sha256.create();
    md.update(message, 'utf8');
    const signature = this.keypair.privateKey.sign(md);
    return forge.util.encode64(signature);
  }

  verify(message: string, signature: string): boolean {
    try {
      const md = forge.md.sha256.create();
      md.update(message, 'utf8');
      const decodedSignature = forge.util.decode64(signature);
      return this.keypair.publicKey.verify(md.digest().getBytes(), decodedSignature);
    } catch (error) {
      return false;
    }
  }
}
