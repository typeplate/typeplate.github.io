## Installation

- Rule #1 in Typeplate Club… Always use ``<meta charset="utf-8">`` in your document ``<head>``. Doing so alleviates authors need to use a charset from within a stylesheet. Anything imported into a document using ``<meta charset="utf-8">`` is encoded as ``utf-8`` globally.

- Based on use cases for most developers' workflow, we recommend using Typeplate just after your reset stylesheet (i.e. [normalize](http://necolas.github.com/normalize.css)) and your compass ``@import`` in order to operate as we've intended, but as you'll see from our <a href="http://typeplate.com/demo">demo</a> it isn't necessary.

- Regarding browsers <= IE8 : We don't always provide fallbacks for these legacy browsers and leave this up to you based on your needs. We feel IE8 will rapidly decline due to Microsoft upgrading users to install at least >= IE9 along with discontinuing updates for XP and below customers.

### &sect; Installation via ``.scss @import``

Simply download our ``_typeplate.scss`` partial file and import from your project's primary ``.scss`` file like so:

```scss
@import "compass"; // Not required. For example purposes only.
@import "[your_project_path]/reset"; // Not required. For example purposes only.
@import "[your_project_path]/typeplate";

// Custom Author Styles
// ====================================
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

Yup that&rsquo;s right! We&rsquo;re in the bower package registry. Simply run ``bower install typeplate`` for the CSS, Sass versions and watch the magic happen. This is an example of how to include either the CSS or Sass version in your project.

**Sass**

```scss
@import "compass";
@import "[your_project_path]/reset";
@import "[root_project_path]/bower_components/typeplate/scss/typeplate";
```

Since bower allows authors to keep packages and dependencies updated easily it also overrides any custom changes made to the package(s) contents served from the components directory -used by bower to organize packages. To alleviate this frustration we've provided a variable file to override the packages opinionated defaults. Simply duplicate the ``_typeplate-vars.scss`` file and include it from your own directory (most likely your sass directory where you keep all your related sass project files.)

**Sass w/custom variable overrides**

```scss
@import "compass";
@import "[your_project_path]/reset"; // your browser reset of choice
@import "[your_project_path]/scss/typeplate-vars"; // duplicated var file outside bower's components directory
@import "[root_project_path]/bower_components/typeplate/scss/typeplate"; // the bower package directory and included file
```

**CSS**

You could also use the CSS version instead (btw… we don't condone this method depicted below. In reality you should copy the contents of the CSS file and paste the contents in the top of your projects stylesheet):

```html
<head>
	<link rel="stylesheet" href="[root_project_path]/bower_components/normalize-css/normalize.css">
	<link rel="stylesheet" href="[root_project_path]/bower_components/typeplate/css/typeplate.css">
</head>
```