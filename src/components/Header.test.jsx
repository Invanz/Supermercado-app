import { test, expect } from "vitest"
import { Header } from "./Header"
import { render } from "@testing-library/jest-dom"

test("El valor total del carrito se inicializa en 0", () => {
    const { getByTestId } = render(<Header total={0} />);
    const totalValue = getByTestId("total").textContent;
    expect(totalValue).toEqual(0)
})