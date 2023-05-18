import { CustomError, IErrorData } from "./custom-error";

export class DbConnectionError extends CustomError {
  public reason = "Database connection error";
  public httpCode = 500;

  serialize(): IErrorData[] {
    return [{ message: this.reason }];
  }

  constructor() {
    super();
  }
}
