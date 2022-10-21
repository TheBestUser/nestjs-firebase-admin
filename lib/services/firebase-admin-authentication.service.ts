import { Injectable } from '@nestjs/common';
import * as auth from 'firebase-admin/auth';
import { FirebaseBaseService } from './firebase-admin-base.service';

@Injectable()
export class FirebaseAuthenticationService extends FirebaseBaseService {
  get auth() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return auth.getAuth(this.app);
  }

  tenantManager(): auth.TenantManager {
    return this.auth.tenantManager();
  }
  createCustomToken(uid: string, developerClaims?: Object): Promise<string> {
    return this.auth.createCustomToken(uid, developerClaims);
  }
  createUser(properties: auth.CreateRequest): Promise<auth.UserRecord> {
    return this.auth.createUser(properties);
  }
  deleteUser(uid: string): Promise<void> {
    return this.auth.deleteUser(uid);
  }
  deleteUsers(uids: string[]): Promise<auth.DeleteUsersResult> {
    return this.auth.deleteUsers(uids);
  }
  getUser(uid: string): Promise<auth.UserRecord> {
    return this.auth.getUser(uid);
  }
  getUserByEmail(email: string): Promise<auth.UserRecord> {
    return this.auth.getUserByEmail(email);
  }
  getUserByPhoneNumber(phoneNumber: string): Promise<auth.UserRecord> {
    return this.auth.getUserByPhoneNumber(phoneNumber);
  }
  getUserByProviderUid(providerId: string, uid: string): Promise<auth.UserRecord> {
    return this.auth.getUserByProviderUid(providerId, uid);
  }
  getUsers(identifiers: auth.UserRecord[]): Promise<auth.GetUsersResult> {
    return this.auth.getUsers(identifiers);
  }
  listUsers(maxResults?: number, pageToken?: string): Promise<auth.ListUsersResult> {
    return this.auth.listUsers(maxResults, pageToken);
  }
  updateUser(uid: string, properties: auth.UpdateRequest): Promise<auth.UserRecord> {
    return this.auth.updateUser(uid, properties);
  }
  verifyIdToken(idToken: string, checkRevoked?: boolean): Promise<auth.DecodedIdToken> {
    return this.auth.verifyIdToken(idToken, checkRevoked);
  }
  setCustomUserClaims(uid: string, customUserClaims: Object): Promise<void> {
    return this.auth.setCustomUserClaims(uid, customUserClaims);
  }
  revokeRefreshTokens(uid: string): Promise<void> {
    return this.auth.revokeRefreshTokens(uid);
  }
  importUsers(users: auth.UserImportRecord[], options?: auth.UserImportOptions): Promise<auth.UserImportResult> {
    return this.auth.importUsers(users, options);
  }
  createSessionCookie(idToken: string, sessionCookieOptions: auth.SessionCookieOptions): Promise<string> {
    return this.auth.createSessionCookie(idToken, sessionCookieOptions);
  }
  verifySessionCookie(sessionCookie: string, checkForRevocation?: boolean): Promise<auth.DecodedIdToken> {
    return this.auth.verifySessionCookie(sessionCookie, checkForRevocation);
  }
  generatePasswordResetLink(email: string, actionCodeSettings?: auth.ActionCodeSettings): Promise<string> {
    return this.auth.generatePasswordResetLink(email, actionCodeSettings);
  }
  generateEmailVerificationLink(email: string, actionCodeSettings?: auth.ActionCodeSettings): Promise<string> {
    return this.auth.generateEmailVerificationLink(email, actionCodeSettings);
  }
  generateSignInWithEmailLink(email: string, actionCodeSettings: auth.ActionCodeSettings): Promise<string> {
    return this.auth.generateSignInWithEmailLink(email, actionCodeSettings);
  }
  listProviderConfigs(options: auth.AuthProviderConfigFilter): Promise<auth.ListProviderConfigResults> {
    return this.auth.listProviderConfigs(options);
  }
  getProviderConfig(providerId: string): Promise<auth.AuthProviderConfig> {
    return this.auth.getProviderConfig(providerId);
  }
  deleteProviderConfig(providerId: string): Promise<void> {
    return this.auth.deleteProviderConfig(providerId);
  }
  updateProviderConfig(
    providerId: string,
    updatedConfig: auth.UpdateAuthProviderRequest,
  ): Promise<auth.AuthProviderConfig> {
    return this.auth.updateProviderConfig(providerId, updatedConfig);
  }
  createProviderConfig(config: auth.AuthProviderConfig): Promise<auth.AuthProviderConfig> {
    return this.auth.createProviderConfig(config);
  }
}
