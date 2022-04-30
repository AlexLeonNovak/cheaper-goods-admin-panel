export type ResponseStatus = 'success' | 'error' | 'fail';
export type ResponseErrorTypes = 'BadRequestError' | 'ValidationError' | 'RequestError';
export type ResponseErrorMessageType = string[] | Record<string, string[]>;
