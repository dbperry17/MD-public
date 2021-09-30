//The novel is long enough that I'd rather not have to worry about scrolling down really far as I get further into the novel.
function epName(e)
{

  var names = ["Three Ways to Survive in a Ruined World",
               "Starting the Paid Service",
               "Protagonist",
               "Contract",
               "Line of Hypocrisy",
               "Warden of the Dark",
               "Time of Judgment",
               "Landlord",
               "Emergency Defense",
               "Omniscient Sunfish",
               "Future War"];

  var num = e.field("Episode #");
  var name = names[num];
  var desc = "";

  if(num == 0)
    desc = "Prologue";
  else
    desc = "Ep. " + num;

  desc += " — " + name;

  e.set("Episode Name", name);
  e.set("eDesc", desc);

}
