import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/component/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GiftGrid", () => {
  const category = "Goku";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  //Implementacion del Mock completo de cualquier hook
  test("debe de mostrar items cuando se cargas las imagenes mediante el useFetchGif", () => {
    const gifs = [{
      id: 'abc',
      title: 'Goku',
      url: 'http://gokuGodMode.com/ggm.jpg'
    },{
      id: 'asd',
      title: 'veguetau',
      url: 'http://gokuGodMode.com/vgm.jpg'

    }]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
