/// <reference types="node" />
/// <reference types="node" />
import * as admin from 'firebase-admin';
export declare class FirebaseDatabaseService {
  private readonly app;
  private database;
  constructor(app: admin.app.App);
  goOffline(url?: string): void;
  goOnline(url?: string): void;
  ref(path?: string | admin.database.Reference, url?: string): admin.database.Reference;
  refFromURL(refUrl: string, url?: string): admin.database.Reference;
  getRules(url?: string): Promise<string>;
  getRulesJSON(url?: string): Promise<object>;
  setRules(source: string | object | Buffer, url?: string): Promise<void>;
  useEmulator(host: string, port: number, url?: string): void;
}
