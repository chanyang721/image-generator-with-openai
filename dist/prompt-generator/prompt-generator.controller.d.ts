import { PromptGeneratorService } from './prompt-generator.service';
export declare class PromptGeneratorController {
    private readonly promptGeneratorService;
    constructor(promptGeneratorService: PromptGeneratorService);
    getPromptList(): Promise<string[]>;
}
