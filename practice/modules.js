import {user} from './mod2.js';

document.body.innerHTML = user;
alert(import.meta.url);
// alert(this);



// export for the func/object/prim to be allowed outside
// import {} from ''
// scope
//only evaluated once
// import.meta
// use type=module in script
// this is undefined
// always deferred
// external scripts run once, no bare modules
// build tools blah blah
// inline async
// cors headers for external scrpts from another origin 
