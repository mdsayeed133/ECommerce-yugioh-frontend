import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../reducers/userReducer/userSlice";
import RegisterPage from "./register";

describe("RegisterPage component", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { user: userSlice } });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("contains the register title", () => {
    const registerTitle = wrapper.find(".register-title");
    expect(registerTitle.text()).toBe("Create a Contract");
  });

  it("renders the registration form", () => {
    const registerForm = wrapper.find(".register-form");
    expect(registerForm).toHaveLength(1);
  });

  it("renders input fields for username, password, first name, last name, and country selection", () => {
    const usernameInput = wrapper.find("#username");
    const passwordInput = wrapper.find("#password");
    const firstNameInput = wrapper.find("#firstName");
    const lastNameInput = wrapper.find("#lastName");
    const countrySelect = wrapper.find(".register-select");

    expect(usernameInput).toHaveLength(1);
    expect(passwordInput).toHaveLength(1);
    expect(firstNameInput).toHaveLength(1);
    expect(lastNameInput).toHaveLength(1);
    expect(countrySelect).toHaveLength(1);
  });

  it("renders the register button", () => {
    const registerButton = wrapper.find(".register-btn");
    expect(registerButton.text()).toBe("Register");
  });

  it("renders the login link", () => {
    const loginLink = wrapper.find(".register-link Link");
    expect(loginLink.text()).toBe("Here");
  });
});
