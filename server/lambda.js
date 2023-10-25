// import {handler} from './index.js';
import {handler} from './index.js'

try {
    handler();
} catch(err){
    console.log(">>> error at handler", err);
}


