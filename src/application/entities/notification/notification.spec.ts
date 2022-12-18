import { Notification } from './notification';
import { NotificationContent } from './notification.content';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
