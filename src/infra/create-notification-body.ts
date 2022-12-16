import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsString()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
