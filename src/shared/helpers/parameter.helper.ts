import { HttpException, HttpStatus } from '@nestjs/common';
import { ParameterI } from '@shared/interfaces/parameter.interface.js';
import { decryptedData } from './bcrypt.helper.js';

export async function getParameter(
  parameter: ParameterI | undefined,
  code: string,
) {
  if (!parameter) {
    throw new HttpException(
      `No se encontro el parámetro con código" ${code}`,
      HttpStatus.BAD_GATEWAY,
    );
  }

  if (parameter.private) {
    parameter.value = decryptedData(parameter.value);
  }
  return parameter.value;
}
