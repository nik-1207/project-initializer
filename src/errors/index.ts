export class UnsupportedError extends Error {
  message: string;
  code = "ERR_UNSUPPORTED";
  name = "Unsupported Error";
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
