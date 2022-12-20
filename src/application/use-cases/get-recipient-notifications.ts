import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';
import { Notification } from '@application/entities';

export interface GetRecipientNotificationsRequest {
  recipientId: string;
}

export interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.noticationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
