import { Injectable } from '@nestjs/common';
import { InterfaceLevelSubject } from './level';

@Injectable()
export class LevelService {
  findLevelAndSubjectByName(name: string): InterfaceLevelSubject {
    return null;
  }
}
