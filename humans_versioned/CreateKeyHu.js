//Shared
function leadingZeros(n)
{
  return ('000'+n).slice(-3);
}

function createKeyHu(e)
{
  let key1 = getSP(e)
           + getGI(e)
           + getCI(e)
           + getST(e)
           + getOR(e)
           + getCH(e);

  let key2 = getGI(e) + getOR(e) + "—" + e.field("Abbreviation");

  if(includes (e.field("Name"), " (copy)"))
    key += "—C";

  return [key1,key2];
}

function getSP(e)
{
  log("SP start");
  return "SP" + e.field("Spoiler Sort");
}

function getGI(e)
{
  log("GI Start");

  return "—GI" + e.field("General Importance Sort");
}

function getCI(e)
{
  log("CI start");

  return "—CI" + e.field("Current Importance Sort");
}

function getST(e)
{
  log("ST start");

  return "—ST" + e.field("Status Sort");
}

function getOR(e)
{
  log("OR start");
  return "—OR" + leadingZeros(e.field("Order introduced"));
}

function getCH(e)
{
  log("CH start");
  return "—CH" + leadingZeros(e.field("Chapter Sort"));
}
