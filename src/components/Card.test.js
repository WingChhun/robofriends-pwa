import React from 'react';
//*import enzyme and Components
import {configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import {shallow, mount, render} from 'enzyme';
import Card from "./Card";

configure({adapter: new Adapter()});

// *Shallow tests only one component, does not test child components !test
// *Ideal for unit tests *Mount is ideal for full DOM rendering, things that use
//*  API, or lifecycle methods
describe("Card Component tests", () => {
    it('expect to render Card Component', () => {
        expect(shallow(<Card/>).length).toEqual(1);

    });
    it("Snapshot", () => {
        expect(shallow(<Card/>)).toMatchSnapshot();

    });

});
