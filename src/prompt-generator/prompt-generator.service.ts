import { Injectable }    from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { Configuration, OpenAIApi } from "openai";

@Injectable()
export class PromptGeneratorService {
    constructor(
        private readonly configService: ConfigService,
    ) {}


    public async getPromptList(): Promise<Array<any>> {
        // openai chatpat3.5에게 text 생성 요청
        const apiKey = this.configService.get('OPENAI_API_KEY');
        const configuration = new Configuration({
            // organization: this.configService.get('OPENAI_ORGANIZATION'),
            apiKey: apiKey,
        });
        const openai = new OpenAIApi(configuration);
        // const response = openai.
        const response = await openai.listFiles();
        console.log(response.data)

        return [
            "prompt 1",
            "prompt 2",
        ]
    }
}
