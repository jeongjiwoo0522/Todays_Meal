import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetMealInfoResponse } from './dto/response/getMealInfoResponse';
import { MealService } from './meal.service';

@ApiTags('급식')
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get('/')
  @ApiOperation({
    summary: '급식 목록 API',
    description: '급식 목록을 객체로 반환합니다.',
  })
  @ApiQuery({
    name: 'ATPT_OFCDC_SC_CODE',
    description: '시도교육청코드',
    type: String,
    required: true,
    example: "G10"
  })
  @ApiQuery({
    name: 'SD_SCHUL_CODE',
    description: '표준학교코드',
    type: String,
    required: true,
    example: "3943943"
  })
  @ApiQuery({
    name: 'MLSV_YMD',
    description: '급식일자',
    type: String,
    required: true,
    example: "20210617"
  })
  @ApiResponse({ status: 200, type: GetMealInfoResponse })
  public requestMealInfo() {
    return this.mealService.getMealInfo();
  }
}
