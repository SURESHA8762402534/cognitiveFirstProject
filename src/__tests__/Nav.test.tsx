import {getByRole, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../component/Nav';
import React from 'react'

test('get snapshot for nav', ()=>{
    const shot = render(
        <BrowserRouter>
        <Nav/>
        </BrowserRouter>
    );
    expect(shot).toMatchSnapshot()
})

test('test for nav button', () => {
    render(
        <BrowserRouter>
        <Nav/>
        </BrowserRouter>
    );
    const btn = screen.getByRole('button');
    const inputs = screen.getByRole('textbox');

    expect(btn).toBeInTheDocument();
    expect(inputs).toBeInTheDocument()
})