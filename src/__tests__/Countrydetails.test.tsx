import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Countrydetails from '../component/Countrydetails';

it('country component test', () => {
    const country = render(
        <BrowserRouter>
        <Countrydetails/>
        </BrowserRouter>
    );
    expect(country).toMatchSnapshot()
})

describe('test for country details', () => {
    it('rendering detail country component', () => {
      render(
        <BrowserRouter>
           <Countrydetails/>
        </BrowserRouter>
      );
      screen.debug();
    })
  })
 