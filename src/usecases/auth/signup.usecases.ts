import { IBcryptService } from 'src/domain/adapters/bcrypt.interface';
import { ILogger } from 'src/domain/logger/logger.interface';
import { UserWithoutPassword } from 'src/domain/model/user';
import { UserRepository } from 'src/domain/repositories/userRepository.interface';
import { AuthLoginDto } from 'src/infrastructure/controllers/auth/auth-dto.class';
import { User } from 'src/infrastructure/entities/user.entity';

export class SignupUseCases {
  constructor(private readonly logger: ILogger, private readonly userRepository: UserRepository) {}
  async execute(auth: AuthLoginDto) {
    const user = await this.userRepository.createUser(auth.username, auth.password);
    if (!user) {
      throw 'Unable to create User';
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
