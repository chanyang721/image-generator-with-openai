"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGeneratorModule = void 0;
const common_1 = require("@nestjs/common");
const image_generator_service_1 = require("./image-generator.service");
const image_generator_controller_1 = require("./image-generator.controller");
const prompt_generator_module_1 = require("../prompt-generator/prompt-generator.module");
const prompt_generator_service_1 = require("../prompt-generator/prompt-generator.service");
let ImageGeneratorModule = class ImageGeneratorModule {
};
ImageGeneratorModule = __decorate([
    (0, common_1.Module)({
        imports: [prompt_generator_module_1.PromptGeneratorModule],
        controllers: [image_generator_controller_1.ImageGeneratorController],
        providers: [image_generator_service_1.ImageGeneratorService, prompt_generator_service_1.PromptGeneratorService]
    })
], ImageGeneratorModule);
exports.ImageGeneratorModule = ImageGeneratorModule;
//# sourceMappingURL=image-generator.module.js.map