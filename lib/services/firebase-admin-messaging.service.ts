import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Message, BatchResponse, MulticastMessage } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class FirebaseMessagingService {
  private messaging: admin.messaging.Messaging;

  constructor(public readonly app: admin.app.App) {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    this.messaging = this.app.messaging();
  }
  sendEach(messages: Message[], dryRun?: boolean): Promise<BatchResponse> {
    return this.messaging.sendEach(messages, dryRun);
  }
  sendEachForMulticast(message: MulticastMessage, dryRun?: boolean): Promise<BatchResponse> {
    return this.messaging.sendEachForMulticast(message, dryRun);
  }

  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string> {
    return this.messaging.send(message, dryRun);
  }

  sendAll(messages: admin.messaging.Message[], dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendAll(messages, dryRun);
  }

  sendMulticast(message: admin.messaging.MulticastMessage, dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendMulticast(message, dryRun);
  }

  sendToDevice(
    registrationToken: string | string[],
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDevicesResponse> {
    return this.messaging.sendToDevice(registrationToken, payload, options);
  }

  sendToDeviceGroup(
    notificationKey: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDeviceGroupResponse> {
    return this.messaging.sendToDeviceGroup(notificationKey, payload, options);
  }

  sendToTopic(
    topic: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingTopicResponse> {
    return this.messaging.sendToTopic(topic, payload, options);
  }

  sendToCondition(
    condition: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingConditionResponse> {
    return this.messaging.sendToCondition(condition, payload, options);
  }

  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.subscribeToTopic(registrationTokens, topic);
  }

  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
  }
}
