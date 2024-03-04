import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentProviders } from './student.providers';
@Module({
    providers:[StudentService, ...StudentProviders],
    exports:[StudentService]
})
export class StudentModule {}
