# Github Troll - PureData
## The Project I chose to Watch
I wanted to find a music program that is related to different things that I like, and at first I settled with Audible Instruments which is a VCV Rack plugin based on Mutable Instruments Eurorack modules which you can view [here](https://github.com/VCVRack/AudibleInstruments).

And I definitely found some interesting things on it, but the updates really did not happen very often since it is not super well known. I then checked out PureData and after some digging around I decided to actually stick with that.

## What Interested Me the Most
It seemed to me that the way things got fixed or updated happened due to the amazing nature of GitHub, which is the community of people who just want things to be easier for them. So lots of times I would see people just posting something either about a suggestion, or about some feature that annoys them to see if they can get the developers approval to work on it. To my understanding, this is what a pull request is, where a user asks the master branch if they have permission to change the code and then re-submit it.

## Changes to the program
### Change \#1
User *muziker* made the following [post](https://github.com/pure-data/pure-data/issues/882):

"Can we have a hot key that will hide all cable connections? That way it's easier to focus on just the ones to connect with."

And then user *umlaeute* (who seems to be very engaged with his project as one of the main contributors) commented that instead they could make all the cables in the background turn grey while other new connections were being made. So that suggestion got approved, and eventually the [code](https://github.com/pure-data/pure-data/commit/f3a53b36cc651af06f523b3949c63c23af045619) was committed to the master branch, with 19 new lines of code, and one deletion.

I thought this was really cool because someone had an issue which was that it could get confusing to make connections between virtual audio devices when you already have dozes of lines going from one place to the next, and the master developers recognized this problem and they fixed it. It is so cool to be able to witness this problem and to really see how programmers get their work done. It is all basically just good communication and good labeling of things.

### Change \#2
[This](https://github.com/pure-data/pure-data/pull/869) was a change suggested and fully developed by user *HenriAugusto*, and it is still in development and being tested by this and other users. The concept demonstrated [here](https://user-images.githubusercontent.com/11790621/72448969-af117380-3796-11ea-80b6-706085489279.gif) is that the user can navigate the PureDate interface fully using the computer keyboard, by selecting an area with the mouse and then using either the *Control+Up/Down* keys or using numbers between 0-9 to jump to the 10 closest inputs or outputs.

This is an issue that is still under a lot of work and development so there is still a lot of progress on it to be seen, but I read up about it and am following it, because I think it is such a cool and useful tool for a much faster and easier user workflow. *HenriAugusto* was having a hard time with a lot of different things, but as I scroll down through the page it was so cool to see how many people were going through the code and helping fix each issue one at a time and explaining what was wrong with it. The user eventually decided to create a checklist in the original post to have a more structured way of fixing all the issues until the feature can be fully integrated.

### Change \#3
The third change I saw was the fix to the [issue](https://github.com/pure-data/pure-data/issues/730) that was brought to light by user *cuinjune*. The main issue was that the \[vradio\] and \[hradio\] modules were having a weird bug where they were storing values even after a restart of a patch. The says it can be tested by doing the following:

1. create an empty patch.
2. create the following objects.
[loadbang]
|
[hradio]
|
[print]
3. select the last segment in [hradio]. It will print 7 on the Pd window.
4. Save and close the patch.
5. If you reopen the patch, you will see the 7 printed in the Pd window although the GUI indicates the first segment is selected.
6. If you open the patch using the text editor, you can check that 7 is stored as the GUI parameter although it is set to No init.

Then two other users confirmed it on two other Operating Systems. So after this, user *porres* created [branch \#831](https://github.com/pure-data/pure-data/pull/831) which fixed this issue and closed the other branch.

This problem was something pretty minor, but it is so cool to see how people will just report a problem and then people who are deeply invested in making this program work as best as possible are constantly investing their time and their intellect into it. GitHub at first seemed pretty confusing to me, but I am now really starting to see how useful it is and how this can really benefit the community of programmers and developers a significant amount.
