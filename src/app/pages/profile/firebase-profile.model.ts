import { ShellModel } from 'src/app/shard/shell/data-store';

export class FirebaseProfileModel extends ShellModel {
  image: string;
  name: string;
  role: string;
  description: string;
  email: string;
  provider: string;
  phoneNumber: string;

  constructor() {
    super();
  }
}
