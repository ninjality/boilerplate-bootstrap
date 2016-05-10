# Bootstrap Boilerplate

We use [Bootstrap](http://getbootstrap.com/) on a lot of projects at [Ninjality](https://ninjality.com/). This boilerplate is a way for us to quickly start development without the hassle of manually configuring compilers.

## Setup

Run the following commands in your terminal. Change "MyProject" to whatever you want the folder to be named.

1. Clone into "MyProject" folder: `git clone https://github.com/ninjality/boilerplate-bootstrap.git MyProject`
2. Open "MyProject" folder: `cd MyProject`
3. Install dependencies: `npm install`
4. Run Gulp: `npm run build`
5. Run Browsersync: `npm start`

## Development

Run `npm start` to start a [Browsersync](https://www.browsersync.io/) server. Files are served out of the `/public` folder and the browser will automatically reload when a file is changed.

If you notice that the font icons are missing, run `npm run build`.

Features:
- Bootstrap already imported (including jQuery and Bootstrap's plugins).
- Font Awesome already imported.
- Sass in `/resources/assets/sass`.
- JavaScript (ES2015) in `/resources/assets/js`.
- npm for managing dependencies.

Any missing features can be added to `gulpfile.js` by following the [Laravel Elixir documentation](https://laravel.com/docs/5.2/elixir).

## Configuration

You can customize Bootstrap by uncommenting and updating the variables in  `/resources/assets/sass/_bootstrap-variables.scss`.

Also consider removing the `.git` folder and setting your project up as its own Git repository.

Change any file based on your needs, including this readme.

## Production

Run `npm run prod` to build optimized versions of the CSS and JS.
