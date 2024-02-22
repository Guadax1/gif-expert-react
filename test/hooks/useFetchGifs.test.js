import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

    /*
        * const { images, isLoading } = useFetchGifs(); --> No se puede hacer directamente

        result   --> resultado del hook.
        unmount  --> resultado que se dispara cuando el hook es desmontado.
        rerender --> re-renderizar el hook
    */

describe('Pruebas en el Hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const {  images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );

        // Le pedimos al test que espere por una condición (debe ser true o false)
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0),
        expect( isLoading ).toBeFalsy();
        
    });

});