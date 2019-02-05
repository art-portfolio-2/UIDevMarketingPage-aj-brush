window.addEventListener("resize", () => imagePlacement());
imagePlacement();

function imagePlacement() {
  const img = document.querySelector(".right");

  // Image = 100vh so window height is image height
  const height = window.innerHeight;
  const windowWidth = window.innerWidth;
  // Image Size: 3574h x 4000w   w/h => 1.12
  const conversion = 4000 / 3574;

  // Calculate image width based on screen height
  const width = height * conversion;

  // Offset the image based on the width of the screen
  let xOffset = 0;
  if (width > windowWidth / 1.25 && height / windowWidth > 0.75) {
    console.log("Breakpoint");
    xOffset = windowWidth / 1.25 - width;
  }

  img.style.width = width;
  img.style.right = `${xOffset}px`;
}
