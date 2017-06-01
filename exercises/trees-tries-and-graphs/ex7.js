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
  const swappedProjects = projects;

  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];
    const first = swappedProjects.indexOf(dep[0]);
    const second = swappedProjects.indexOf(dep[1]);

    if (first > second) {
      const temp = swappedProjects[first];
      swappedProjects[first] = swappedProjects[second];
      swappedProjects[second] = temp;
    }
  }
  return swappedProjects;
}

const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
const e = 'e';

const projects = [c, e, d, b, a];
const deps = [
  [d, e],
  [c, d],
  [a, b],
  [b, c],
];

console.log(projects);
console.log(deps);
console.log(buildOrder(projects, deps));
