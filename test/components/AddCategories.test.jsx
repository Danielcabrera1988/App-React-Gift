import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/component/AddCategories";

describe("Pruebas a AddCategories", () => {

  const inputValue = "goku";

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    //Para disparar eventos se utiliza fireEvent
    fireEvent.input(input, {target: {value: inputValue}});
    expect(input.value).toBe(inputValue);
  });

  test("debe de llamar onNewCategory su el input tiene un alor", () => {
    //jest.fn() => es un Mock => es una simulacion de esa funcion, no es la implementacion real.
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //Disparando los eventos
    fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
   })
});
