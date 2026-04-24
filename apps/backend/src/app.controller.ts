import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      service: 'om-studio-backend',
      status: 'ok',
    };
  }
}

