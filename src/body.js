import { codefactory } from './codefactory';

const body = () => {
  codefactory('section', { class: 'text-gray-600 body-font', id: 'body-section' }, '', 'content');
  codefactory('div', { class: 'container px-5 py-24 mx-auto', id: 'body-container' }, '', 'body-section');
  codefactory('div', { class: 'flex flex-wrap -m-4', id: 'body-flex-container' }, 'Yo Body', 'body-container');
};

export default body;