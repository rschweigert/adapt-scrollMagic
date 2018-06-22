# adapt-scrollMagic

## What I did so far
- build one article with 5 blocks
- add a backgound image to the blocks with the adapt-block-backgound extension
- add my adapt-scrollMagic extension  (include scrollMagic.js; www.scrollmagic.io), that add/remove a 'fade-in'-class to the blocks (scrollMagic.less), when they reaches about 50% of the window height.

## The Problem
ScrollMagic.js ships with some plugins, which are located in a plugin subfolder. These plugins require the scrollMagic.js as dependency. If I want to load a plugin in my adapt-scrollMagic.js, they can't find scrollMagic.js and grunt build throws an error.

I tried to adapt the path with require.config (shim, map), but with no luck.
I found this documentaion (https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-Using-AMD), but can't get it to work with the adapt-framework.

Btw: The debug.addIndicators plugin is a developer tool. It adds some markers at the right side of the view, that indicate the start- and endpositions of the animations.
