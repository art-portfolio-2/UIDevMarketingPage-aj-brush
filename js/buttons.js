const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  if (
    button.classList.contains("CTAInvert") ||
    button.classList.contains("CTA")
  )
    button.addEventListener("click", () => {
      window.location.assign("https://artfolio-ea.netlify.com/");
    });
});

// window.addEventListener("resize", () => imagePlacement());
// imagePlacement();
//
// function imagePlacement() {
//   const img = document.querySelector(".right");
//
//   // Image = 100vh so window height is image height
//   const height = window.innerHeight;
//   const windowWidth = window.innerWidth;
//   // Image Size: 3574w x 4000h   w/h => 0.8935
//   const conversion = 3574 / 4000;
//
//   // Calculate image width based on screen height
//   const width = height * conversion;
//
//   // Offset the image based on the width of the screen
//   let xOffset = 0;
//   if (width > windowWidth / 1.25 && height / windowWidth > 0.75) {
//     console.log("Breakpoint");
//     xOffset = windowWidth / 1.25 - width;
//   }
//
//   img.style.width = width;
//   img.style.right = `${xOffset}px`;
// }
