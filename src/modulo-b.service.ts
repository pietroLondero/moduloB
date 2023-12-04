import { Inject, Injectable } from '@nestjs/common';
import { ModuloAService } from '@pietro/modulo-a';

@Injectable()
export class ModuloBService {
    constructor(@Inject(ModuloAService) private readonly moduloAService: ModuloAService) {
    }

    async getHello(): Promise<string> {
        return 'Hello from Modulo B';
    }

    async getHelloFromModuloA(): Promise<string> {
        return this.moduloAService.getHello();
    }
}
