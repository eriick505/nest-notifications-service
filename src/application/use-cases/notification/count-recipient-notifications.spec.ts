import { CountRecipientNotifications } from '@application/use-cases';

import { InMemoryNotificationRepository } from '@test/repositories';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
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

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientIdToTest,
    });

    expect(count).toEqual(2);
  });
});
