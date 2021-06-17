import { Module } from '@nestjs/common';
import { MealModule } from '../meal/meal.module';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [SchoolModule, MealModule],
})
export class AppModule {}
