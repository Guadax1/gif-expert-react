import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama',
          url   = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => {    
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();

        //* Forma 1:
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        //* Forma más elegante:
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe de mostrar el título en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        // Los textos que se encuentran dentro de los atributos del componente no seran evalulados por el getByText()
    });

});