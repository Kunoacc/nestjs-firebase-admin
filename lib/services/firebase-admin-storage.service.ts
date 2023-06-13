import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Bucket } from '@google-cloud/storage';

@Injectable()
export class FirebaseStorageService {
  private storage: admin.storage.Storage;

  constructor(public readonly app: admin.app.App) {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    this.storage = this.app.storage();
  }

  bucket(name?: string): Bucket {
    return this.storage.bucket(name);
  }
}
