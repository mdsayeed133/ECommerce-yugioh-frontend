import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../reducers/userReducer/userSlice";
import LoginPage from "./login";

describe("LoginPage component", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = configureStore({ reducer: { user: userSlice } });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("contains the login title", () => {
    const loginTitle = wrapper.find(".login-title");
    expect(loginTitle.text()).toBe("Enter the Realm of Shadows");
  });

  it("renders the login form", () => {
    const loginForm = wrapper.find(".login-form");
    expect(loginForm).toHaveLength(1);
  });

  it("renders username and password input fields", () => {
    const usernameInput = wrapper.find("#username");
    const passwordInput = wrapper.find("#password");
    expect(usernameInput).toHaveLength(1);
    expect(passwordInput).toHaveLength(1);
  });

  it("renders the login button", () => {
    const loginButton = wrapper.find(".login-btn");
    expect(loginButton.text()).toBe("Login");
  });

  it("renders the registration link", () => {
    const registerLink = wrapper.find(".login-link Link");
    expect(registerLink.text()).toBe("Here");
  });
});
