import React from 'react';
import ReactDOM from 'react-dom';
import ProjectAdd from './projectAdd';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><ProjectAdd /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });