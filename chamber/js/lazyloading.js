const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
     threshlod: 1,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

  /** CAMBIAR IMAGENES  **/
  const picture_1 = document.querySelector(".changingImage");

  const changeImage = () => {
      picture_1.setAttribute("src",'images/teatro_colon_interior_nicolas1500x610.webp');
    };
  const changeImage2 = () => {
      picture_1.setAttribute("src",'images/casarosada.webp');
    };
  const changeImage3 = () => {
      picture_1.setAttribute("src",'images/bosques-de-palermo.webp');
    };
  const changeImage4 = () => {
      picture_1.setAttribute("src",'images/poblacion_Argentina.webp');
    };
  const changeImage5 = () => {
      picture_1.setAttribute("src",'images/tango_argentina.webp');
    };
