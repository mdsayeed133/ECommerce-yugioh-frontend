import { configureStore } from "@reduxjs/toolkit";
import cardSlice, { getAllCards } from "./cardSlice";
import axios from "axios";

jest.mock("axios");

describe("cardSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { card: cardSlice } });
  });

  afterEach(() => {
    axios.get.mockClear();
  });

  it("should handle getAllCards", async () => {
    const cards = [
      { id: 1, name: "Card 1" },
      { id: 2, name: "Card 2" },
    ];
    axios.get.mockResolvedValue({ data: cards });

    await store.dispatch(getAllCards());
    const state = store.getState().card;

    expect(state.status).toBe("succeeded");
    expect(state.cards).toEqual(cards);
  });

  it("should handle getAllCards error", async () => {
    axios.get.mockRejectedValue(new Error("Failed to fetch cards"));

    try {
      await store.dispatch(getAllCards());
    } catch (error) {
      const state = store.getState().card;

      expect(state.status).toBe("failed");
      expect(state.error).toBe("Failed to fetch cards");
    }
  });
});
