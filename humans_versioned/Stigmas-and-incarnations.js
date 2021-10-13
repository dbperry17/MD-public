//Update after saving
var e = entry();
var sponsorList = e.field("Supporting Constellation");
if(sponsorList.length == 1)
{
    //Make list of names of human stigmas
    var humanStigmaList = e.field("Stigma");
    var hLength = humanStigmaList.length;
    var humanStigmaNames = [];
    for (var i = 0; i < hLength; i++)
    {
        var hName = humanStigmaList[i].field("Stigma Name");
        humanStigmaNames.push(hName);
    }


    var sponsor = sponsorList[0];
    if (!(sponsor.field("Screen Name").equals("No Supporting Constellation")))
    {
        //Add human to list of incarnations if they are not there already
        var incarnationList = sponsor.field("Incarnations");
        //make list of names of incarnations
        var iLength = incarnationList.length;
        var incarnationNames = [];
        for (var j = 0; j < iLength; j++)
        {
            var iName = incarnationList[j].field("Name");
            incarnationNames.push(iName);
        }
        var included = includes(incarnationNames, e.field("Name"));
        if(!included)
        {
            sponsor.link("Incarnations", e);
        }

        //make list of names of sponsor stigmas
        var sponsorStigmaList = sponsor.field("Stigmas");
        var sLength = sponsorStigmaList.length;
        var sponsorStigmaNames = [];
        for (var k = 0; k < sLength; k++)
        {
            var sName = sponsorStigmaList[k].field("Stigma Name");
            sponsorStigmaNames.push(sName);
        }
    
        for(var l = 0; l < hLength; l++)
        {
            var stigmaName = humanStigmaNames[l];
            var found = includes(sponsorStigmaNames, stigmaName);

            if (!found)
            {
                var stigma = humanStigmaList[l];
                sponsor.link("Stigmas", stigma);
            }
        }
    }
}
