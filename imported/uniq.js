//Copied from https://gist.github.com/dbperry17/c40f1bfd89a7cc3d567bff4c761c7883, just put into this repository because MD is annoying about linking non-repository files
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
}
