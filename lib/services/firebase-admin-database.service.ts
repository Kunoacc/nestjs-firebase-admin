import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseDatabaseService {
  private database: (url?: string) => admin.database.Database;

  constructor(private readonly app: admin.app.App) {
    if (!app) {
      throw new Error('Firebase instance is undefined.');
    }
    this.database = app.database;
  }

  goOffline(url?: string): void {
    this.database(url).goOffline();
  }

  goOnline(url?: string): void {
    this.database(url).goOnline();
  }

  ref(path?: string | admin.database.Reference, url?: string): admin.database.Reference {
    return this.database(url).ref(path);
  }

  refFromURL(refUrl: string, url?: string): admin.database.Reference {
    return this.database(url).refFromURL(url);
  }

  getRules(url?: string): Promise<string> {
    return this.database(url).getRules();
  }

  getRulesJSON(url?: string): Promise<object> {
    return this.database(url).getRulesJSON();
  }

  setRules(source: string | object | Buffer, url?: string): Promise<void> {
    return this.database(url).setRules(source);
  }

  useEmulator(host: string, port: number, url?: string): void {
    this.database(url).useEmulator(host, port);
  }
}
