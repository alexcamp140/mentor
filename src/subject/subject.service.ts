import { Injectable } from '@nestjs/common';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  createNewSubject({ name }: InterfacePostSubject): InterfaceSubject[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;
    return [...SUBJECTS, { id: newId, name }];
  }

  findOneById(id: number): InterfaceSubject {
    const subject = SUBJECTS.find((s) => s.id === id);
    return subject;
  }
}
