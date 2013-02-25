<a href="//typeplate.com"><img src="./img/logo.png" alt="typeplate logo" width="216" height="216"></a>
## What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## Broweser Tested, Developer Approved
We've even made sure to support IE7-8 while still supporting all current and major standards supporting browser makers.

<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="375">

## File Size
Not much goin on here in terms of bulk. As you can see, Typeplate is just a measely 2.806 kb when compressed. That's really, really small.

- Raw ``.scss`` = **16.96kb**
- Compressed ``.css`` = **3kb**

## Customizing
This will be the explanation on how to customize typeplate and what the vars can do.

## Installation
Based on use cases for most developers' workflow, we recommend using typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="//typeplate.com/demo">demo</a> it isn't necessary.

Example using ``.scss`` syntax:

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[your_project_path]/typeplate";

    // Custom Author Styles
	// ====================================

###&sect; Installation via ``.scss @import``

Simply download our ``typeplate.scss`` file and import from your project's ``.scss`` file like so:

	@import "[your_project_path]/typeplate";

###&sect; Installation via ``.css``

If the Sass version isn't your cup of tea, we've provided a CSS version. Simply place the contents of ``typeplate.css`` inside your project's stylesheet in the order specified from the example above.

###&sect; Installation via Bower

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate-scss`` for the Sass version or ``bower install typeplate-css`` for the CSS version and watch the magic happen. This is an example of how to include either version in your project:

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[root_project_path]/components/typeplate-scss/typeplate";

You could also use the CSS version instead (btw&hellip;we don&rsquo;t condone this method depicted below. In reality you should copy the contents of the CSS file and paste the contents in the top of your projects stylesheet):

	<head>
		<link rel="stylesheet" href="[root_project_path]/components/normalize-css/normalize.css">
		<link rel="stylesheet" href="[root_project_path]/components/typeplate-css/typeplate.css">
	</head>

## Birds eye view of our project stack

###&sect; Language Abstractions

- [Compass](http://compass-style.org)
- [Sass](http://sass-lang.com)

###&sect; JS Build Tools

- Mac and Windows : [Grunt](http://gruntjs.com)
- Mac : [Codekit](http://incident57.com/codekit)

###&sect; Sass &amp; Compass Build Tools

- Windows : [fire.app](http://fireapp.handlino.com)
- Mac : [Codekit](http://incident57.com/codekit)

###&sect; Package Management

- [Bower](http://twitter.github.com/bower) (requires [Node](http://nodejs.org) &amp; [npm](https://npmjs.org))

##Contributing Guidelines
###&sect; Pull Requests
When contributing (by the way you're awesome for that so thanks) please keep your commits small and targeted when you're prepared for filing a Pull Request. We'd prefer not seeing Pull Requests that contain 20 commits in multiple spots. Keep it small and it will make things simpler and much cleaner in the long run.

###&sect; Feature Branches
If you're making a new feature for Typeplate then make sure you name your branch as follows:

    feature/your_feature_name

###&sect; Patches
If you're making a quick patch for Typeplate (like a spelling mistake for example) then make sure you name your branch as follows:

    patch/your_patch_name

##Local Development

&sect; **Stylesheets** : ``.scss``

Make sure compass is installed by executing the following bash command (Mac only) from your CLI:

    gem install compass

You can always check if they're installed by running the bash command (Mac only) ``gem list`` which will list all your gems installed.

&sect; **Compiling** : Javascript, Sass and Compass

In order to compile our projects stylesheets and scripts we use [Codekit](http://incident57.com/codekit), but we've also taken the time to think about you non&ndash;Mac contributors as well. For this particular scenario we've provided you with [grunt](http://gruntjs.com) which is platform independent Javascript that uses the CLI to compile, concatenate and minify Javascript.

&sect; **Package Management** : [Bower](http://twitter.github.com/bower)

To keep track of our packages and allow for easy updating we use [Bower](http://twitter.github.com/bower) Package Manager which installs all components in the "components" directory of this project. In order to install bower you must first have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

	npm install bower -g

##What Else Is There?

With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography

######©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
