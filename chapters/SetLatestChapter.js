//Action
/*
Imported files: 
 - all_libraries/misc.js
 - humans/copyCurrentToGenericHu.js
 - humans/GetFieldsHu.js
 - stations/copyCurrentToGenericSt.js
 - stations/GetFieldsSt.js

Arguments:
 - "Latest Chapter", integer
*/

var lc = arg("Latest Chapter");
log("Setting " + lc + " as the latest chapter.");

setChapter(getAndSortCh(), lc);
log ("Finished setting " + lc + "as the latest chapter");
