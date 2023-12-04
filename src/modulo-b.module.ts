import { Module } from '@nestjs/common';
import { ModuloBService } from './modulo-b.service';
import { ModuloBController } from './modulo-b.constroller';
import { ModuloAModule } from '@pietro/modulo-a';

@Module({
  imports: [ModuloAModule],
  controllers: [ModuloBController],
  providers: [ModuloBService],
  exports: [ModuloBService],
})
export class ModuloBModule { }
