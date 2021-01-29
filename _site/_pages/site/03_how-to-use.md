## How to use

### Development

-   Autocompile while editing (keep it running):

```
bundle exec jekyll serve --livereload;
```

### Deployment

```
bundle exec jekyll serve # Compile Jekyll files (then ctrl-c after compiling is completed)
JEKYLL_ENV=production bundle exec jekyll build # Prepare production version

# push to the repo
git add .
git commit -m "COMMENT"
git push origin master
```
