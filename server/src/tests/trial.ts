import Unit from './index.js';

console.log(">1",Unit())

setTimeout(async ()=>{  
    const response = await Unit();
    console.log(">2", response);
}, 1000)