import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  nickname?: string;
}

interface AuthStore {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      user: null,
      setUser: (user) => set({ user }),
      setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken, isAuthenticated: true }),
      setAccessToken: (accessToken) => set({ accessToken }),
      clearAuth: () => set({ accessToken: null, refreshToken: null, user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
      // 새로고침시 스토어가 복구될 때 실행
      // 토큰이 존재하면 isAuthenticated를 true로 변경
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken) {
          state.isAuthenticated = true;
        }
      },
    },
  ),
);
