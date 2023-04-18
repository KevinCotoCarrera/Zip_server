import { User } from 'src/infrastructure/entities/user.entity';
import { UserM, UserWithoutPassword } from '../model/user';

export interface UserRepository {
  getUserByUsername(username: string): Promise<UserM>;
  createUser(username: string, password: string): Promise<User>;
  updateLastLogin(username: string): Promise<void>;
  updateRefreshToken(username: string, refreshToken: string): Promise<void>;
}
