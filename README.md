<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>

## &sect; What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## &sect; Browser Tested, Developer Approved
<img src="https://raw.github.com/paulirish/browser-logos/master/main-desktop.png" alt="" width="375">

## &sect; File Size
Typeplate is just a measely **4.91 KB** and especially smaller when compressed!

## &sect; Docs
You'll “[find our documentation here](https://github.com/typeplate/starter-kit/blob/master/README.md)”. This document includes all the required instructions to get started with Typeplate.

## &sect; Contributing & Issues

If you would like to contribute to the core of the Typeplate project and not to our main site please make sure you're submitting changes, patches and [issues](https://github.com/typeplate/starter-kit/issues) to our [main project repository](https://github.com/typeplate/starter-kit).

## &sect; Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Clearly describe an issue including steps to reproduce when it's a bug.
* Fork [this](https://github.com/typeplate/bower) repository.

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

- [Sass - (LibSass)](http://sass-lang.com)

### Build Tools

- Grunt : [Grunt](http://gruntjs.com)

### Package Management

- [Bower](https://github.com/bower/bower)

## &sect; Local Development (mac, linux)

Install Packages

```bash
$ npm install && bower install
```

&sect; **Compiling** : JavaScript, Sass

In order to compile our projects stylesheets and scripts we use [Grunt](http://gruntjs.com) which is platform independent JavaScript task runner. To start using Grunt run ``npm install`` from the project's root directory. If you're still curious how to use Grunt then feel free to leave us a comment in our project's [Issue Tracker](https://github.com/typeplate/bower/issues).

&sect; **Grunt Tasks** :

Those that choose to use [Grunt](http://gruntjs.com) you can execute the command ``grunt`` which will spin up a local server on ``http://localhost:9001`` and start the watch task that will also enable LiveReload for HTML, Sass, CSS and JavaScript files. In order to use LiveRealod you must have the [LiveReload Browser Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) installed and turned on before executing the ``grunt`` task command.

&sect; **Package Management** : [Bower](https://github.com/bower/bower)

To keep track of our packages and allow for easy updating we use [Bower](https://github.com/bower/bower) Package Manager which installs all our project's packages in the "components" directory. In order to install bower you must have Node and npm installed on your machine. Once Node and npm are installed simply run the command below  (which works on both Windows/Mac and one of the reasons why we chose it).

```bash
npm install bower -g
```

## &sect; What Else Is There?
With so many packages to choose from, we recommend a few libraries to use with Typeplate to compliment. Bon Appetite!

1. [FitText.js](http://fittextjs.com) &ndash; A jQuery plugin for inflating web type
2. [LETTERING.JS](http://letteringjs.com) &ndash; A jQuery plugin for radical web typography
3. [MOLTEN LEADING](https://github.com/Wilto/Molten-Leading) - Slingin &rsquo; Hot Leading
4. [Team Sass Modular Scale](https://github.com/Team-Sass/modular-scale) - Sassy Modular Scale

###### ©credits
Typeplate &copy;2014 &bull; A [@grayghostvisuals](https://twitter.com/gryghostvisuals) and [@zakkain](https://twitter.com/zakkain) Joint™
Logo Crafting by [@TommyCreenan](https://twitter.com/TommyCreenan).
