//Action
//Place of Action: Entries in the list
/*
Imported files: 
 - all_libraries/misc.js
 - humans/copyCurrentToGenericHu.js
 - humans/GetFieldsHu.js
 - stations/copyCurrentToGenericSt.js
 - stations/GetFieldsSt.js
 - gist/uniq.js
*/

//Would probably use entry() instead of entry().field("Chapter #"), but only *just* found out a convenient method to make that usable,
//and I don't want to rewrite everything to accomodate this discovery when I finally have everything working
var lc = entry().field("Chapter #");
log("Setting " + lc + " as the latest chapter.");

setChapter(getAndSortCh(), lc);
log ("Finished setting " + lc + "as the latest chapter");
