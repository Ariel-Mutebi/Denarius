import elementDictionary from "./elementDictionary";
import renderOnboarding from "./onboarding";

function setUpTourButton () {
  document.getElementById("tour-button")?.addEventListener("click", () => {
    renderOnboarding();

    // prevent sidebar covering tutorial on mobile
    if(elementDictionary.menuIcon.isVisible() && elementDictionary.navBar.isVisible()) { // as in mobile screen
      elementDictionary.navBar.get()?.classList.add("d-none");
    };
  });
};

export default setUpTourButton;