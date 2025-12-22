import { useAuthStore } from "@/entities/auth/model/authStore";
import axios, { type AxiosRequestConfig, type AxiosInstance, type InternalAxiosRequestConfig, AxiosError } from "axios";
import type { RefreshTokenResponse } from "@/entities/auth/model/auth.model";

interface AxiosRequestConfigWithRetry extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = useAuthStore.getState().accessToken;
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfigWithRetry;
        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry &&
          !originalRequest.url?.includes("/auth/refresh")
        ) {
          originalRequest._retry = true;

          try {
            const refreshToken = useAuthStore.getState().refreshToken;
            if (!refreshToken) throw new Error("refreshToken이 존재하지 않습니다.");

            const token = await this.post<{ refreshToken: string }, RefreshTokenResponse>("/auth/refresh", {
              refreshToken,
            });

            useAuthStore.getState().setAccessToken(token.accessToken);

            originalRequest.headers["Authorization"] = `Bearer ${token.accessToken}`;

            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            useAuthStore.getState().clearAuth();
            window.location.replace("/login");
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  async post<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.axiosInstance.post<R>(url, data, config);
    return response.data;
  }

  async put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.axiosInstance.put<R>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

export default HttpClient;
