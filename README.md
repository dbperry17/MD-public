# MD-public

My scripts for use in [Memento Database](https://mementodatabase.com/). Unfortunately, Git is not integrated into the app, as far as I can tell, and I typically use it exclusively on my phone anyway, so almost all updates will unfortunately be manual.

# Purpose of these scripts

I am currently reading a very long story. I found the story in a webcomic format, and then later found it in novel format. I am going through the novel, but I remembered that I had difficulty remembering characters and concepts in the comic. Normally, I'd use a fan wiki to keep track, but those are written by people who have finished reading the story and thus contain spoilers that are easy to see even when I'm not looking for them.

So I'm making my own personal "database" to keep track of everything. Further, I'm making it possible to re-use this database when I inevitably reread the story by making multiple versions of the same entries, which populate information in a single generic entry based on what I tell it is the latest chapter that I've read.

For the curious, the webcomic version can be found [here](https://www.webtoons.com/en/action/omniscient-reader/episode-0-prologue/viewer?title_no=2154&episode_no=1), and the original novel version can be found [here](https://novelchapter.com/omniscient-readers-viewpoint-tueM4). Note that there are debates regarding the translations in both versions, so specific terms and/or spelling of character names may vary, even within the same version.

# Purpose of this Repository

Memento Database does not allow scripts to be shared between libraries. While this is normally not a problem, certain interactions between my Chapters, Humans, and Stations libraries made it so that it would be best if I could have a single version of certain scripts, rather than just a copy in each library.

Originally, I had a private repository simply to back up my code, but upon realizing that I could import a shared library via MD's "Add Github Repository" feature, I decided to make a public repository so that MD had access to it. I also decided to back up the scripts I had working within the app itself, rather than keeping those in my private repository, in case anyone else was able to use them.

# Current Status
#### Short version:

~~Maybe expect some minor tweaks in the future, but I believe it's complete.~~

Currently working on Version 2, as I've figured out some workarounds to improve runtime of the scripts.

#### Long Version:

While the scripts all technically work, they go much more slowly than I'd like due to some loops that I found unavoidable when programming originally. However, I've since figured out some ways to work around some of the limitations of Memento Database, and am currently looking into improving performance. Improvements include:
* Using JavaScript fields to ask the "Current Version" what its field values are when I open the entry (instead of updating every field in every entry inside a double for-loop all at once) for any field that is not a linked entry.
* Creating a library with a single entry with fields for certain "global variables" that I want *all* my libraries to have access to (e.g. "Latest Chapter")
* Eliminating certain fields from the "Versioned" libraries that never change (such as the order characters were introduced in the story), and keeping the information that stays consistent between versions confined to the generalized libraries.

Currently, I am adjusting the libraries to work with these improvements prior to doing the programming itself. As such, the code here on GitHub is suitable for version 1 only.

Small update: As I adjust the coding to work with V2, all code that worked with V1 will slowly be copied into a subfolder called "Old." While I am aware I can simply recert to the V1 commit if needed, I'd like to have completed versions of the code easily accessible instead of having to search through commits made while coding and debugging were in progress.

# A note about debugging

This was my first time using a library that was not saved locally. Further, as mentioned above, I almost exclusively used this in the phone version of the app, which does not have git integrated at all.

As a result, altering pretty much anything in the scripts required me to make a new commit, because that was the only way to save changes to the file.

Please excuse the very messy commit history. I believe I have a better way to go about it in V2, but I don't know if it will work at this time.
