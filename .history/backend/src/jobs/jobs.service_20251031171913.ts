import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Techify',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CloudNest',
      location: 'Bangalore',
      type: 'Contract',
      salary: '$60,000 - $80,000',
    },
  ];

  findAll() {
    return this.jobs;
  }

  findOne(id: number) {
    return this.jobs.find(job => job.id === id);
  }
}
