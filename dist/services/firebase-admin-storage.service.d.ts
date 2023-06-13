import * as admin from 'firebase-admin';
import { Bucket } from '@google-cloud/storage';
export declare class FirebaseStorageService {
  readonly app: admin.app.App;
  private storage;
  constructor(app: admin.app.App);
  bucket(name?: string): Bucket;
}
