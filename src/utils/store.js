import { create } from "zustand";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || null,
};

const useAuthStore = create((set) => ({
  ...initialState,
  login: (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("userData");
    set({ user: null });
  },
}));

export default useAuthStore;
