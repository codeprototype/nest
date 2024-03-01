import { Injectable } from '@nestjs/common';

@Injectable()
export class Logger {
  private readonly message: string[] = [];

  log(message: string) {
    this.message.push(message);
    this.printAllMessage();
  }
  printAllMessage(): void {
    console.log(this.message);
  }
}
