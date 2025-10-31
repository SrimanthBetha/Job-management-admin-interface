import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs: any[] = []; // ✅ define type as array of any (or a proper interface)

  create(jobData: any) {
    this.jobs.push(jobData);
    return { message: 'Job added successfully', jobData };
  }

  findAll() {
    return this.jobs;
  }
}
