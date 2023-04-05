import { Module }                from '@nestjs/common';
import { AppController }         from './app/app.controller';
import { PromptGeneratorModule } from './prompt-generator/prompt-generator.module';
import { ImageGeneratorModule }  from './image-generator/image-generator.module';
import { AppService }            from './app/app.service';
import { ConfigModule }          from '@nestjs/config'

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      PromptGeneratorModule,
      ImageGeneratorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
