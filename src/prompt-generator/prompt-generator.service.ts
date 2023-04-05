import { Injectable }    from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PromptGeneratorService {
    constructor(
        private readonly configService: ConfigService,
    ) {}


    public async getPromptList(): Promise<Array<string>> {
        // openai chatpat3.5에게 text 생성 요청
        this.configService.get('OPEN_AI_API_KEY')


        return [
            "prompt 1",
            "prompt 2",
        ]
    }
}
