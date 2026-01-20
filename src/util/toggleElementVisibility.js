function toggleElementVisibility(sectionClass) {
  console.log("click");
  const element = document.getElementsByClassName(sectionClass)[0];
  console.log(element.style.display);
  const currentDisplay = window.getComputedStyle(element).display;
  element.style.display = currentDisplay === "none" ? "flex" : "none";
}

export default toggleElementVisibility;
