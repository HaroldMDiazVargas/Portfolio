// import lazyLoadImage from "./lazyLoadImage";

const getImagesNames = () => {
  const r = require.context("/assets/images/webp/carousel/", false, /\.webp$/);

  // return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);

  console.log(importAll(r));
  return importAll(r);
};

const generateImage = (parent) => {
  const images = [];
  document.querySelectorAll(parent).forEach((container, indx) => {
    const img = document.createElement("img");
    container.appendChild(img);
    images.push(img);
  });
  console.log(images);
  return images;
};

const lazyLoadImage = (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `/assets/images/webp/carousel/${imageName}`
  )
    .then((src) => (img.src = src.default))
    .catch((err) => console.error(err));
};

export class Images {
  constructor(urlImages, parentSelector) {
    this.urlImages = urlImages; //"/assets/images/webp/carousel/"
    this.parent = parentSelector; //".slider__content"
    this.images = generateImage(this.parent);
    this.imagesNames = getImagesNames(this.urlImages);
  }

  lazyLoad() {
    this.imagesNames.forEach((imageName, indx) => {
      lazyLoadImage(imageName, this.images[indx]);
    });
  }
}
