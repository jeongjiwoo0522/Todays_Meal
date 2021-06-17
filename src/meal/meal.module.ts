import { Module } from '@nestjs/common';
import { NeisModule } from '../neis/neis.module';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';

@Module({
  imports: [NeisModule.register()],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
