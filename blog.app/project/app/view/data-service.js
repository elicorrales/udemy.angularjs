'use strict';

var app = require('../app');

var dataService = function(mockDataSource) {
    console.log('Inside data-service.js - dataService constructor? - creating posts');
    this.data = [];
    this.data.push(mockDataSource.getPost('Learn Angular','Create Projects'));
    this.data.push(mockDataSource.getPost('Learn Java','Become A Professional'));
    this.data.push(mockDataSource.getPost('Learn Angular','Create Projects'));
    this.data.push(mockDataSource.getPost('Learn Java','Become A Professional'));

    this.basicInfo = {
        name:'Eli Cor',
        intro:'I love developing'
    };

    this.socialData = {

        works:'At My Company',
        lives:'In Someplace , ST',
        birth:'2013-23-11',
        from:'Someplace'
    };
};

var proto = dataService.prototype;
proto.getPostData = function() {
    return this.data;
}
proto.getBasicInfoData = function() {
    return this.basicInfo;
}

proto.getSocialData = function() {

    return this.socialData;
}

app.service('dataService',dataService);


module.exports = app;