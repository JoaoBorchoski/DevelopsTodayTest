import { compare } from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../users/users.entity'
import { Repository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import auth from '../../config/auth'

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async login(login: string, password: string) {
    const { expires_in_token, secret_token } = auth

    const findByEmail = await this.usersRepository.findOne({
      where: { login },
      select: [
        'id',
        'name',
        'login',
        'password',
        'isDisabled',
        'createdAt',
        'updatedAt',
      ],
    })

    if (!findByEmail) {
      console.log('User not found')

      return {
        error: 'User not found',
      }
    }

    const passwordMatch = await compare(password, findByEmail!.password!)

    if (!passwordMatch) {
      console.log('User not found')

      return {
        error: 'User not found',
      }
    }

    const token = sign({}, secret_token, {
      subject: findByEmail!.id,
      expiresIn: expires_in_token,
    })

    const result = {
      token,
      user: findByEmail,
    }

    return result
  }
}
