# Bootstrap Boilerplate

We use [Bootstrap](http://getbootstrap.com/) on a lot of projects at [Ninjality](https://ninjality.com/). This boilerplate allows starting development without the hassle of manually configuring compilers.

## Setup

`cd` into your project folder and run the following commands:

1. Download boilerplate: `curl -fsSL https://github.com/ninjality/boilerplate-bootstrap/archive/master.tar.gz | tar -xz --strip-components 1`
2. Install dependencies: `npm install`
3. Run Gulp tasks: `npm run build`
4. Start Browsersync server: `npm start`

## Development

`npm start` will start a [Browsersync](https://www.browsersync.io/) server. Files are served out of the `/public` folder and the browser will automatically reload when a file is changed.

If you notice that the font icons are missing, run `npm run build`.

Features:
- Bootstrap already imported (including jQuery and Bootstrap's plugins).
- Font Awesome already imported.
- Sass and Autoprefixer in `/resources/assets/sass`.
- JavaScript (ES2015) in `/resources/assets/js`.
- npm for managing dependencies.

Any missing features can be added to the `gulpfile.js` by following the [Laravel Elixir documentation](https://laravel.com/docs/5.2/elixir).

## Configuration

You can customize Bootstrap by uncommenting and updating the variables in  `/resources/assets/sass/_bootstrap-variables.scss`.

A boilerplate is meant to start you off, so feel free to update any file as your project grows.

## Production

Run `npm run prod` to build optimized versions of the CSS and JS.
