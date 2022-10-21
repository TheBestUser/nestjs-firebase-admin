import { Injectable } from '@nestjs/common';
import * as remoteConfig from 'firebase-admin/remote-config';
import { FirebaseBaseService } from './firebase-admin-base.service';

@Injectable()
export class FirebaseRemoteConfigService extends FirebaseBaseService {
  get remoteConfig() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return remoteConfig.getRemoteConfig(this.app);
  }

  getTemplate(): Promise<remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.getTemplate();
  }

  getTemplateAtVersion(versionNumber: number | string): Promise<remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.getTemplateAtVersion(versionNumber);
  }

  validateTemplate(template: remoteConfig.RemoteConfigTemplate): Promise<remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.validateTemplate(template);
  }

  publishTemplate(
    template: remoteConfig.RemoteConfigTemplate,
    options?: { force: boolean },
  ): Promise<remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.publishTemplate(template, options);
  }

  createTemplateFromJSON(json: string): remoteConfig.RemoteConfigTemplate {
    return this.remoteConfig.createTemplateFromJSON(json);
  }

  rollback(versionNumber: string | number): Promise<remoteConfig.RemoteConfigTemplate> {
    return this.remoteConfig.rollback(versionNumber);
  }

  listVersions(options?: remoteConfig.ListVersionsOptions): Promise<remoteConfig.ListVersionsResult> {
    return this.remoteConfig.listVersions(options);
  }
}
