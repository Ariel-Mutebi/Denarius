import jsContainer from "../domConstants/projectContainer";

// While this is all miscellaneous DOM-related stuff
// And is not exactly a function, in that it does not have one particular responsibility
// and that it ever needs to be called more than once,
// I still wrap it in this anonymous function/default export,
// So that the module has no "side-effects".
export default () => {
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("sidebar");

  function sizeAndToggle() {
    // hide menu, show icon on mobile
    if (window.innerWidth < 575) {
      if (menu) {
        menu.classList.add("d-none", "position-absolute");
      };
      
      if (menuIcon) {
        menuIcon.classList.remove("d-none");
      };

      // hide menu if user clicks away
      if (main && nav && menu) {
        main.addEventListener('click', (e) => {
          e.stopPropagation();

          if (!nav.contains(e.target as Node) && window.innerWidth < 575) {
            menu.classList.add("d-none");
          }
        });
      }
    } else {
      if (menu) {
        menu.classList.remove("d-none", "position-absolute");
      }
      if (menuIcon) {
        menuIcon.classList.add("d-none");
      }
    }

    // set main height to remaining VH under header
    const hgroup = document.querySelector("hgroup");
    if (hgroup && nav) {
      const hgroupHeight = hgroup.offsetHeight;
      const availableHeight = window.innerHeight - (hgroupHeight + 32);
      nav.style.height = `${availableHeight}px`;
      nav.style.maxHeight = nav.style.height;
      jsContainer.style.height = `${availableHeight}px`;
    }

    // maintain aspect ratio on arcade image cards
    const cardImgs = Array.from(document.getElementsByClassName("arcade-img")) as HTMLElement[];
    cardImgs.forEach(img => {
      img.style.height = `${img.clientWidth}px`;
    });
  }

  // Add an event listener to check screen width when the page loads and on resize
  window.addEventListener('load', sizeAndToggle);
  window.addEventListener('resize', sizeAndToggle);

  // show/collapse menu when icon clicked
  if (menuIcon && menu) {
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle("d-none");
    });
  }
};