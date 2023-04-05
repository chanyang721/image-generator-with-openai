import { ConfigService } from '@nestjs/config';
export declare class PromptGeneratorService {
    private readonly configService;
    constructor(configService: ConfigService);
    getPromptList(): Promise<Array<string>>;
}
