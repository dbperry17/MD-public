//Trigger, Updating, Before
let e = entry();

let keys = createKey(e);

e.set("mykey", keys[0]);
e.set("General Key", keys[1]);
