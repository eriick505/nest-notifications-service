import { Notification } from '../entities/notification';
import { Content } from '../entities/notification.content';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.noticationsRepository.create(notification);

    return {
      notification,
    };
  }
}
