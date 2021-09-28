//opening Library, before window display
let e = entry();

let spSt = "Spoiler Status";
let fst = "Chapter of First Appearance";
let fnl = "Chapter of Final Appearance";


//if start chapter # not read, future entry
if(!(e.field(fst)).field("Read?"))
  e.set(spSt, "Future Entry");
//if no end chapter exists OR start chapter read, and end chapter not, ongoing
else if(e.field(fnl).length == 0 || !(e.field(fnl)).field("Read?"))
  e.set(spSt, "Current Entry");
//if end read, old
else
  e.set(spSt, "Old Entry");
