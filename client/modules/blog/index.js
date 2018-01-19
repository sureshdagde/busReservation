/**
 * Created by medibox on 30/7/17.
 */

angular.module('appBlog',['appBlogCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.blog', {
                url: "/blog",
                templateUrl: "modules/blog/template/blog.html"
            })
    });
