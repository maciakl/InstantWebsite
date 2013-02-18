Instant Website
===

Scaffold a very simple, single page website using Twitter Bootstrap and jQuery in mere seconds.

How do I do this thing?
---

This is how you bootstrap a website in 5 seconds:

    git clone https://github.com/maciakl/InstantWebsite.git
    cd InstantWebsite
    bower install

Boom, done. Now you have a Bootstrap driven website ready to go in the `web/` directory.

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

This will download all the static assets (Twitter Bootrstrap and jQuery scripts) into a `web/components/` directory. When done you should see a file structure like this: 

    .
    ├── .bowerrc
    ├── component.json
    ├── .gitignore
    ├── grunt.js
    ├── package.json
    ├── readme.markdown
    └── web
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
        └── index.html

You can treat the `web/components/` directory as static assets and just deploy it with your site.

Development Aids
---

You may want to install `grunt-cli` package globally via npm:

    npm install -g grunt-cli

I took the liberty of setting up a tiny grunt file to help with the development. To set up your environment please run the following command in your project directory: 

    npm install 
    
This will fetch `grunt`,  `grunt-html` and appropriate `grunt-contrib` plugins and install it locally into `node_modules`. Do not upload this directory to the server - these just a development time dependencies that let you run a local server and validate html.

Now you can run `grunt` to start a local web server and see how your page looks. It runs on port 3000 so just point your browser at `http://localhost:3000`. The process will also continuously validate your HTML against the standard as you work.

### Grunt Tasks

Following grunt tasks are defined:

* `grunt htmllint` - validate your html (validates, then quits)
* `grunt watch` - continuously validate html as you edit (re-validates each time you save)
* `grunt connect` - start a web server on port 3000 (if called on its own it just quits immediately)
* `grunt`  - default task is set to `connect` followed by `watch` which will start the server, then watch for file changed files and validate them.

Deploying the Website
---

Upload the contents of the `web/` directory to your server. 

[n]: http://nodejs.org/
[b]: http://twitter.github.com/bower/
[g]: http://gruntjs.com/
