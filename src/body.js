import { codefactory } from './codefactory';

const body = () => {
  codefactory('section', { class: 'text-gray-600 body-font overflow-hidden', id: 'body-section' }, '', 'content');
  codefactory('div', { class: 'container px-5 py-24 mx-auto', id: 'body-container' }, '', 'body-section');
  codefactory('div', { class: 'flex flex-wrap -m-4 justify-center ', id: 'body-flex-container' }, '', 'body-container');
  codefactory('div', { class: 'p-4 xl:w-1/3 md:w-1/2 w-full', id: 'body-flex-sub-container' }, '', 'body-flex-container');
  codefactory('div', { class: 'h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden', id: 'body-content' }, '', 'body-flex-sub-container');
  
  // codefactory('div', { class: 'flex mx-auto border-2 border-indigo-500 rounded overflow-hidden', id: 'option-button'}, '', 'body-content')
  // codefactory('button', { class: 'py-1 px-4 bg-indigo-500 text-white focus:outline-none', id: 'celcius-button'}, 'calcius', 'option-button')
  // codefactory('button', { class: 'py-1 px-4 focus:outline-none"', id: 'faranhiiet-button'}, 'farenhiet', 'option-button')

  codefactory('label', { class: 'flex items-center cursor-pointer', for:'toggle-status', id: 'toggle-button-label'}, '', 'body-content')

  codefactory('span', { class:'dot'}, 'Celcius', 'toggle-button-label')
  codefactory('div', { class: 'relative', id: 'toggle-button-container'}, '', 'toggle-button-label')
  codefactory('input', { class:'sr-only', type: 'checkbox', id: 'toggle-status'}, '', 'toggle-button-container')
  codefactory('div', { class:'w-10 h-4 bg-gray-400 rounded-full shadow-inner'}, '', 'toggle-button-container')
  codefactory('div', { class:'dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'}, '', 'toggle-button-container')
  codefactory('span', { class:'dot'}, 'Farenhiet', 'toggle-button-label')

};


export default body;