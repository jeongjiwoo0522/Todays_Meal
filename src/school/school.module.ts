import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { NeisModule } from '../neis/neis.module';

@Module({
  imports: [NeisModule.register()],
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
