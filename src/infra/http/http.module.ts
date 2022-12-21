import { Module } from '@nestjs/common';

import {
  SendNotification,
  CancelNotification,
  CountRecipientNotifications,
  GetRecipientNotifications,
  ReadNotification,
  UnreadNotification,
} from '@application/use-cases';

import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
