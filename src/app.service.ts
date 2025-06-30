import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Que pasa hola';
  }
  getJuego(): string {
    return 'Rust';
  }
}
