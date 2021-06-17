import { Controller, Get, Query } from '@nestjs/common';

@Controller('school')
export class SchoolController {

  @Get("/")
  public async requestSchoolInfo(@Query() ) {

  }
}
