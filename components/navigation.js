class CreateNavLink {
  constructor(data) {
    this.href = data.href;
    this.textNode = data.textNode;
    this.target = data.target;
  }

  createDomElements() {
    let anchor = document.createElement("a");
    anchor.href = this.href;
    if (this.target) anchor.target = this.target;
    anchor.appendChild(document.createTextNode(this.textNode));

    return anchor;
  }
}
const navJSON = [
  { href: "#", textNode: "About", target: false },
  { href: "#", textNode: "Our Team", target: false },
  { href: "#", textNode: "Contact", target: false }
];

const navElements = document.querySelectorAll("nav");
const navLinks = navJSON.map(elementData => new CreateNavLink(elementData));

navElements.forEach(element =>
  navLinks.forEach(link => {
    element.appendChild(link.createDomElements());
  })
);
