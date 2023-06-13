import * as admin from 'firebase-admin';
export declare class FirebaseRemoteConfigService {
  readonly app: admin.app.App;
  private remoteConfig;
  constructor(app: admin.app.App);
  getTemplate(): Promise<admin.remoteConfig.RemoteConfigTemplate>;
  getTemplateAtVersion(versionNumber: number | string): Promise<admin.remoteConfig.RemoteConfigTemplate>;
  validateTemplate(template: admin.remoteConfig.RemoteConfigTemplate): Promise<admin.remoteConfig.RemoteConfigTemplate>;
  publishTemplate(
    template: admin.remoteConfig.RemoteConfigTemplate,
    options?: {
      force: boolean;
    },
  ): Promise<admin.remoteConfig.RemoteConfigTemplate>;
  createTemplateFromJSON(json: string): admin.remoteConfig.RemoteConfigTemplate;
  rollback(versionNumber: string | number): Promise<admin.remoteConfig.RemoteConfigTemplate>;
  listVersions(options?: admin.remoteConfig.ListVersionsOptions): Promise<admin.remoteConfig.ListVersionsResult>;
}
