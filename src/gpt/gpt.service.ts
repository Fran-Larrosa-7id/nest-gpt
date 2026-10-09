import { Injectable } from '@nestjs/common';
import { orthographyUseCases } from './use-cases/orthography.use-cases.js';
import { OrthographyDto } from './dtos/index.js';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthographyDto): Promise<unknown> {
    // Implementation for orthography check
    return await orthographyUseCases({
      prompt: orthographyDto.prompt,
    });
  }
}
