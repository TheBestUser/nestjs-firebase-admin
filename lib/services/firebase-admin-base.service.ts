import { App } from 'firebase-admin/app';

export abstract class FirebaseBaseService {
  constructor(public readonly app: App) {}
}
