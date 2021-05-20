import { codefactory } from './codefactory';

const header = () => {
  codefactory('header', { class: 'text-gray-600 body-font my-3', id: 'header' }, '', 'content');
  codefactory('div', { class: 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center', id: 'headercontainer' }, '', 'header');
  codefactory('a', { class: 'title-font cursor-pointer font-medium items-center text-gray-900 text-3xl', href: '#' }, 'Weather App', 'headercontainer');
};

export default header;