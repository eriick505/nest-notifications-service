import { Notification } from './notification';
import { Content } from './notification.content';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});