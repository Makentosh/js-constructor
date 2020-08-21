const text = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, rem!
`;
import img from './images/hots.jpg';
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks';


export const model = [

    new TitleBlock( 'Конструктор сайтов на чистом JavaScript', {
      tag: 'h1',
      styles: 'background: darkred; color: #fff; text-align: center; padding: 1rem;'
    }),

    new ImageBlock (img, {
      styles: 'padding: 2rem 0; display: flex; justify-content: center;',
      alt: 'My image',
      imageStyles: 'width: 400px; height: auto;'
    }),

    new TextColumnsBlock( ['Крутое видео по js только у Владилена Минина',
      'Крутое видео по js только у Владилена Минина',
      'Крутое видео по js только у Владилена Минина'],
        {
          styles: 'background: orange; color: black; padding: 1rem;'
        }),

    new TextBlock(text, {
      styles: 'background: yellow; color: grey; padding: 1rem;'
    })
];
