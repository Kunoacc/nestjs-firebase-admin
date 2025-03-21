import * as admin from 'firebase-admin';
import { ActionCodeSettings } from 'firebase-admin/lib/auth/action-code-settings-builder';
import { ProjectConfigManager } from 'firebase-admin/lib/auth/project-config-manager';
export declare class FirebaseAuthenticationService {
  readonly app: admin.app.App;
  private auth;
  constructor(app: admin.app.App);
  projectConfigManager(): ProjectConfigManager;
  generateVerifyAndChangeEmailLink(
    email: string,
    newEmail: string,
    actionCodeSettings?: ActionCodeSettings,
  ): Promise<string>;
  tenantManager(): admin.auth.TenantManager;
  createCustomToken(uid: string, developerClaims?: Object): Promise<string>;
  createUser(properties: admin.auth.CreateRequest): Promise<admin.auth.UserRecord>;
  deleteUser(uid: string): Promise<void>;
  deleteUsers(uids: string[]): Promise<admin.auth.DeleteUsersResult>;
  getUser(uid: string): Promise<admin.auth.UserRecord>;
  getUserByEmail(email: string): Promise<admin.auth.UserRecord>;
  getUserByPhoneNumber(phoneNumber: string): Promise<admin.auth.UserRecord>;
  getUserByProviderUid(providerId: string, uid: string): Promise<admin.auth.UserRecord>;
  getUsers(identifiers: admin.auth.UserRecord[]): Promise<admin.auth.GetUsersResult>;
  listUsers(maxResults?: number, pageToken?: string): Promise<admin.auth.ListUsersResult>;
  updateUser(uid: string, properties: admin.auth.UpdateRequest): Promise<admin.auth.UserRecord>;
  verifyIdToken(idToken: string, checkRevoked?: boolean): Promise<admin.auth.DecodedIdToken>;
  setCustomUserClaims(uid: string, customUserClaims: Object): Promise<void>;
  revokeRefreshTokens(uid: string): Promise<void>;
  importUsers(
    users: admin.auth.UserImportRecord[],
    options?: admin.auth.UserImportOptions,
  ): Promise<admin.auth.UserImportResult>;
  createSessionCookie(idToken: string, sessionCookieOptions: admin.auth.SessionCookieOptions): Promise<string>;
  verifySessionCookie(sessionCookie: string, checkForRevocation?: boolean): Promise<admin.auth.DecodedIdToken>;
  generatePasswordResetLink(email: string, actionCodeSettings?: admin.auth.ActionCodeSettings): Promise<string>;
  generateEmailVerificationLink(email: string, actionCodeSettings?: admin.auth.ActionCodeSettings): Promise<string>;
  generateSignInWithEmailLink(email: string, actionCodeSettings: admin.auth.ActionCodeSettings): Promise<string>;
  listProviderConfigs(options: admin.auth.AuthProviderConfigFilter): Promise<admin.auth.ListProviderConfigResults>;
  getProviderConfig(providerId: string): Promise<admin.auth.AuthProviderConfig>;
  deleteProviderConfig(providerId: string): Promise<void>;
  updateProviderConfig(
    providerId: string,
    updatedConfig: admin.auth.UpdateAuthProviderRequest,
  ): Promise<admin.auth.AuthProviderConfig>;
  createProviderConfig(config: admin.auth.AuthProviderConfig): Promise<admin.auth.AuthProviderConfig>;
}
