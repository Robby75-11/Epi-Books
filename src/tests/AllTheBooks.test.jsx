import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

test("renderizza tante .card quante sono le entry in fantasy.json", () => {
  const { container } = render(<AllTheBooks />);
  const cards = container.querySelectorAll(".card");
  expect(cards).toHaveLength(fantasy.length);
});
