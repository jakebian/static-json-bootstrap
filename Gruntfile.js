module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/style.css': 'scss/style.scss'
                }
            } 
        },

        watch: {

            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },

        execute: {
            launch: {
                src: ['launch.js']
            }
        }
    });

    grunt.registerTask('css', 'watch:css');
    grunt.registerTask('default', ['sass', 'execute:launch']);


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
}