import { Request } from 'express';

type LogT = 'ERROR' | 'INFO' | 'LOG' | 'DEBUG';

export interface LogI {
  msName: string;
  type: LogT;
  message: string;
  req?: Request;
}
