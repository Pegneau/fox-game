import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`${ICONS[icon]}-icon`)
    .classList.toggle("highblighted", show);

export default function initButtons(handleUserActions) {
  let selectedIcon = 0;

  function buttonClick(event) {
    if (event.target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (event.target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
    } else {
      handleUserActions(ICONS[selectedIcon]);
    }
  }

  document.querySelector("button").addEventListener("click", buttonClick);
}
