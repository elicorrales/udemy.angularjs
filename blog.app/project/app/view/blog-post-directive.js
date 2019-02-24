'use strict';
var app = require('../app');
app.directive('blogPost',function() {
    return {
        restrict: 'E',
        templateUrl: './app/view/templates/blog-post.html',
        scope: {
            post:'='
        },
        controller:['$scope', function($scope) {
            console.log('Inside a blog-post-directive anonymous controller...');
            $scope.msgContent = '';
            $scope.addMessage = function() {
                console.log('Inside blog-post-directive anonymous controller, add message');
                let newMsg = {author:'Unknown',message:$scope.msgContent};
                let filtered = $scope.post.messages.filter((msg) => msg.author===newMsg.author && msg.message===newMsg.message);
                if (filtered==undefined || filtered.length<1) {
                    $scope.post.messages.push(newMsg);
                }
            };
        }]
    }
});
module.exports = app;