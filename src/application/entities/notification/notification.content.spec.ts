import { NotificationContent } from './notification.content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Você recebeu uma solicitação de amizade',
    );

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new NotificationContent('a')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characteres', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});
