# sudomaze.dev

## How have I built this website?

### General

* Built with: [Jekyll](https://jekyllrb.com/)
* Hosting service: [GitHub Pages](https://pages.github.com/)
* Domain provider: [Namecheap](https://www.namecheap.com/)
* PDF: [LaTeX](https://en.wikibooks.org/wiki/LaTeX)

### Libraries

* Table of content: [Tocify.js](http://gregfranko.com/jquery.tocify.js/)
* Mathematics: [mathjax](https://www.mathjax.org/)
* Pseudocode: [Pseudocode.js](http://www.tatetian.io/pseudocode.js/) and [KaTeX](https://katex.org/)
* JavaScript: [jQuery](https://jquery.com/)

## Inspirations and Credits

* Overall content: [Gwern Branwen](https://www.gwern.net/index)
* Overall design: [simply-jekyll](https://github.com/raghuveerdotnet/simply-jekyll) by *[raghuveerdotnet](https://github.com/raghuveerdotnet)*
* Display image: [Artist](https://steamcommunity.com/id/r4tb0y)
* Deployment for custom plugins: [jekyll-deploy-action](https://github.com/jeffreytse/jekyll-deploy-action) by *[jeffreytse](https://github.com/jeffreytse)* and *[ThiefMaster](https://github.com/ThiefMaster)*


## How to use

### Development

* Autocompile while editing (keep it running):

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