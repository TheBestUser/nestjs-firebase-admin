import { Injectable } from '@nestjs/common';
import * as messaging from 'firebase-admin/messaging';
import { FirebaseBaseService } from './firebase-admin-base.service';

@Injectable()
export class FirebaseMessagingService extends FirebaseBaseService {
  get messaging() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return messaging.getMessaging(this.app);
  }

  send(message: messaging.Message, dryRun?: boolean): Promise<string> {
    return this.messaging.send(message, dryRun);
  }
  sendAll(messages: messaging.Message[], dryRun?: boolean): Promise<messaging.BatchResponse> {
    return this.messaging.sendAll(messages, dryRun);
  }
  sendMulticast(message: messaging.MulticastMessage, dryRun?: boolean): Promise<messaging.BatchResponse> {
    return this.messaging.sendMulticast(message, dryRun);
  }
  sendToDevice(
    registrationToken: string | string[],
    payload: messaging.MessagingPayload,
    options?: messaging.MessagingOptions,
  ): Promise<messaging.MessagingDevicesResponse> {
    return this.messaging.sendToDevice(registrationToken, payload, options);
  }
  sendToDeviceGroup(
    notificationKey: string,
    payload: messaging.MessagingPayload,
    options?: messaging.MessagingOptions,
  ): Promise<messaging.MessagingDeviceGroupResponse> {
    return this.messaging.sendToDeviceGroup(notificationKey, payload, options);
  }
  sendToTopic(
    topic: string,
    payload: messaging.MessagingPayload,
    options?: messaging.MessagingOptions,
  ): Promise<messaging.MessagingTopicResponse> {
    return this.messaging.sendToTopic(topic, payload, options);
  }
  sendToCondition(
    condition: string,
    payload: messaging.MessagingPayload,
    options?: messaging.MessagingOptions,
  ): Promise<messaging.MessagingConditionResponse> {
    return this.messaging.sendToCondition(condition, payload, options);
  }
  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<messaging.MessagingTopicManagementResponse> {
    return this.messaging.subscribeToTopic(registrationTokens, topic);
  }
  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<messaging.MessagingTopicManagementResponse> {
    return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
  }
}
