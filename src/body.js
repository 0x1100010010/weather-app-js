import { codefactory } from './codefactory';

const body = () => {
  codefactory('section', { class: 'text-gray-600 body-font overflow-hidden', id: 'body-section' }, '', 'content');
  codefactory('div', { class: 'container px-5 py-24 mx-auto', id: 'body-container' }, '', 'body-section');
  codefactory('div', { class: 'flex flex-wrap -m-4 justify-center ', id: 'body-flex-container' }, '', 'body-container');
  codefactory('div', { class: 'p-4 xl:w-1/2 md:w-1/2 w-full', id: 'body-flex-sub-container' }, '', 'body-flex-container');
  codefactory('div', { class: 'h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden items-center', id: 'body-content' }, '', 'body-flex-sub-container');

  codefactory('label', { class: 'flex items-center cursor-pointer my-4', for:'toggle-status', id: 'toggle-button-label'}, '', 'body-content')
  codefactory('span', { class:'dot'}, 'Celcius', 'toggle-button-label')
  codefactory('div', { class: 'relative mx-3', id: 'toggle-button-container'}, '', 'toggle-button-label')
  codefactory('input', { class:'sr-only', type: 'checkbox', id: 'toggle-status'}, '', 'toggle-button-container')
  codefactory('div', { class:'w-10 h-4 bg-gray-400 rounded-full shadow-inner'}, '', 'toggle-button-container')
  codefactory('div', { class:'dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'}, '', 'toggle-button-container')
  codefactory('span', { class:'dot'}, 'Farenhiet', 'toggle-button-label')


  codefactory('div', { class: 'relative mr-4 md:w-full lg:w-full xl:w-3/4 w-3/4 mb-4', id: 'loaction-form'}, '', 'body-content')
  codefactory('label', { class: 'leading-7 text-sm text-gray-600', for: 'hero-field'}, '', 'loaction-form')
  codefactory('input', { class: 'w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out', type:"text", id:"hero-field", name:"hero-field", id: 'loaction-form-input'}, '', 'loaction-form')
};


export default body;