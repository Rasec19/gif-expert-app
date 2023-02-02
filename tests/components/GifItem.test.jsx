import { getByRole, render, screen } from '@testing-library/react' 
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

    const title = 'React'
    const url   = 'https://udemy.com/react.jpg'
  
    test('Debe hacer match con el snapshot ', () => {

        const { container } = render( <GifItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GifItem title={ title } url={ url } />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Debe de mostrar el titulo enm el componente', () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
     })
    
  
});