import React from 'react'

export default React.createContext({
  projectLists: [],
  projectDetails: [],
  addType: () => {},
  addProject: () => {},
  deleteProject: () => {},
  updateProject: () => {},
  deleteType: () => {},
})