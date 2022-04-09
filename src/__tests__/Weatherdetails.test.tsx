import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Weatherdetails from '../component/Weatherdetails'

test('snapshot for weathercomponent', ()=>{
    const weathersnap = render(
        <BrowserRouter>
        <Weatherdetails/>
        </BrowserRouter>
    );

    expect(weathersnap).toMatchSnapshot()
})

describe('test for weather component', () => {
    it('renderring weather', () => {
      render(
        <BrowserRouter>
           <Weatherdetails/>
        </BrowserRouter>
      );
      screen.debug();
    })
  })