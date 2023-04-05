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
exports.PromptGeneratorController = void 0;
const common_1 = require("@nestjs/common");
const prompt_generator_service_1 = require("./prompt-generator.service");
let PromptGeneratorController = class PromptGeneratorController {
    constructor(promptGeneratorService) {
        this.promptGeneratorService = promptGeneratorService;
    }
    async getPromptList() {
        return await this.promptGeneratorService.getPromptList();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PromptGeneratorController.prototype, "getPromptList", null);
PromptGeneratorController = __decorate([
    (0, common_1.Controller)('prompt-generator'),
    __metadata("design:paramtypes", [prompt_generator_service_1.PromptGeneratorService])
], PromptGeneratorController);
exports.PromptGeneratorController = PromptGeneratorController;
//# sourceMappingURL=prompt-generator.controller.js.map