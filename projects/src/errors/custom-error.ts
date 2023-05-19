export abstract class CustomError extends Error implements ICustomError {
  abstract httpCode: number;
  abstract serialize(): IErrorData[];

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export interface ICustomError {
  httpCode: number;
  serialize(): IErrorData[];
}

export interface IErrorData {
  message: string;
  field?: string;
}
