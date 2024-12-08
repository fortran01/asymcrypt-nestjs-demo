# RSA Cryptography NestJS Demo

This NestJS application demonstrates RSA cryptographic operations including key generation, encryption/decryption, and digital signatures.

## Features

- RSA key pair generation
- Data encryption using public key
- Data decryption using private key
- Digital signature creation
- Signature verification
- Modern web interface for all operations

## Prerequisites

- Node.js 14 or higher
- npm (Node package manager)

## Setup Instructions

- Install dependencies:

```bash
npm install
```

- Start the development server:

```bash
npm run start:dev
```

The application will be available at http://localhost:3000

## API Endpoints

- `GET /get_public_key` - Retrieve the public key
- `POST /encrypt` - Encrypt data using the public key
- `POST /decrypt` - Decrypt data using the private key
- `POST /sign` - Create a digital signature for a message
- `POST /verify` - Verify a message signature

## Technologies Used

- NestJS - A progressive Node.js framework
- node-forge - A native implementation of TLS and various cryptographic tools
- Bootstrap - For the frontend UI

## Security Note

This is a demonstration application and should not be used in production without proper security review and hardening.
