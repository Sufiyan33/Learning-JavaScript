/*
    Here, we will look how to import and export works in ES6. It's different way to export..
    Let me copy code from previous files...
 */

import sufi, {hello, advanceHello} from "./ES6-Modules2.js";
hello()
advanceHello("Sufiyan")
advanceHello("Ahmad")
advanceHello("Sabir")
advanceHello("Alfaz")
sufi()


/*
    if you have any default function then you don't need to remove from desctructuring.
    You can directly access that function... let see how to do that.

    You just need to add function name after the import keyword, also you can call that function.
 */