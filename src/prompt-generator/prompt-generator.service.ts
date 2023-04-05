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
        // const openaiModelLists = await openai.listModels()
        // console.log(openaiModelLists)

        // create chat completion
        // const chatResponse = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         {
        //             role: "user",
        //             content: "Hello?"
        //         }
        //     ]
        // })

        // create images
        const imageResponse = await openai.createImage({
            "prompt": "A cute baby sea otter",
            "n": 1,
            "size": "1024x1024"
        })

        return [
            imageResponse.data,
            "prompt 1",
            "prompt 2",
        ]
    }
}
