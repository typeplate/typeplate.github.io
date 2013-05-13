# Set this to the root of your project when deployed:
#http_path = "http://url.com/"
http_path = "/"

# Set the images directory relative to your http_path or change
# the location of the images themselves using http_images_path:
http_images_dir = "img"

# http://compass-style.org/reference/compass/helpers/urls/#stylesheet-url
# http://chriseppstein.github.com/blog/2010/05/17/where-are-your-images
#http_images_path = ""

# Compass will automatically add cache busters to your images based on image timestamps.
# This will keep browser caches from displaying the wrong image if you change the image but not the url.
# If you don’t want this behavior, it's easy to configure or disable:
# UNCOMMENT THE NEXT THREE LINES
#asset_cache_buster do |http_path, real_path|
#  nil
#end

#import paths
#add_import_path = "app/components"

#Project Assets Location
css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"

#Projects Font Directory
fonts_dir = "fonts"

# Development
#output_style = :expanded
#environment = :development

# Production
output_style = :compressed
environment = :production

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# Enable or disable line comments
line_comments = false

# Color output
color_output = false

# Sass Source Mapping
# Make sure you’re running at least Chrome 24
# http://bricss.net/post/33788072565/using-sass-source-maps-in-webkit-inspector
# sass_options = { :debug_info => true }

# Sass Sleuth
# http://www.mobify.com/dev/sass-sleuth-debugging-sass-in-webkit-browsers
#if environment != :production
#    sass_options = {:debug_info => true}
#end

# Add support for repeating linear gradients
# https://github.com/chriseppstein/compass/issues/401
Compass::BrowserSupport.add_support("repeating-linear-gradient", "webkit", "moz", "ms")

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass scss scss && rm -rf sass && mv scss sass


#output_style = :compressed # used for Fire.app on Windows
