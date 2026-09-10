import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module.js';

@Module({
  imports: [GptModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
