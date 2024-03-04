import { Student } from './student.entity';
import { STUDENT_REPOSITORY } from '../core/constants';

export const StudentProviders = [{
    provide: STUDENT_REPOSITORY,
    useValue: Student,
}];