const main = document.querySelector("main");
const nav = document.querySelector("nav");
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

function sizeAndToggle() {
  // hide menu, show icon on mobile
  if (window.innerWidth < 575) {
    if (menu) {
      menu.classList.add("d-none");
      menu.classList.add("position-absolute");
    }
    if (menuIcon) {
      menuIcon.classList.remove("d-none");
    }

    // hide menu if user clicks away
    if (main && nav && menu) {
      main.addEventListener('click', function (event) {
        event.stopPropagation();

        if (!nav.contains(event.target as Node) && window.innerWidth < 575) {
          menu.classList.add("d-none");
        }
      });
    }
  } else {
    if (menu) {
      menu.classList.remove("d-none");
      menu.classList.remove("position-absolute");
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

    setTimeout(() => {
      const page = document.getElementsByTagName("section")[0];
      if (page) {
        page.style.height = `${availableHeight}px`;
      }
    }, 100); // 100ms delay so section can first be rendered
  }

  // maintain aspect ratio on game panel image cards
  const cardImgs = Array.from(document.getElementsByClassName("game-panel-img")) as HTMLElement[];
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
