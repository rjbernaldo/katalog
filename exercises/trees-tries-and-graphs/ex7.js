/*
* You are given a list of projects and a list of dependencies (which is a list
* of pairs of projects, where the second project is dependent on the first
* project). All of a project's dependencies must be built before the project
* is. Find a build order that will allow the projects to be built. If there is
* no valid build order, return an error.
*/

const buildOrder = (projects, deps) => {
  // if projects list satisfies deps return projects
  if (isSatisfied(projects, deps)) return projects;
  // else do some swapping
  const swappedProjects = swapProjects(projects, deps);
  // recurse with new projects
  return buildOrder(swappedProjects, deps);
};

function isSatisfied(projects, deps) {
  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];
    const first = projects.indexOf(dep[0]);
    const second = projects.indexOf(dep[1]);

    if (first > second) return false;
  }

  return true;
}

function swapProjects(projects, deps) {
  let swappedProjects = projects;

  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];
    const first = swappedProjects.indexOf(dep[0]);
    const second = swappedProjects.indexOf(dep[1]);

    if (first > second) {
      swappedProjects = [
        ...projects.slice(0, second),
        dep[0],
        ...projects.slice(second + 1),
      ];

      swappedProjects = [
        ...projects.slice(0, first),
        dep[1],
        ...projects.slice(first + 1),
      ];
    }
  }

  return swappedProjects;
}
