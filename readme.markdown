Instant Website
===

Scaffold a very simple, single page website using Twitter Bootstrap and jQuery in mere seconds.

Prerequisites
---

You need to have the following installed on your computer:

* [node.js][n]
* [bower][b]
* [grunt.js][g]

Bootstrap The New Website
---

To start a new website, clone this repository, then do:

    bower install
    grunt

This will download all the required files (Twitter Bootrstrap assets and jQuery scripts) and start a webserver. Now you can just point your browser at `http://localhost:3000` and see the page as if it was served from the web. That's about it.

You can add custom styles in `lib/custom.css` and custom scripts in `lib/custom.js`.

Grunt Tasks
---

Following grunt tasks are defined:

* **lint** - will run *JSHint* on all scripts in `lib` and `test` directories
* **watch** - continuously lint files as you edit
* **server watch** - start a web server on port 3000

The default task is `lint server watch`.

[n]: http://nodejs.org/
[b]: http://twitter.github.com/bower/
[g]: http://gruntjs.com/
