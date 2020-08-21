import {col, row} from '../utils';

class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw  new Error('Метод должен бить реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options);
  }

  toHTML() {
    const {tag, styles} = this.options;

    return row(col(
        `<${tag}>${this.value}</${tag}>`
    ), styles, )
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options);
  }

  toHTML() {
    const {styles, alt, imageStyles} = this.options;

    const html  = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`;

    return row(html, styles)
  }
}


export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super('textColumns', value, options);
  }

  toHTML() {
    const {styles} = this.options;

    const html = this.value.map(item => col(item));

    return row(html.join(' '), styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options);
  }

  toHTML() {
    const {styles} = this.options;

    return row(col(
        `<p>${this.value}</p>`
    ), styles)
  }
}
