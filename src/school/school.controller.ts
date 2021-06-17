import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get('/')
  @ApiOperation({
    summary: '학교 정보 목록 API',
    description: '학교 정보를 객체로 반환',
  })
  @ApiQuery({ name: 'SCHUL_NM', type: String, description: '학교명' })
  public requestSchoolInfo(@Query('SCHUL_NM') schoolName: string) {
    return this.schoolService.getSchoolInfo(schoolName);
  }
}
