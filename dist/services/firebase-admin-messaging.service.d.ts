import * as admin from 'firebase-admin';
import { Message, BatchResponse, MulticastMessage } from 'firebase-admin/messaging';
export declare class FirebaseMessagingService {
  readonly app: admin.app.App;
  private messaging;
  constructor(app: admin.app.App);
  sendEach(messages: Message[], dryRun?: boolean): Promise<BatchResponse>;
  sendEachForMulticast(message: MulticastMessage, dryRun?: boolean): Promise<BatchResponse>;
  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string>;
  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
}
