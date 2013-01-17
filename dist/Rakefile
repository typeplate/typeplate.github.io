
# Via Addy Osmani and Sindresorhus
# These finding s may rmeove the rake build all together
# Use subtree to push the dist folder directly to gh-pages:
# git subtree push --prefix dist origin gh-pages
# Other Suggestions
# symlink, submodule, or subtree: `git subtree push --prefix path remote branch`. Your choice
task :build do
  Dir.chdir('yeoman') { `yeoman build` }
  Dir.glob('yeoman/dist/*') { |f| FileUtils.cp_r(f, '.', verbose: true) if f != "yeoman/dist/codekit" }
  FileUtils.copy("yeoman/dist/.htaccess", '.', verbose: true)
end
