import { Injectable }    from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { Configuration, OpenAIApi } from "openai";

@Injectable()
export class PromptGeneratorService {
    constructor(
        private readonly configService: ConfigService,
    ) {}


    public async getPromptList(): Promise<Array<any>> {
        const configuration = new Configuration({
            apiKey: this.configService.get('OPENAI_API_KEY'),
        });

        const openai = new OpenAIApi(configuration);
        const response = await openai.listModels()
        console.log(response)

        return [
            response.data.data,
            "prompt 1",
            "prompt 2",
        ]
    }
}
