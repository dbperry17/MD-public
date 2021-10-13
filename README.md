# MD-public

My scripts for use in [Memento Database](https://mementodatabase.com/). Unfortunately, Git is not integrated into the app, as far as I can tell, and I typically use it exclusively on my phone anyway, so almost all updates will unfortunately be manual.

# Purpose of these scripts

I am currently reading a very long story. I found the story in a webcomic format, and then later found it in novel format. I am going through the novel, but I remembered that I had difficulty remembering characters and concepts in the comic. Normally, I'd use a fan wiki to keep track, but those are written by people who have finished reading the story and thus contain spoilers that are easy to see even when I'm not looking for them.

So I'm making my own personal "database" to keep track of everything. Further, I'm making it possible to re-use this database when I inevitably reread the story by making multiple versions of the same entries, which populate information in a single generic entry based on what I tell it is the latest chapter that I've read.

For the curious, the webcomic version can be found [here](https://www.webtoons.com/en/action/omniscient-reader/episode-0-prologue/viewer?title_no=2154&episode_no=1), and the original novel version can be found [here](https://novelchapter.com/omniscient-readers-viewpoint-tueM4). Note that there are debates regarding the translations in both versions, so specific terms and/or spelling of character names may vary, even within the same version.

# Purpose of this Repository

Memento Database does not allow scripts to be shared between libraries. While this is normally not a problem, certain interactions between my Chapters, Humans, and Stations libraries made it so that it would be best if I could have a single version of certain scripts, rather than just a copy in each library.

Originally, I had a private repository simply to back up my code, but upon realizing that I could import a shared library via MD's "Add Github Repository" feature, I decided to make a public repository so that MD had access to it. I also decided to back up the scripts I had working within the app itself, rather than keeping those in my private repository, in case anyone else was able to use them.

# A note about debugging

This is my first time using a library that is not saved locally. Further, as mentioned above, I almost exclusively use this in the phone version of the app, which does not have git integrated at all.

As a result, altering pretty much anything in the library requires me to make a new commit because that is the only way to save changes to the file.

Further, the lack of integration with Git means that using branches and pull-requests as a way to limit the amount of commits in main is difficult.

To neaten up the commit history, I alternated my main to be a different branch depending on the current status, and then made a pull request when I reached a stage that I felt would actually warrant a commit.

The branches I alternated between for my main were `debug-main` and `real-main`, though one of those will be named `main` at all times simply because of limitations with Memento Database depending on my current status in the project. In case it is not obvious, `debug-main` is renamed to "main" while I debug, and `real-main` is renamed to "main" when everything is working as intended.

# Current Status

The main script that I wished to focus on (and have backed up) appears to be complete and working as expected. However, I have really only extensively tested this with the "Humans" libraries ("Humans — Generic" and "Humans — Versioned"). As I continue reading through the story and creating more entries in other categories, I may find errors there. Since they should theoretically work very similarly to things I already have, I do not currently foresee updating those very often.

I should note that the code currently works much more slowly than I would like. I'm sure I could optimize it in several places, but at the time of writing, I do not have the knowledge to do so. Thus, the code is currently in a "Don't fix something that's not broken" status, because making sure it *works* is much more important to me than making sure it's *fast*.
