import './styles/main.css';
import {model} from './model';
import {Site} from './classes/site';
import {Sidebar} from './classes/sidebar';


const site = new Site('#site');

new Sidebar('#panel', updateCallback);

const updateCallback = newBlock => {
  model.push(newBlock);
  site.render(model)
};


site.render(model);




