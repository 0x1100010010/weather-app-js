import { codefactory } from './codefactory';

export const status = () => {
  let el = document.getElementById('status')
  el ? el.remove() : console.log('Not Found!');
  
  if (window.weather) {
    codefactory('div', { class: 'my-4 flex w-full', id: 'status' }, '', 'body-content')
    console.log('status', window.weather)
    codefactory('div', { class: 'fp-2 w-full', id: 'status-div' }, '', 'status')
    codefactory('div', { class: 'h-full flex flex-col border-gray-200 border p-4 rounded-lg', id: 'weather-details' }, '', 'status-div')

    codefactory('div', { class: 'flex my-2', id: 'weather-icon' }, '', 'weather-details')
    codefactory('img', { alt: 'icon', class: 'w-16 h-16 bg-blue-200 object-cover object-center flex-shrink-0 rounded-full mr-4', src: window.icon }, '', 'weather-icon')
    codefactory('h1', { class: 'my-3 text-gray-900 title-font text-3xl font-bold' }, window.weather.description, 'weather-icon')

    codefactory('div', { class: 'flex mb-2 ml-1 items-baseline justify-evenly', id: 'temp-details' }, ``, 'weather-details')
    codefactory('h3', { class: 'text-gray-500 text-lg' }, `Temp: ${window.weather.temp}`, 'temp-details')
    codefactory('span', { class: 'text-gray-500' }, `min: ${window.weather.temp_min}`, 'temp-details')
    codefactory('span', { class: 'text-gray-500' }, `max: ${window.weather.temp_max}`, 'temp-details')
  }
  // <div class='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
  //   <img alt='team' class='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4' src='https://dummyimage.com/80x80'>
  //   <div class='flex-grow'>
  //     <h2 class='text-gray-900 title-font font-medium'>Holden Caulfield</h2>
  //     <p class='text-gray-500'>UI Designer</p>
  //   </div>
  // </div>
}
