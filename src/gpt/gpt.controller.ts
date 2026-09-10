import { Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service.js';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  checkOrthography() {
    return this.gptService.orthographyCheck(
      'Sample text for orthography check',
    );
  }
}
