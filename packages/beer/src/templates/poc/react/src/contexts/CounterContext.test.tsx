import { render } from "@testing-library/react"
import { CounterConsumer, CounterContextProps } from "./CounterContext"

const contextExpectedtInitialValue = undefined

describe("Context | CounterContext", () => {
  describe("when calling CounterConsumer", () => {
    it(`the initial value for the context is ${contextExpectedtInitialValue}`, () => {
      const receivedConsumerValue = jest.fn().mockImplementation((consumerValue: CounterContextProps | undefined) => consumerValue)

      render(
        <CounterConsumer>
         {(context) => receivedConsumerValue(context)}
        </CounterConsumer>
      )
      expect(receivedConsumerValue).toHaveBeenCalledWith(contextExpectedtInitialValue)
    })
  })
})
