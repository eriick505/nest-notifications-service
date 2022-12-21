import { GetRecipientNotifications } from '@application/use-cases';

import { InMemoryNotificationRepository } from '@test/repositories';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get recipients notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    const recipientIdToTest = 'example-recipient-id';

    await notificationRepository.create(
      makeNotification({ recipientId: recipientIdToTest }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: recipientIdToTest }),
    );

    await notificationRepository.create(makeNotification());

    const { notifications } = await countRecipientNotifications.execute({
      recipientId: recipientIdToTest,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: recipientIdToTest }),
        expect.objectContaining({ recipientId: recipientIdToTest }),
      ]),
    );
  });
});
