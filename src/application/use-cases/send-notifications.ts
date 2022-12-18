import { Injectable } from '@nestjs/common';

import { Notification } from '@application/entities';
import { NotificationContent } from '@application/entities/notification/notification.content';
import { NotificationsRepository } from '@application/repositories';

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.noticationsRepository.create(notification);

    return {
      notification,
    };
  }
}
