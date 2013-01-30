Instant Website
===

Scaffold a very simple, single page website using Twitter Bootstrap and jQuery in mere seconds.

Prerequisites
---

You need to have the following installed on your computer:

* [node.js][n]
* [bower][b]
* [grunt.js][g] (optional)

Bootstrap The New Website
---

To start a new website, clone this repository, then do:

    bower install

This will download all the static assets (Twitter Bootrstrap and jQuery scripts) into a `components` directory. You can now open `index.html` and verify it looks ok.

Development
---

You may want to install grunt 0.3x globally. To set up development environment please run `npm install` in your project directory. This will fetch `grunt-html` plugin that lets you validate html. Now you can run `grunt` to start a local web server and see how your page looks.

The web server runs on port 3000. Just point your browser at `http://localhost:3000`. The process will also continuously validate your HTML as you work.

Deploying the Website
---

Upload `components/`, and `index.html` to your server. You probably may want to edit `index.html` a little bit so that it doesn't look exactly like the example.

Grunt Tasks
---

Following grunt tasks are defined:

* **htmllint** - validate your html
* **watch** - continuously validate html as you edit
* **server watch** - start a web server on port 3000

The default task is `server watch` which starts a server then watches for changes and validates HTML as you edit.

[n]: http://nodejs.org/
[b]: http://twitter.github.com/bower/
[g]: http://gruntjs.com/
