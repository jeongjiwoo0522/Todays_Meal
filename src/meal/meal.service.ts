import Neis from '@my-school.info/neis-api';
import { Inject, Injectable } from '@nestjs/common';
import { NeisModule } from '../neis/neis.module';

@Injectable()
export class MealService {
  constructor(
    @Inject(NeisModule.NeisInjectToken)
    neis: Neis,
  ) {}

  public async getMealInfo() {}
}
