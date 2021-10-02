function leadingZeros(n)
{
  return ('000'+n).slice(-3);
}

function createKeySt(e)
{
  let key1 = getSP(e)
           + getGI(e)
           + getDS(e)
           + getFV(e)
           + getOM(e)
           + getCH(e);

  let key2 = getGI(e) + getOM(e) + "—" + e.field("Abbreviation");

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

function getDS(e)
{
  log("DS start");

  return "—DS" + e.field("Dokja Status Sort");
}

function getFC(e)
{
  log("FC start");

  return "—FC" + e.field("Flag Sort");
}

function getOM(e)
{
  log("OR start");
  return "—OM" + leadingZeros(e.field("Order Mentioned"));
}

function getCH(e)
{
  log("CH start");
  return "—CH" + leadingZeros(e.field("Chapter Sort"));
}
