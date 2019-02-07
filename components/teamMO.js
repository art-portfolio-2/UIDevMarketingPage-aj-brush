class TeamMember {
  constructor(attrs) {
    const imgName =
      attrs.name
        .toLowerCase()
        .split(" ")
        .join("") + ".png";

    this.imgSrc = `./img/team/${imgName}`;
    this.name = attrs.name;
    this.job = attrs.job;
    this.contact = Object.keys(attrs.contact).map(linkName => {
      return { link: attrs.contact[linkName], name: linkName };
    });
  }

  getElements() {
    // <div class="teamMember">
    let div = document.createElement("div");
    div.classList = "teamMember";

    // <img src="./img/team/andrewbrush.png" alt="Andrew Brush" />
    let img = document.createElement("img");
    img.src = this.imgSrc;
    img.alt = this.name;
    div.appendChild(img);

    // <div>
    let innerDIV = document.createElement("div");

    // <p class="teamName">Andrew Brush</p>
    // <p class="teamJob">UI Developer</p>
    // <p class="teamContact">GitHub - Linked In</p>
    let pName = document.createElement("p");
    let pJob = document.createElement("p");
    let pContact = document.createElement("p");
    pName.classList = "teamName";
    pJob.classList = "teamJob";
    pContact.classList = "teamContact";
    let pNameText = document.createTextNode(this.name);
    let pJobText = document.createTextNode(this.job);

    // Add links to pContact
    this.contact.forEach((linkData, i) => {
      let link = document.createElement("a");
      link.href = linkData.link;
      link.target = "_blank";
      link.appendChild(document.createTextNode(linkData.name));
      pContact.appendChild(link);
      if (i !== this.contact.length - 1)
        pContact.appendChild(document.createTextNode(" - "));
    });

    pName.appendChild(pNameText);
    pJob.appendChild(pJobText);

    innerDIV.appendChild(pName);
    innerDIV.appendChild(pJob);
    innerDIV.appendChild(pContact);

    // </div>
    div.appendChild(innerDIV);

    // </div>
    return div;
  }
}
const teamMemberJSON = [
  {
    name: "Andrew Brush",
    job: "UI Developer",
    contact: {
      GitHub: "https://github.com/ajb85",
      LinkedIn: "https://www.linkedin.com/in/andrew-brush-58205b122/",
      Web: "https://ajbrush.com/"
    }
  },
  {
    name: "Jon Palacio",
    job: "UI Developer",
    contact: {
      GitHub: "https://github.com/bangarangler"
    }
  },
  {
    name: "Javontay McElroy",
    job: "UI Developer",
    contact: {
      GitHub: "https://github.com/javontaymcelroy"
    }
  },
  {
    name: "Ilya Yelizarov",
    job: "Frontend Developer",
    contact: {
      GitHub: "https://github.com/ills5771"
    }
  },
  {
    name: "Elisha Atulomah",
    job: "Frontend Developer",
    contact: {
      GitHub: "https://github.com/siratl"
    }
  },
  {
    name: "Angel Torres",
    job: "Frontend Developer",
    contact: {
      GitHub: "https://github.com/angel-torres"
    }
  },
  {
    name: "Brooks Poltl",
    job: "Backend Developer",
    contact: {
      GitHub: "https://github.com/BrooksPoltl"
    }
  },
  {
    name: "Csilla Gates",
    job: "Project Lead",
    contact: {
      GitHub: "https://github.com/Csillag61",
      Web: "https://cookpad.com/hu/felhasznalok/6659384"
    }
  }
];

const members = teamMemberJSON.map(member => new TeamMember(member));

let container = document.querySelector(".teamContainer");

members.forEach(member => container.appendChild(member.getElements()));
