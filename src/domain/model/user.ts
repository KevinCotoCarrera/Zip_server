import { FileM } from './file';

export class UserWithoutPassword {
  id: number;
  username: string;
  createDate: Date;
  updatedDate: Date;
  lastLogin: Date;
  hashRefreshToken: string;
  files: FileM[];
}

export class UserM extends UserWithoutPassword {
  password: string;
}
