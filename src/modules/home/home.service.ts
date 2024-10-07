import { Injectable } from '@nestjs/common';
import { version } from '../../../package.json';

@Injectable()
export class HomeService {
  getHome(): { version: string } {
    return { version };
  }
}
