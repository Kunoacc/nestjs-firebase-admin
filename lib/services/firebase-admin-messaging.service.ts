import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Message, BatchResponse, MulticastMessage } from 'firebase-admin/messaging';

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
