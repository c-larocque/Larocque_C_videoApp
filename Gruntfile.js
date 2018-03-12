module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            files: {
              'public/stylesheets/style.css' : 'sass/main.scss'
            }
          }
        },
        watch: {

          sass: {
            files: ['sass/*.scss'],
            tasks: ['sass']
          }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('watchFiles', ['watch', 'sass']);

};
