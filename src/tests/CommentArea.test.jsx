import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("comments testing", () => {
  // ora creo i singoli test

  it("mounts correctly the comments", () => {
    // dopo aver scritto il titolo, ora descrivo il test
    // per ogni test ci sono 4 steps:
    // 1) montaggio del componente nel virtual DOM
    render(<CommentArea />);
    // 2) ricerca dell'elemento
  });
});
