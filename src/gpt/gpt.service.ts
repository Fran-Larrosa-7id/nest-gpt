import { Injectable } from '@nestjs/common';
import { orthographyUseCases } from './use-cases/orthography.use-cases.js';

@Injectable()
export class GptService {
  async orthographyCheck(text: string): Promise<unknown> {
    // Implementation for orthography check
    return await orthographyUseCases();
  }
}
