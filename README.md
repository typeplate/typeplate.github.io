# [Typeplate](https://typeplate.com)
<img src="https://secure.gravatar.com/avatar/55ddbe9c3fb31c952df702c15b8a81d8?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png" alt="typeplate" width="200">

## What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don't separate styling and markup, making them tough to use in a truly modular fashion. We weren't satisfied, so we made a thing that doesn’t do that.
**Typeplate** is a "typographic starter kit". We don’t make aesthetic design choices, but define **proper markup with extensible styling** for common typographic patterns. A stripped-down Sass library concerned with the appropriate technical implementation of design patterns—not how they look.

**Broweser Tested, Developer Approved** : Includes IE7-10

<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="300">

==========================================================
### Installation
Based on use cases in a developers workflow we recommend using typeplate just after your reset stylesheet and compass import in order to function as intended.
For example:

	@import "compass";
	@import "[your_project_path]/reset";
	@import "[your_project_path]/typeplate";
	
    // Custom Author Styles below here
	// ====================================



### Installation via ``.scss @import``

Simply download our ``typeplate.scss`` file and import from your project's ``.scss`` file like so:

	@import "[your_project_path]/typeplate";

###Installation via Bower

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate-scss`` for the Sass version or ``bower install typeplate-css`` for the CSS version and watch the magic happen. This is an example of how to include either version in your project:

	@import "[root_project_path]/components/typeplate-scss/typeplate";

or you could also just use the css version:

	@import "[root_project_path]/components/typeplate-css/typeplate.css";

==========================================================

### Birds eye view of our project stack

###&sect; Language Abstractions

- [Compass]()
- [Sass]()

###&sect; JS Build Tools

- Mac and Windows : [Grunt]()
- Mac : [Codekit]()

###&sect; Sass &amp; Compass Build Tools

- Windows : [fire.app]()
- Mac : [Codekit]()

###&sect; Package Management

- [Bower]()
- [Node](http://nodejs.org) &amp; [npm](https://npmjs.org)

==========================================================

##Contributing Guidelines
###&sect; Pull Requests
When contributing (by the way you're awesome for that so thanks) please keep your commits small and targeted when you're prepared for filing a Pull Request. We'd prefer not seeing Pull Requests that contain 20 commits in multiple spots. Keep it small and it will make things simpler and much cleaner in the long run.

###&sect; Feature Branches
If you're making a new feature for Typeplate then make sure you name your branch as follows:

    feature/your_feature_name

###&sect; Patches
If you're making a quick patch for Typeplate (like a spelling mistake for example) then make sure you name your branch as follows:

    patch/your_patch_name

==========================================================

##Local Development

**Stylesheets** : ``.scss``

Make sure compass is installed by executing the following bash command from your CLI:

    gem install compass

you can always check if they're installed by running the bash command ``gem list`` which should list all your gems installed.

**Compiling** : Javascript, Sass and Compass

In order to compile our projects stylesheets and scripts we use [Codekit](#), but we've also taken the time to think about you non&ndash;Mac contributors as well. For this particular scenario we've provided you with [grunt]() which is platform independent Javascript that uses the CLI to compile, concatenate and minify Javascript.

**Package Management** : Bower

To keep track of our packages and allow for easy updating we use [Bower](#) Package Manager which installs all the projects components in the "components" directory. In order to install bower you must first have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

	npm install bower -g

==========================================================

######©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
