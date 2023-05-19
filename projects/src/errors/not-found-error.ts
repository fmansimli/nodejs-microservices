import { CustomError, IErrorData } from "./custom-error";

export class NotFoundError extends CustomError {
  public httpCode = 404;

  serialize(): IErrorData[] {
    return [{ message: this.message }];
  }

  constructor(public message: string) {
    super(message);
  }
}
