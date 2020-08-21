import React from 'react';
import ReactDOM from 'react-dom';
import UpdateProject from './UpdateProject';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const project = {title:'test title', desc:'test desc', dateDue:'01/01/2020'};
    const div = document.createElement('div');
    ReactDOM.render(<Router><UpdateProject project='project' /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });