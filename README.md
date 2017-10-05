# Pug-Less-Setup

Here is the setup to compile Pug and Less in Code Anywhere. Since npm is installed when I pick my package I use I did not have installations instructions for installing node.js or npm. This is what worked for me, however, there may be better ways. If you have a better way let me know!

Here are some instructions, mostly taking from from StackOverflow or some other site to help with installing everything needed.

Installing Grunt

To setup GruntJS build here is the steps:

Make sure you have setup your package.json or setup new one: npm init

Install Grunt CLI as global: npm install -g grunt-cli

Install Grunt in your local project: npm install grunt --save-dev

Now you need to setup your Gruntfile.js which will describe your build process. Refer to the Gruntfile.js included with this project.


Installing Pug
In the command line type: npm install grunt-contrib-pug --save-dev

Installing Less
In the command line type: npm install grunt-contrib-less --save-dev

Install Watch
In the command line type: npm install grunt-contrib-watch --save-dev

Install Prettify
In the command line type: npm install grunt-prettify --save-dev

Once everything is installed you should be able to use the command line to run the grunt watch command. 
In the command line type: grunt watch

This will (or should) watch your less and pug files and compile when you save. It will also compress the main css file and beautiful the html file. (if you copied the gruntfile.js from above).
