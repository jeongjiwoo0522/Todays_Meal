import { ApiProperty } from '@nestjs/swagger';

export class GetSchoolInfoResponse {
  @ApiProperty({ description: '시도교육청코드', example: 'G10', type: String })
  public readonly ATPT_OFCDC_SC_CODE: string;

  @ApiProperty({
    description: '표준학교코드',
    example: '38428473',
    type: String,
  })
  public readonly SD_SCHUL_CODE: string;
}
