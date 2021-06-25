import Neis from '@my-school.info/neis-api';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { NeisModule } from '../neis/neis.module';
import { GetMealInfoResponse } from './dto/response/getMealInfoResponse';
import { IMealInfoRow } from './interface/IMealInfo';

@Injectable()
export class MealService {
  constructor(
    @Inject(NeisModule.NeisInjectToken)
    private readonly neis: Neis,
  ) {}

  private mealProperty: string[] = ['', 'breakfast', 'lunch', 'dinner'];

  public async getMealInfo(
    atptCode: string,
    schoolCode: string,
    yyyymmdd: string,
  ): Promise<GetMealInfoResponse> {
    const response = new GetMealInfoResponse();
    try {
      const rows: IMealInfoRow[] = await this.neis.getMealInfo({
        ATPT_OFCDC_SC_CODE: atptCode,
        SD_SCHUL_CODE: schoolCode,
        MLSV_YMD: yyyymmdd,
      });
      rows.forEach((row: IMealInfoRow) => {
        /**
         * 잡곡밥5.<br\>들깨수제비국5.6.9.13.<br\>깻잎&쌈무와 같은 형식을
         * [잡곡밥, 들깨수제비국, 깻잎&쌈무]로 바꿉니다
         */
        const meal: string[] = row.DDISH_NM.replace(/([0-9]+\.)+/g, '').split(
          '<br/>',
        );
        const prop: string = this.mealProperty[row.MMEAL_SC_CODE];
        response[prop] = meal;
      });
      return response;
    } catch (err) {
      return response;
    }
  }
}
