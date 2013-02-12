#[Typeplate](https://typeplate.com)

##About
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don't separate styling and markup, making them tough to use in a truly modular fashion. We weren't satisfied, so we made a thing that doesn’t do that.
**Typeplate** is a "typographic starter kit". We don’t make aesthetic design choices, but define **proper markup with extensible styling** for common typographic patterns. A stripped-down Sass library concerned with the appropriate technical implementation of design patterns—not how they look.

**Birds eye view of our project stack:**

- Compass
- Sass
- Grunt
- Codekit
- Bower

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

###&sect; Dependencies

**Stylesheets** : Sass &amp; Compass

Make sure compass is installed by executing the following bash command from your CLI:

    gem install compass

you can always check if they're installed by running the bash command ``gem list`` which should list all your gems installed.

**Compiling** : Javascript and Sass/Compass

In order to compile our projects stylesheets and scripts we use [Codekit](#), but we've also taken the time to think about you non&ndash;Mac contributors as well. For this particular scenario we've provided you with [grunt]() which is platform independent Javascript that uses the CLI to compile, concatenate and minify Javascript.

**Package Management** : Bower

To keep track of our packages and allow for easy updating we use [Bower](#) Package Manager which installs all components in our "components" directory.

###©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
