import moment from 'moment';

import anime from 'animejs';

import store from 'store.js';

const now = moment();
console.log(now.format('YYYY-MM-DD hh:mm:ss'));

anime({
    targets: '.waifu',
    scale: [0,1],
    duration: 2000,
    easing: 'easeInOutQuad'
});

store.set('waifus', []);
const waifus = store.get('waifus');
console.log(waifus);