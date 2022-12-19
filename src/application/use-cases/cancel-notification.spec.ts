import { Notification } from '@application/entities';
import { NotificationContent } from '@application/entities/notification';
import {
  CancelNotification,
  NotificationNotFound,
} from '@application/use-cases';
import { InMemoryNotificationRepository } from '@test/repositories';

describe('Send notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'example-recipient-id',
    });

    await notificationRepository.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification when it does not exist', () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({ notificationId: 'notification.id' });
    }).rejects.toThrow(NotificationNotFound);
  });
});
