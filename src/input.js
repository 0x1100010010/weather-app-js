import { codefactory } from './codefactory';
import { api } from './api'

export const input = () => {
  codefactory('label', { class: 'flex items-center cursor-pointer my-4', for: 'toggle-status', id: 'toggle-button-label' }, '', 'body-content')
  codefactory('span', { class: '' }, 'Celsius', 'toggle-button-label')
  codefactory('div', { class: 'relative mx-3', id: 'toggle-button-container' }, '', 'toggle-button-label')
  codefactory('input', { class: 'sr-only', type: 'checkbox', id: 'toggle-status' }, '', 'toggle-button-container').addEventListener('change', () => {document.getElementById("toggle-status").checked ? console.log('checked!') : console.log('unchecked!!')});
  codefactory('div', { class: 'w-10 h-4 bg-gray-400 rounded-full shadow-inner' }, '', 'toggle-button-container')
  codefactory('div', { class: 'dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition' }, '', 'toggle-button-container')
  codefactory('span', { class: '' }, 'Fahrenheit', 'toggle-button-label')


  codefactory('form', { class: 'relative w-full mb-4', id: 'loaction-form' }, '', 'body-content').addEventListener('submit', api);
  codefactory('input', { class: 'w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out', type: "text", id: "location-name", name: "name", placeholder: 'Name', required: '' }, '', 'loaction-form')
  api();
}
