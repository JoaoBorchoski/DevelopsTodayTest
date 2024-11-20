import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './users.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async listAllUsers() {
    const users = await this.usersRepository.find({
      select: ['id', 'name', 'login', 'isDisabled', 'createdAt', 'updatedAt'],
      order: { name: 'ASC' },
    })

    return users
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'name', 'login', 'isDisabled', 'createdAt', 'updatedAt'],
    })

    return user
  }
}
