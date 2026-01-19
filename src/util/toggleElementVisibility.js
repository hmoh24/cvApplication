function toggleElementVisibility(sectionClass) {
  console.log("click");
  const element = document.getElementsByClassName(sectionClass)[0];
  console.log(element);
  element.style.visibility =
    element.style.visibility === "visible" ? "hidden" : "visible";
}

export default toggleElementVisibility;
