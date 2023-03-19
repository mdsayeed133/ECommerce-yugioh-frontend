import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("contains the welcome header", () => {
    const welcomeHeader = wrapper.find("h1");
    expect(welcomeHeader.text()).toBe("Welcome to the Yu-Gi-Oh! Card Store!");
  });

  it("contains the home-about paragraph", () => {
    const aboutParagraph = wrapper.find(".home-about p");
    expect(aboutParagraph.text()).toContain(
      "Discover, buy and trade your favorite Yu-Gi-Oh! cards"
    );
  });

  it("renders the images correctly", () => {
    const images = wrapper.find(".home-images img");
    expect(images).toHaveLength(6);
  });

  it("contains the login call to action", () => {
    const loginCTA = wrapper.find(".home-login h3");
    expect(loginCTA.text()).toBe("Ready to Play the Game of Shadows");
  });

  it("contains the sign-in button", () => {
    const signInButton = wrapper.find(".homepage-login-button");
    expect(signInButton.text()).toBe("Sign in now!");
  });

  it("contains the footer with the correct copyright", () => {
    const footer = wrapper.find(".home-footer p");
    expect(footer.text()).toContain(
      `© ${new Date().getFullYear()} Yu-Gi-Oh! Card Store. All rights reserved.`
    );
  });
});
