import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';
import { NotificationNotFound } from '@application/use-cases';

export interface CancelNotificationRequest {
  notificationId: string;
}

export type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.noticationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();
    await this.noticationsRepository.save(notification);
  }
}
