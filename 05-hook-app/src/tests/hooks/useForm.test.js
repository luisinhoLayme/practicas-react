import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'Luisinho',
    email: 'luisinho@luisinho.com'
  }

  test('debe de regresar un formulario por defecto', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');

  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Emma'
        }
      });
    });

    const [ values ] = result.current;
    expect( values ).toEqual({ ...initialForm, name: 'Emma' });

  });

  test('debe de re-establecer el formulario con RESET', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Emma'
        }
      });

      reset();
    });

    const [ values ] = result.current;
    expect( values ).toEqual(initialForm);

  });

});
