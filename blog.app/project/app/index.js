'use strict';

var jquery = require('jquery');
var angular = require('angular');

require('angular-toastr');
require('@uirouter/angularjs');
require('./app');

require('./view/blog-post-controller');

require('./view/blog-post-directive');

require('./view/mock-data-source');
require('./view/data-service');