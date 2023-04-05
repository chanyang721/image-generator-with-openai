"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const prompt_generator_service_1 = require("../prompt-generator/prompt-generator.service");
const config_1 = require("@nestjs/config");
let ImageGeneratorService = class ImageGeneratorService {
    constructor(configService, promptGeneratorService) {
        this.configService = configService;
        this.promptGeneratorService = promptGeneratorService;
    }
    async getImageList() {
        const promptList = await this.promptGeneratorService.getPromptList();
    }
};
ImageGeneratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prompt_generator_service_1.PromptGeneratorService])
], ImageGeneratorService);
exports.ImageGeneratorService = ImageGeneratorService;
//# sourceMappingURL=image-generator.service.js.map