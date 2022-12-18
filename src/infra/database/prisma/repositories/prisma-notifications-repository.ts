import { Injectable } from '@nestjs/common';

import { Notification } from '@application/entities';
import { NotificationsRepository } from '@application/repositories';

import { PrismaService } from '@infra/database/prisma';
import { PrismaNotificationMapper } from '@infra/database/prisma/mappers';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
