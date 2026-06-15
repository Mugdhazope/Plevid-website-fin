export class ProjectItem {
  constructor(DOM_el) {
    this.DOM = {
      el: DOM_el,
      caption: DOM_el.querySelector('.osvs-item__caption'),
      imageWrap: DOM_el.querySelector('.osvs-item__image-wrap'),
      image: DOM_el.querySelector('.osvs-item__image'),
      imageInner: DOM_el.querySelector('.osvs-item__image-inner'),
      title: DOM_el.querySelector('.osvs-item__caption-title'),
      titleInner: DOM_el.querySelector('.osvs-item__caption-title .osvs-oh__inner'),
      number: DOM_el.querySelector('.osvs-item__caption-number'),
      numberInner: DOM_el.querySelector('.osvs-item__caption-number .osvs-oh__inner'),
      description: DOM_el.querySelector('.osvs-item__caption-description'),
    };
  }
}
