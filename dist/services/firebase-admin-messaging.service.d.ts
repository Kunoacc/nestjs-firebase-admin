import * as admin from 'firebase-admin';
import { Message, BatchResponse, MulticastMessage } from 'firebase-admin/lib/messaging/messaging-api';
export declare class FirebaseMessagingService {
  readonly app: admin.app.App;
  private messaging;
  constructor(app: admin.app.App);
  sendEach(messages: Message[], dryRun?: boolean): Promise<BatchResponse>;
  sendEachForMulticast(message: MulticastMessage, dryRun?: boolean): Promise<BatchResponse>;
  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string>;
  sendAll(messages: admin.messaging.Message[], dryRun?: boolean): Promise<admin.messaging.BatchResponse>;
  sendMulticast(message: admin.messaging.MulticastMessage, dryRun?: boolean): Promise<admin.messaging.BatchResponse>;
  sendToDevice(
    registrationToken: string | string[],
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDevicesResponse>;
  sendToDeviceGroup(
    notificationKey: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDeviceGroupResponse>;
  sendToTopic(
    topic: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingTopicResponse>;
  sendToCondition(
    condition: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingConditionResponse>;
  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
}
