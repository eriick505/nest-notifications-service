import { Module } from '@nestjs/common';

import { SendNotification } from '@application/use-cases';

import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
