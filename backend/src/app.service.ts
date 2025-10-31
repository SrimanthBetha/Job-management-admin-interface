import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs = [];

  findAll() {
    return this.jobs;
  }

  create(jobData) {
    this.jobs.push(jobData);
    return { message: 'Job published successfully', job: jobData };
  }
}
