
export const findType = (type=[], typeId) =>
types.find(type => type.id === typeId)

export const findProject = (projects=[], projectId) =>
projects.find(project => project.id === projectId)

export const getprojectsFortype = (projects=[], typeId) => (
(!typeId)
  ? projects
  : projects.filter(project => project.typeId === typeId)
)

export const countprojectsFortype = (projects=[], typeId) =>
projects.filter(project => project.typeId === typeId).length