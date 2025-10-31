{
  "name": "backend",
  "version": "1.0.0",
  "description": "Simple NestJS backend for Job Management",
  "scripts": {
    "start": "node dist/main.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/main.ts",
    "build": "tsc"
  },
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.3"
  }
}
