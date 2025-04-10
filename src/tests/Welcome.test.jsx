import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Alert testing", () => {
  // ora creo i singoli test

  it("mounts correctly the Alert", () => {
    // dopo aver scritto il titolo, ora descrivo il test
    // per ogni test ci sono 4 steps:
    // 1) montaggio del componente nel virtual DOM
    render(<Welcome />);
    // 2) ricerca dell'elemento
    const alert = screen.getByRole("alert");
    // screen rappresenta il VIRTUAL DOM; su di esso cercheremo gli elementi
    // montati con il metodo "render"

    // 4) verifica delle aspettative
    expect(alert).toBeTruthy();
  });
});
