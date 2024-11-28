import { InterfaceSubject } from 'src/subject/subject';

export type InterfaceLevel = {
  id: number;
  name: string;
};

export type InterfaceLevelSubject = {
  level: InterfaceLevel;
  subject: InterfaceSubject;
};
