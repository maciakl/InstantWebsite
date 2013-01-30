Instant Website
===

Scaffold a very simple, single page website using Twitter Bootstrap and jQuery in mere seconds.

How do I do this thing?
---

This is how you bootstrap a website in 5 seconds:

    git clone https://github.com/maciakl/InstantWebsite.git
    cd InstantWebsite
    bower install

Boom, done. Now you have a Bootstrap driven website ready to go.

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

This will download all the static assets (Twitter Bootrstrap and jQuery scripts) into a `components` directory. When done you should see a file structure like this: 

    .
    ├── component.json
    ├── components
    │   ├── bootstrap
    │   │   ├── component.json
    │   │   ├── css
    │   │   │   ├── bootstrap.css
    │   │   │   ├── bootstrap.min.css
    │   │   │   ├── bootstrap-responsive.css
    │   │   │   └── bootstrap-responsive.min.css
    │   │   ├── img
    │   │   │   ├── glyphicons-halflings.png
    │   │   │   └── glyphicons-halflings-white.png
    │   │   └── js
    │   │       ├── bootstrap.js
    │   │       └── bootstrap.min.js
    │   └── jquery
    │       ├── component.json
    │       ├── composer.json
    │       ├── jquery.js
    │       └── jquery.min.js
    ├── grunt.js
    ├── index.html
    ├── package.json
    └── readme.markdown

You can treat the `components` directory as static assets and just deploy it with your site.

Development Aids
---

You may want to install grunt 0.3x - I took the liberty of setting up a tiny grunt file to help with the development. To set up your environment please run `npm install` in your project directory. This will fetch `grunt-html` plugin and install it locally into `node_modules`. Do not upload this directory to the server - this just helps grunt to validate html. 

Now you can run `grunt` to start a local web server and see how your page looks. It runs on port 3000 so just point your browser at `http://localhost:3000`. The process will also continuously validate your HTML against the standard as you work.

### Grunt Tasks

Following grunt tasks are defined:

* **htmllint** - validate your html (validates, then quits)
* **watch** - continuously validate html as you edit (re-validates each time you save)
* **server watch** - start a web server on port 3000

The default task is `server watch` which starts a server then watches for changes and validates HTML as you edit.

Deploying the Website
---

Upload `components/`, and `index.html` to your server. You probably may want to edit `index.html` a little bit so that it doesn't look exactly like the example.

[n]: http://nodejs.org/
[b]: http://twitter.github.com/bower/
[g]: http://gruntjs.com/
