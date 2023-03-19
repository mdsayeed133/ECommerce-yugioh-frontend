import React from "react";
import { shallow } from "enzyme";
import Home from "./home.jsx";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders the component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("contains the logo", () => {
    expect(wrapper.find(".logo").exists()).toBe(true);
  });

  it("contains the home header", () => {
    expect(wrapper.find(".home-header").exists()).toBe(true);
  });

  it("contains the home about section", () => {
    expect(wrapper.find(".home-about").exists()).toBe(true);
  });

  it("contains the home images", () => {
    expect(wrapper.find(".home-images").exists()).toBe(true);
  });

  it("contains the home login", () => {
    expect(wrapper.find(".home-login").exists()).toBe(true);
  });

  it("contains the home footer", () => {
    expect(wrapper.find(".home-footer").exists()).toBe(true);
  });

  it("renders all image elements", () => {
    expect(wrapper.find("img")).toHaveLength(7);
  });

  it("renders the correct text in the home header", () => {
    expect(wrapper.find("h1").text()).toEqual(
      "Welcome to the Yu-Gi-Oh! Card Store!"
    );
  });
});
