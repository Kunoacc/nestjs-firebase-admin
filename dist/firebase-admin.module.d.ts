import { DynamicModule } from '@nestjs/common';
import { FirebaseAdminModuleAsyncOptions, FirebaseAdminModuleOptions } from './firebase-admin.interface';
export declare class FirebaseAdminModule {
  static forRoot(options: FirebaseAdminModuleOptions): DynamicModule;
  static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule;
}
