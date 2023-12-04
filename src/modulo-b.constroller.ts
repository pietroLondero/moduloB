import { Controller, Get } from '@nestjs/common';
import { ModuloBService } from './modulo-b.service';
import { ModuloAService } from '@pietro/modulo-a';
import { TestA } from '@pietro/modulo-a';
@Controller('B')
export class ModuloBController {
    constructor(
        private readonly moduloBService: ModuloBService,
        private readonly ModuloAService: ModuloAService
    ) { }

    @Get('modulo-b')
    async getHello(): Promise<string> {
        return await this.moduloBService.getHello();
    }

    @Get('modulo-a')
    async getHelloFromModuloA(): Promise<string> {
        return await this.moduloBService.getHelloFromModuloA();
    }

    @Get('modulo-a-2')
    async getHelloFromModuloA2(): Promise<string> {
        return await this.ModuloAService.getHello();
    }

    @Get('modulo-a-3')
    async getTestA(): Promise<TestA> {
        return await this.ModuloAService.getTestA(
            {
                name: 'Pietro',
                age: 10
            }
        );
    }
}
