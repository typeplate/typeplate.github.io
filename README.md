<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>

## &sect; What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## &sect; Browser Tested, Developer Approved
<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="375">

## &sect; File Size
Not much goin&rsquo; on here in terms of bulk. As you can see, Typeplate is just a measely 3kb when compressed. That's really, really small.

- Raw Sass = **19kb**
- Compressed Sass = **3kb**
- Raw CSS = **11kb**

## &sect; Docs
You'll find all our documentation within the “[typeplate](https://github.com/typeplate/typeplate.github.io/tree/master/typeplate)” directory of this project's repo. Within this directory you'll find yet another folder titled “[Docs](https://github.com/typeplate/typeplate.github.io/tree/master/typeplate/docs).” These docs are always up to date and include all the required instructions to get started with Typeplate.

## &sect; Contributing Guidelines
### Pull Requests
When contributing (by the way you're awesome for that so thanks) please keep your commits small and targeted when you're prepared to file a Pull Request. We&rsquo;d prefer not seeing Pull Requests that contain 20 commits in multiple spots. Keep it small and it will make things simpler and much cleaner in the long run.

### Feature Branches
If you&rsquo;re making a new feature for Typeplate then make sure you name your branch as follows:

	feature/your_feature_name

### &sect; Patches
If you're making a quick patch for Typeplate (like a spelling mistake for example) then make sure you name your branch as follows:

	patch/your_patch_name

## Project Stack
### &sect; Language Abstractions

- [Compass](http://compass-style.org)
- [Sass](http://sass-lang.com)

### &sect; Build Tools

- Windows : [fire.app](http://fireapp.handlino.com)
- Mac : [Codekit](http://incident57.com/codekit) and [Grunt](http://gruntjs.com)

### &sect; Package Management

- [Bower](http://twitter.github.com/bower) (requires [Node](http://nodejs.org) &amp; [npm](https://npmjs.org))


## Local Development (mac, linux)

Make sure compass is installed by executing the following bash command from your CLI:

	gem install compass

You can always check if the correct gems are installed by running the bash command ``gem list`` which will list all your gems installed.

&sect; **Compiling** : Javascript, Sass and Compass

In order to compile our projects stylesheets and scripts we use [Codekit](http://incident57.com/codekit), but you can also use [Grunt](http://gruntjs.com) which is platform independent Javascript that uses the CLI to help optimize our code much like Codekit (minus the GUI). If you'd like to use Grunt just run ``npm install`` from our project root. If you're still curious how to use Grunt then feel free to leave us a comment in our project's [Issue Tracker](https://github.com/typeplate/typeplate.github.com/issues).

&sect; **Package Management** : [Bower](http://twitter.github.com/bower)

To keep track of our packages and allow for easy updating we use [Bower](http://twitter.github.com/bower) Package Manager which installs all our project's packages in the "components" directory. In order to install bower you must have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

	npm install bower -g

## What Else Is There?
With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography
3. [MOLTEN LEADING](https://github.com/Wilto/Molten-Leading) &ndash; Slingin&rsquo; Hot Leading

###### ©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
