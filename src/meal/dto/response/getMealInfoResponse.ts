import { ApiProperty } from '@nestjs/swagger';

export class GetMealInfoResponse {
  public constructor() {
    this.breakfast = [];
    this.lunch = [];
    this.dinner = [];
  }

  @ApiProperty({
    type: [String],
    example: '[영양닭죽, 진미채오이무침, 나박김치, 야채고기말이, 두부도너츠]',
  })
  public readonly breakfast: string[];

  @ApiProperty({
    type: [String],
    example: '[차수수밥, 삼색만두국, 궁중떡볶이, 고갈비구이, 열무김치, 참외]',
  })
  public readonly lunch: string[];

  @ApiProperty({
    type: [String],
    example:
      '[중화비빔밥, 계란후라이, 우동국물, 꼬들단무지, 야채춘권, 쁘띠첼푸딩]',
  })
  public readonly dinner: string[];
}
