import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getAllJobs() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  getJob(@Param('id') id: string) {
    return this.jobsService.findOne(Number(id));
  }
}
