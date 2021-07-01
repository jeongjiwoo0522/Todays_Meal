import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from 'src/exception-filter';
import { MealModule } from '../meal/meal.module';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [SchoolModule, MealModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ]
})
export class AppModule {}
