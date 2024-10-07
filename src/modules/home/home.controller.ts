import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
import { AuthDisable } from '../../common/decorators/auth';

@Controller()
@AuthDisable()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  getHome(): { version: string } {
    return this.homeService.getHome();
  }
}
