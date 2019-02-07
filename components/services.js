//import json from "./servJSON.js";

class CreateServices {
  constructor(data) {
    this.img = data.img;
    this.h3 = data.h3;
    this.para = data.p;
  }

  createDomElements() {
    let div = document.createElement("DIV");

    // Create <img> element
    let img = document.createElement("IMG");
    img.src = this.img.src;
    img.alt = this.img.alt;

    // Create <h3> element
    let h3 = document.createElement("H3");
    const h3Text = document.createTextNode(this.h3);
    h3.appendChild(h3Text);

    // Create <p> element
    let para = document.createElement("P");
    const paraText = document.createTextNode(this.para);
    para.appendChild(paraText);

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(para);

    div.className = "service";

    return div;
  }
}

const json = [
  {
    img: {
      src: "./img/icons/setup.svg",
      alt: "Setup aF icon"
    },
    h3: "easy, intuitive setup",
    p:
      "Just a few clicks to get started!  Create your account begin adding your work you'd like to show to the world!"
  },
  {
    img: {
      src: "./img/icons/customize.svg",
      alt: "Customize aF icon"
    },
    h3: "customize aF to best showcase you",
    p:
      "Updating your porfolio in aF is a breeze.  Just finish your best work?  Add it to your portfolio and move it to the front for prominence."
  },
  {
    img: {
      src: "./img/icons/coding.svg",
      alt: "No Coding Required icon"
    },
    h3: "no coding experience required",
    p:
      "Don't worry if you don't know how to make websites!  Upload your work to aF and let it do the work for you."
  },
  {
    img: {
      src: "./img/icons/share.svg",
      alt: "Share aF icon"
    },
    h3: "share your work",
    p:
      "Once you're happy with your portfolio, just click share so the world see your work!  It's as simple as that, no fuss here."
  }
];

let services = document.querySelector(".services");
const servOBJs = json.map(elementsData => new CreateServices(elementsData));

servOBJs.forEach(servOBJ => services.appendChild(servOBJ.createDomElements()));

/*
<!-- Repetitive content here will be a component -->
<div class="service">
  <img
    src="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
    alt=""
  />
  <h3>easy, intuitive setup</h3>
  <p>
    Self-identify reposition ghosts transformation film Basquiat
    Warhol. Political poetic dynamic transgressive paradigm shift
    Fountain personal observation.
  </p>
</div>
<div class="service">
  <img
    src="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
    alt=""
  />
  <h3>customize aF to best showcase you</h3>
  <p>
    Self-identify reposition ghosts transformation film Basquiat
    Warhol. Political poetic dynamic transgressive paradigm shift
    Fountain personal observation.
  </p>
</div>
<div class="service">
  <img
    src="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
    alt=""
  />
  <h3>no coding experience required</h3>
  <p>
    Self-identify reposition ghosts transformation film Basquiat
    Warhol. Political poetic dynamic transgressive paradigm shift
    Fountain personal observation.
  </p>
</div>
<div class="service">
  <img
    src="https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
    alt=""
  />
  <h3>let us do the work for you</h3>
  <p>
    Self-identify reposition ghosts transformation film Basquiat
    Warhol. Political poetic dynamic transgressive paradigm shift
    Fountain personal observation.
  </p>
</div>*/
