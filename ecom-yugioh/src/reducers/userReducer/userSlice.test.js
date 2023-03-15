import { configureStore } from "@reduxjs/toolkit";
import userReducer, { login, logout, register } from "./userSlice";
import axios from "axios";

jest.mock("axios");

describe("userSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { user: userReducer } });
  });

  afterEach(() => {
    axios.post.mockClear();
  });

  it("should handle login", async () => {
    const loginRequest = { email: "test@example.com", password: "password" };
    const loginResponse = {
      token: "dummy_token",
      user: { id: 1, email: "test@example.com" },
    };
    axios.post.mockResolvedValue({ data: loginResponse });

    await store.dispatch(login(loginRequest));
    const state = store.getState().user;

    expect(state.status).toBe("succeeded");
    expect(state.login).toEqual(loginResponse);
  });

  it("should handle logout", async () => {
    await store.dispatch(logout());
    const state = store.getState().user;

    expect(state.status).toBe("idle");
    expect(state.login).toBeNull();
  });

  it("should handle register", async () => {
    const registerRequest = {
      email: "test@example.com",
      password: "password",
      confirmPassword: "password",
    };
    const registerResponse = { message: "User registered successfully" };
    axios.post.mockResolvedValue({ data: registerResponse });

    await store.dispatch(register(registerRequest));
    const state = store.getState().user;

    expect(state.status).toBe("succeeded");
    expect(state.login).toEqual(registerResponse);
  });

  it("should handle login error", async () => {
    const loginRequest = { email: "test@example.com", password: "password" };
    axios.post.mockRejectedValue(new Error("Login failed"));

    try {
      await store.dispatch(login(loginRequest));
    } catch (error) {
      const state = store.getState().user;

      expect(state.status).toBe("failed");
      expect(state.error).toBe("Login failed");
    }
  });

  it("should handle register error", async () => {
    const registerRequest = {
      email: "test@example.com",
      password: "password",
      confirmPassword: "password",
    };
    axios.post.mockRejectedValue(new Error("Registration failed"));

    try {
      await store.dispatch(register(registerRequest));
    } catch (error) {
      const state = store.getState().user;

      expect(state.status).toBe("failed");
      expect(state.error).toBe("Registration failed");
    }
  });
});
