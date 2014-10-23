angular.module('search', ['globalData', 'globalMethods'])
.controller('SearchController', function ($scope, StoredData, GlobalMethods) {
  $scope.data = {
    news: StoredData.data.news,
    photos: StoredData.data.photos,
    tweets: StoredData.data.tweets
  };
  $scope.GlobalMethods = GlobalMethods;
});
