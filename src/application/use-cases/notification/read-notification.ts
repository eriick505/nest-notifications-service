import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';
import { NotificationNotFound } from '@application/use-cases';

export interface ReadNotificationRequest {
  notificationId: string;
}

export type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.noticationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();
    await this.noticationsRepository.save(notification);
  }
}
