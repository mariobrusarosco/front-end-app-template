import React from "react";
import { render } from "@testing-library/react";
import { CounterContext } from "../../contexts/CounterContext";
import Counter from "./Counter";

describe("Components | Counter", () => {
  it("renders Counter's display", () => {
    const { getByText } = render(
      <CounterContext.Provider
        value={{
          counter: 4,
          increment: jest.fn(),
        }}
      >
        <Counter />
      </CounterContext.Provider>
    );

    const counterDisplay = getByText("Counter: 4");

    expect(counterDisplay).toBeDefined();
  });
});
