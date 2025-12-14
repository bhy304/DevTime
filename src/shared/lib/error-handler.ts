import { isAxiosError, type AxiosError } from 'axios';

export const errorHanldler = (error: AxiosError | unknown) => {
  console.error('에러 발생:', error);
  if (isAxiosError(error) && error.response?.data) {
    return error.response.data;
  }
};
