import Neis from '@my-school.info/neis-api';
import { HttpException } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { NeisModule } from '../neis/neis.module';
import { GetSchoolInfoResponse } from './dto/response/getSchoolInfoResponse';
import { ISchoolInfoRow } from './interface/ISchoolInfo';

@Injectable()
export class SchoolService {
  constructor(
    @Inject(NeisModule.NeisInjectToken)
    private readonly neis: Neis,
  ) {}

  public async getSchoolInfo(
    schoolName: string,
  ): Promise<GetSchoolInfoResponse> {
    try {
      const school: ISchoolInfoRow[] = await this.neis.getSchoolInfo({
        SCHUL_NM: schoolName,
      });
      return {
        ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE: school[0].SD_SCHUL_CODE,
        SCHUL_NM: school[0].SCHUL_NM,
      };
    } catch (err) {
      throw new HttpException('Invalid Parameter', 400);
    }
  }
}
