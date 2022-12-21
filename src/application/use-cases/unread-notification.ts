import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';
import { NotificationNotFound } from '@application/use-cases';

export interface UnreadNotificationRequest {
  notificationId: string;
}

export type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.noticationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();
    await this.noticationsRepository.save(notification);
  }
}
