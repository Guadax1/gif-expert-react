import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox'); //El value de los input se buscan como textbox

        //El primer argumento del fireEvent.input es el HTML o nodo donde se realizará el evento, el segundo referente al evento como tal a realizar 
        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe('Saitama');

    });


    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn() // sirve para simular una función

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox'),
              form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');
        
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });


    test('No debe de llamar el onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        //* Se evalúa que el onNewCategory no halla sido llamado
        expect( onNewCategory ).toHaveBeenCalledTimes(0) 
        expect( onNewCategory ).not.toHaveBeenCalled()

    });

});