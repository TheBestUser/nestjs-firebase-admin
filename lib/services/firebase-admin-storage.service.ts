import { Injectable } from '@nestjs/common';
import * as storage from 'firebase-admin/storage';
import { Bucket } from '@google-cloud/storage';
import { FirebaseBaseService } from './firebase-admin-base.service';

@Injectable()
export class FirebaseStorageService extends FirebaseBaseService {
  get storage() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return storage.getStorage(this.app);
  }

  bucket(name?: string): Bucket {
    return this.storage.bucket(name);
  }
}
