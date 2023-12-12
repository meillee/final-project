const filterList = document.querySelector(".filter");
const filterButtons = filterList.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".projects");

let projectsIndex = 0;

projects.forEach((project) => {
  project.style.viewTransitionName = `project-${++projectsIndex}`;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filter = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterProjects(filter);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterProjects(filter);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterProjects(projectsFilter) {
  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");

    if (projectsFilter === "all" || projectsFilter === projectCategory) {
      project.removeAttribute("hidden");
    } else {
      project.setAttribute("hidden", "");
    }
  });
}
