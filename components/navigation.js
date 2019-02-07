class CreateNavLink {
  constructor(data) {
    this.href = data.href;
    this.textNode = data.textNode;
    this.target = data.target;
  }

  getElements() {
    let anchor = document.createElement("a");
    anchor.href = this.href;
    if (this.target) anchor.target = this.target;
    anchor.appendChild(document.createTextNode(this.textNode));

    return anchor;
  }
}
const navJSON = [
  { href: "#home", textNode: "Home", target: false },
  { href: "#about", textNode: "About", target: false },
  { href: "#ourTeam", textNode: "Our Team", target: false },
  {
    href: "https://artfolio-ea.netlify.com/",
    textNode: "Get Started",
    target: false
  }
];

const navElements = document.querySelectorAll("nav");
const navLinks = navJSON.map(elementData => new CreateNavLink(elementData));

navElements.forEach(element =>
  navLinks.forEach((link, i) => {
    if (
      (element.parentNode.classList.contains("dropdown") && i !== 0) ||
      !element.parentNode.classList.contains("dropdown")
    ) {
      element.appendChild(link.getElements());
    }
  })
);
