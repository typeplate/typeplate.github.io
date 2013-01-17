# Via Addy Osmani and Sindresorhus:
# These findings may eliminate the 'rake build' task all together
#
# Use subtree to push the dist folder directly to gh-pages:
# git subtree push --prefix dist origin gh-pages
#
# Other Suggestions:
# symlink or submodule. symlink would not work because yeoman deletes the 'dist' directory
task :build do
  Dir.chdir('yeoman') { `yeoman build` }
  Dir.glob('yeoman/dist/*') { |f| FileUtils.cp_r(f, '.', verbose: true) if f != "yeoman/dist/codekit" }
  FileUtils.copy("yeoman/dist/.htaccess", '.', verbose: true)
end
