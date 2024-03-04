import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.entity';
import { UserDto } from './dto/student.dto';
import { STUDENT_REPOSITORY } from '../core/constants';

@Injectable()
export class UsersService {

    constructor(@Inject(STUDENT_REPOSITORY) private readonly studentRepository: typeof Student) { }

    async create(user: UserDto): Promise<Student> {
        return await this.studentRepository.create<Student>(user);
    }

    async findOneByEmail(email: string): Promise<Student> {
        return await this.studentRepository.findOne<Student>({ where: { email } });
    }

    async findOneById(id: number): Promise<Student> {
        return await this.studentRepository.findOne<Student>({ where: { id } });
    }
}
