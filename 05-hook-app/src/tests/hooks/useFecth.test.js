import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {

  test('debe de retornar la informacion por defecto', () => {

    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);

  });

  test('debe de tener la info deseada, loading false, error false', async() => {

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/posts/1'));
    await waitForNextUpdate()
    // try {
    //   await waitForNextUpdate(); // or some timeout high enough that an update should have happened by then
    // } catch (e) {
    //   if (!wait) {
    //     throw e
    //   }
    // }

    const { data, loading, error } = result.current;

    expect(data.id).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);

  });

  test('debe de manejar el error', async() => {

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users/1'));

    await waitForNextUpdate()

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');

  });

});
