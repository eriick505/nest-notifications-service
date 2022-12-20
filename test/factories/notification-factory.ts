import { Notification, NotificationProps } from '@application/entities';
import { NotificationContent } from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new NotificationContent('Nova solicitação de amizade'),
    recipientId: 'example-recipient-id-different',
    ...override,
  });
}
