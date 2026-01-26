function toggleElementVisibility(sectionClass) {
  const element = document.getElementsByClassName(sectionClass)[0];
  const currentDisplay = window.getComputedStyle(element).display;
  element.style.display = currentDisplay === "none" ? "flex" : "none";
}

export default toggleElementVisibility;
