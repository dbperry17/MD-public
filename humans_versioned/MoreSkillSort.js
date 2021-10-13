var e = entry();
var skills = e.field("Personal Skills");
var len = skills.length;

if(len > 0)
{
    var morePos = -1;
    for (var i = 0; i < len; i++)
    {
        if(skills[i].field("Skill Name"). equals("More"))
        {
            morePos = i;
            break;
        }
    }
var temp1 = "con1 = " + (morePos != -1);
var temp2 = "con2 = " + (morePos < (len - 1));
    if((morePos != -1) && (morePos < (len - 1)))
    {
        var more = skills[morePos];
        e.unlink("Personal Skills", more);
        e.link("Personal Skills", more);
    }
}
