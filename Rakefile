task :build do
  Dir.chdir('yeoman') { `yeoman build` }
  Dir.glob('yeoman/dist/*') { |f| FileUtils.cp_r(f, '.', verbose: true) if f != "yeoman/dist/codekit" }
  FileUtils.copy("yeoman/dist/.htaccess", '.', verbose: true)
end
