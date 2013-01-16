#[TypePlate](https://typeplate.com)

##About
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don't separate styling and markup, making them tough to use in a truly modular fashion. We weren't satisfied, so we made a thing that doesn’t do that.
**TypePlate** is a "typographic starter kit". We don’t make aesthetic design choices, but define **proper markup with extensible styling** for common typographic patterns. A stripped-down Sass library concerned with the appropriate technical implementation of design patterns—not how they look.


##Local Development and Contributing

###Yeoman
We use Yeoman for this project. If you don't know what Yeoman is then you're gonna have to learn a little bit about it. We suggest [yeoman.io](http://yeoman.io) to read up on what it is and a little how to use it or feel free to check out [Yeoman on github](https://github.com/yeoman/yeoman). You can install Yeoman by running the audit script to see what you need in place:

    curl -L get.yeoman.io | bash


###Local Server
You must run the command ``yeoman server`` from ``yeoman > app`` directory of TypePlate or else you'll see a pretty message like this.

    <FATAL> Unable to find Gruntfile. Do you need any --help? </FATAL>


###Production Build
when you're ready to build the produciton version of TypePlate's codebase you'll need to run the following command from your ``app`` directory mentioned previously.

    yeoman build

Yeoman will now place your production built ready files into a temp directory called ``dist`` and will now be viewable by running the following command from your terminal.

    yeoman server:dist


###©credits
TypePlate &copy;2013 &bull; A [GrayGhostVisuals](https://github.com/grayghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan). Additional contributions by [@andyunleashed](https://github.com/andyunleashed) and [@chrisjeane](https://github.com/chrisjeane)
