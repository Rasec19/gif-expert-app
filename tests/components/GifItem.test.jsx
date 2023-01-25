import { render, screen } from '@testing-library/react' 
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

    const title = 'React'
    const url   = 'https://udemy.com/react.jpg'
  
    test('Debe hacer match con el snapshot ', () => {

        const { container } = render( <GifItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();
    });
    
  
});