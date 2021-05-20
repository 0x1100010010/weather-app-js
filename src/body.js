import { codefactory } from './codefactory';
import { input } from './input';
import { status } from './status';

const body = () => {
  codefactory('section', { class: 'text-gray-600 body-font overflow-hidden', id: 'body-section' }, '', 'content');
  codefactory('div', { class: 'container px-5 py-24 mx-auto', id: 'body-container' }, '', 'body-section');
  codefactory('div', { class: 'flex flex-wrap -m-4 justify-center ', id: 'body-flex-container' }, '', 'body-container');
  codefactory('div', { class: 'p-4 xl:w-1/2 md:w-1/2 w-full', id: 'body-flex-sub-container' }, '', 'body-flex-container');
  codefactory('div', { class: 'h-full p-6 px-11 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden items-center', id: 'body-content' }, '', 'body-flex-sub-container');

  input();
  status();
};

export default body;