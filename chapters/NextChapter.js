//Action
//Place of action: Library
//Used while reading to update by a single chapter, assuming an entry for the new chapter exists.


let allE = lib(). entries ();
let len = allE.length;
let e = allE[len - 1];
log("Last entry: " + e.field("Chapter #"));

let lcOld = e.field("Latest Chapter")[0];
let lcNew = lcOld.field("Next Chapter")[0];

for(let i in allE)
{
  let c = allE[i];
  c.unlink("Latest Chapter", lcOld);
  c.link("Latest Chapter", lcNew);
}


setChapter(e.field("Latest Chapter"), lcNew.field("Chapter #"));
