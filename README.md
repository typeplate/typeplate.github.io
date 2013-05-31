<a href="//typeplate.com"><img src="http://typeplate.com/img/logo.png" alt="typeplate logo" width="216" height="216"></a>

## What is it?
Frameworks make decisions for you about how to organize, structure and design a site. Pattern libraries don&rsquo;t separate styling and markup, making them tough to use in a truly modular fashion. We weren&rsquo;t satisfied, so we made a thing that doesn&rsquo;t do that.

Typeplate is a "typographic starter kit". We don&rsquo;t make aesthetic design choices, but define proper markup with extensible styling for common typographic patterns. A stripped&ndash;down Sass library concerned with the appropriate technical implementation of design patterns&ndash;not how they look.

## Browser Tested, Developer Approved
<img src="https://raw.github.com/paulirish/browser-logos/master/all-desktop.png" alt="" width="375">

## File Size
Not much goin&rsquo; on here in terms of bulk. As you can see, Typeplate is just a measely 3kb when compressed. That's really, really small.

- Raw Sass = **18kb**
- Compressed Sass = **3kb**
- Raw CSS = **7kb**

## Installation

- Rule #1 in Typeplate Club… Always use ``<meta charset="utf-8">`` in your document ``<head>``. Doing so alleviates authors need to use a charset from within a stylesheet. Anything imported into a document using ``<meta charset="utf-8">`` is encoded as ``utf-8`` globally.

- Based on use cases for most developers' workflow, we recommend using Typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="http://typeplate.com/demo">demo</a> it isn't necessary.

**Example using Sass:**

```scss
@import "compass";
@import "[your_project_path]/reset";
@import "[your_project_path]/typeplate";

// Custom Author Styles
// ====================================
```
### &sect; Installation via ``.scss @import``

Simply download our ``_typeplate.scss`` partial file and import from your project's primary ``.scss`` file like so:

```scss
@import "[your_project_path]/typeplate";
```

Authors can also take this one step further and include a custom variables file from outside the _typeplate.scss partial file. This allows authors to override the default variables set within ``_typeplate.scss``.

```scss
@import "[your_project_path]/typeplate-vars"; // Must come first
@import "[your_project_path]/typeplate"; // Must follow typeplate-vars
```

### &sect; Installation via ``.css``

If the Sass version isn't your cup of tea, we've provided a CSS version. Simply place the contents of ``typeplate.css`` inside your project's stylesheet (reset style, typeplate, author styles).

###### Option #1 This method is not the best as it results in more HTTP requests.
```html
<head>
    <link rel="stylesheet" href="[project_path]/css/normalize.css"><!-- Reset of your choice (optional). We like normalize even though it's not a reset -->
    <link rel="stylesheet" href="[project_path]/css/typeplate.css"><!-- typeplate styles -->
    <link rel="stylesheet" href="[project_path]/css/main.css"><!-- main stylesheet -->
</head>
```

###### Option #2 This method is the best as it results in less HTTP requests.

```html
<head>
	<link rel="stylesheet" href="[project_path]/css/main.css"><!-- main stylesheet with typeplate.css inside -->
</head>
```

### &sect; Installation via Bower

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate`` for the CSS, Sass versions and watch the magic happen. This is an example of how to include either the CSS or Sass version in your project. Refer to our [typeplate-bower repo](https://github.com/typeplate/typeplate-bower) for more details regarding the typeplate bower package.

**Sass**

```scss
@import "compass";
@import "[your_project_path]/reset";
@import "[root_project_path]/components/typeplate/scss/typeplate";
```

Since bower allows authors to keep packages and dependencies updated easily it also overrides any custom changes made to the package(s) contents served from the components directory -used by bower to organize packages. To alleviate this frustration we've provided a variable file to override the packages opinionated defaults. Simply duplicate the ``_typeplate-vars.scss`` file and include it from your own directory (most likely your sass directory where you keep all your related sass project files.)

**Sass w/custom variable overrides**

```scss
@import "compass";
@import "[your_project_path]/reset"; // your browser reset of choice
@import "[your_project_path]/scss/typeplate-vars"; // duplicated var file outside bower's components directory
@import "[root_project_path]/components/typeplate/scss/typeplate"; // the bower package directory and included file
```

**CSS**

You could also use the CSS version instead (btw… we don't condone this method depicted below. In reality you should copy the contents of the CSS file and paste the contents in the top of your projects stylesheet):

```html
<head>
	<link rel="stylesheet" href="[root_project_path]/components/normalize-css/normalize.css">
	<link rel="stylesheet" href="[root_project_path]/components/typeplate/css/typeplate.css">
</head>
```

## Contributing Guidelines
### &sect; Pull Requests
When contributing (by the way you're awesome for that so thanks) please keep your commits small and targeted when you're prepared to file a Pull Request. We&rsquo;d prefer not seeing Pull Requests that contain 20 commits in multiple spots. Keep it small and it will make things simpler and much cleaner in the long run.

### &sect; Feature Branches
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

You can always check if they're installed by running the bash command ``gem list`` which will list all your gems installed.

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
