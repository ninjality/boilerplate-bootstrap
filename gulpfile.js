var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.browserSync({
        server: {
            baseDir: 'public',
        },
        proxy: undefined,
        files: [
            'public/css/app.css',
            'public/js/app.js',
            'public/**/*.html',
        ],
    });
    mix.sass('app.scss');
    mix.browserify('app.js');
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
    mix.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts/bootstrap');
});
