import { Module } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';

import { PrismaService } from '@infra/database/prisma';
import { PrismaNotificationsRepository } from '@infra/database/prisma/repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
