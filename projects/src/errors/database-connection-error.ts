import { CustomError, IErrorData } from "./custom-error";

export class DbConnectionError extends CustomError {
  public message = "Database connection error";
  public httpCode = 500;

  serialize(): IErrorData[] {
    return [{ message: this.message }];
  }

  constructor(message: string) {
    super(message);

    this.message = message;
  }
}
