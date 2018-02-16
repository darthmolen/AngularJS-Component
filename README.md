# AngularJs-Component

AngularJS, formerly Angular 1.X and now sometimes referred to as ng1, is a full fledged language to itself. This repository contains a simple AngularJS application starter template showcasing components as the main building block (not controllers). It uses lite-server to serve the site (which is just a thin layer for browsersync). Launchable in vscode, which makes it quick to get up.

## Notes from the Author

Some of this code is personal preference, but a lot comes from best practices I've learned either by reading or the school of hard knocks. Separation of Concerns is a huge principle and pattern for me. Globals are the devil. Reusable and supportable code are a priority, not just functional.

I've tried to put documentation in the comments of this code on why I've done certain things. I would encourage anybody else contributing to do the same.

## Frameworks Used

1. angular components
2. [ui-router](https://ui-router.github.io/ng1/tutorial/helloworld)
3. multi-view components
4. one way data binding
5. [Angular Spinners](https://github.com/chevtek/angular-spinners/tree/gh-pages)

## Steps for installation

1. (optional) Install [Visual Studio Code](https://code.visualstudio.com). It has multi-platform support, is a great general editor, and the task system plus plugins support sets it above and beyond just a code editting tool.
1. Install Node.JS via [nvm](https://github.com/creationix/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows))
1. NPM should be installed with your Nodejs and is a very useful package manager
1. open a command prompt to this directory 
1. npm install
1. npm run start
1. (optional) If using vscode, you can just simply "launch" after you run npm install

## General Tutorials

[Scotch.io Tutorial](https://scotch.io/courses/getting-started-with-angularjs-1x)

[Full Blown App Tutorial](https://github.com/toddmotto/angular-1-5-components-app)

[Service vs. Factory](https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html)

## Component Tutorials

At the end of the day, components should be used for everything. Controllers can be optional. I tend to add a controller to my component "just in case" but that's personal preference.

[Components](https://toddmotto.com/exploring-the-angular-1-5-component-method/)

[Component Lifecycle](https://toddmotto.com/angular-1-5-lifecycle-hooks)

[Refactoring to Components](https://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html)

[Building reusable Components](https://www.sitepoint.com/building-angular-1-5-components/)

[Components for Everything](https://medium.com/the-startup-lab-blog/creating-highly-reusable-angularjs-components-9249f21c1938)

[Component Thinking](http://busypeoples.github.io/post/thinking-in-components-angular-js/)
