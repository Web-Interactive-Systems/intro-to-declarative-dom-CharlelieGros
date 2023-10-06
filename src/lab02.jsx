import { createElement, render } from './mini';

/**
 
  Todo: In similar manner to lab01, 
  use `createElement` and `render` to generate the following DOM:

 <div class="container">
   <span>Hello</span>
   <span>World!</span>
 </div>
 */

//

const container = document.getElementById('app');
const hello = createElement('span', null, 'Hello ');
const world = createElement('span', null, 'world!');
const component = createElement('div', { className: 'container' }, [
  hello,
  world,
]);

render(component, container);
