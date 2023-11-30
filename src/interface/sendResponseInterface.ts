export interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  token?: string | null;
  data?: T | null;
}
