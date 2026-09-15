import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service.js';
import { OrthographyDto } from './dtos/orthography.dto.js';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  checkOrthography(@Body() orthographyDto: OrthographyDto) {
    return orthographyDto; // Placeholder for the actual implementation
    // return this.gptService.orthographyCheck(orthographyDto);
  }
}
