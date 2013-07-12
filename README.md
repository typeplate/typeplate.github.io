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
You'll find all our documentation within the “[typeplate/docs](https://github.com/typeplate/typeplate.github.io/blob/master/typeplate/docs/installation.md)” directory. These docs include all the required instructions to get started with Typeplate.

## &sect; Contributing Guidelines : [How to contribute](http://37signals.com/svn/posts/3349-open-source-guilt-passion)


Third-party patches are essential for keeping Typeplate great. We want to keep it as easy as possible to contribute changes that
get things working in your environment. There are a few guidelines that we
need contributors to follow so that we can have a chance of keeping on
top of things.

**A quick mention about our project structure:**
If contributing non site related changes to this project please make sure you're submitting changes using our files found within the “typeplate” directory. These files are specific to the main typeplate project. Our site files are found within the project's root ``scss`` directory (General Site styles, layout, colors etc.).

````
typeplate.github.io
|
|______typeplate #project
|      |______css
|      |______scss
|      |______docs
|      |______sass-port.zip
|
|______scss #site styles
       
````

## &sect; Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Clearly describe an issue including steps to reproduce when it's a bug.
* Fork [this](https://github.com/typeplate/typeplate.github.io) repository or our [bower](https://github.com/typeplate/typeplate-bower) repositry on GitHub.

## &sect; Making Changes

* Create a topic branch from where you want to base your work.
  * This is usually based off the master branch.
  * Only target release branches if you are certain your fix must be on that
    branch.
  * To quickly create a topic branch based on master; `git branch
    fix/master/my_contribution master` then checkout the new branch with `git
    checkout fix/master/my_contribution`.  Please avoid working directly on the
    `master` branch.
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure your commit messages are in the proper format.

````
(Issue#) Commit message about your awesome code contribution. 
##only provide an issue number if you're PR is referencing an issue.
````

* Make sure you have added the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken.

## &sect; Pull Requests
When contributing (by the way you're awesome for that so thanks) please keep your commits small and targeted when you're prepared to file a Pull Request. We&rsquo;d prefer not seeing Pull Requests that contain 20 commits in multiple spots. Keep it small and it will make things simpler and much cleaner in the long run.

## &sect; Additional Resources

* [General GitHub documentation](http://help.github.com)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests)
* [Practice Git](https://github.com/grayghostvisuals/Practice-Git)

## &sect; Project Stack
### Language Abstractions

- [Compass](http://compass-style.org)
- [Sass](http://sass-lang.com)

### Build Tools

- Windows : [fire.app](http://fireapp.handlino.com)
- Mac : [Codekit](http://incident57.com/codekit) and [Grunt](http://gruntjs.com)

### Package Management

- [Bower](https://github.com/bower/bower) (requires [Node](http://nodejs.org) &amp; [npm](https://npmjs.org))


## &sect; Local Development (mac, linux)

Make sure compass is installed by executing the following bash command from your CLI:

  gem install compass

You can always check if the correct gems are installed by running the bash command ``gem list`` which will list all your gems installed.

&sect; **Compiling** : Javascript, Sass and Compass

In order to compile our projects stylesheets and scripts we use [Codekit](http://incident57.com/codekit), but you can also use [Grunt](http://gruntjs.com) which is platform independent Javascript that uses the CLI to help optimize our code much like Codekit (minus the GUI). If you'd like to use Grunt just run ``npm install`` from our project root. If you're still curious how to use Grunt then feel free to leave us a comment in our project's [Issue Tracker](https://github.com/typeplate/typeplate.github.com/issues).

&sect; **Package Management** : [Bower](https://github.com/bower/bower)

To keep track of our packages and allow for easy updating we use [Bower](https://github.com/bower/bower) Package Manager which installs all our project's packages in the "components" directory. In order to install bower you must have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

  npm install bower -g

## &sect; What Else Is There?
With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography
3. [MOLTEN LEADING](https://github.com/Wilto/Molten-Leading) - Slingin &rsquo; Hot Leading
4. [Team Sass Modular Scale](https://github.com/Team-Sass/modular-scale) - Sassy Modular Scale

###### ©credits
Typeplate &copy;2013 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
