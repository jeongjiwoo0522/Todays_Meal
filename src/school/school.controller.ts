import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetSchoolInfoResponse } from './dto/response/getSchoolInfoResponse';
import { SchoolService } from './school.service';

@ApiTags('학교 정보')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get('/')
  @ApiOperation({
    summary: '학교 정보 목록 API',
    description: '급식을 가져오기 위해 필요한 학교 정보를 객체로 반환합니다',
  })
  @ApiResponse({ status: 200, type: [GetSchoolInfoResponse] })
  @ApiQuery({ name: 'SCHUL_NM', type: String, description: '학교명' })
  public requestSchoolInfo(@Query('SCHUL_NM') schoolName: string) {
    return this.schoolService.getSchoolInfo(schoolName);
  }
}
