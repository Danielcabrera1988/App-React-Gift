import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/component/GifItem";

describe("Comprobando GiftItem", () => {
  const title = "PELONDRA";
  const url = "http://algopelado.com/pelado.jpg";
  test("Debe realziar la snap del componente", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la img con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);

    expect( screen.getByRole('img').src ).toBe(url)
      
  });
});
