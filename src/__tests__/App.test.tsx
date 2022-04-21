import { screen,render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

it('app snap',()=>{
    const tree = render(
        <BrowserRouter><App/></BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})