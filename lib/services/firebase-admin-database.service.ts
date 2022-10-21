import { Injectable } from '@nestjs/common';
import * as database from 'firebase-admin/database';
import { FirebaseBaseService } from './firebase-admin-base.service';

@Injectable()
export class FirebaseDatabaseService extends FirebaseBaseService {
  get database() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return database.getDatabase(this.app);
  }

  goOffline(): void {
    return this.database.goOffline();
  }
  goOnline(): void {
    return this.database.goOnline();
  }
  ref(path?: string | database.Reference): database.Reference {
    return this.database.ref(path);
  }
  refFromURL(url: string): database.Reference {
    return this.database.refFromURL(url);
  }
  getRules(): Promise<string> {
    return this.database.getRules();
  }
  getRulesJSON(): Promise<object> {
    return this.database.getRulesJSON();
  }
  setRules(source: string | object | Buffer): Promise<void> {
    return this.database.setRules(source);
  }
  useEmulator(host: string, port: number): void {
    this.database.useEmulator(host, port);
  }
}
