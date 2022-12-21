import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories';

export interface CountRecipientNotificationsRequest {
  recipientId: string;
}

export interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private noticationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.noticationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
