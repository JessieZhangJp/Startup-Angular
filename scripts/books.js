angular.module('myapp', [])
.controller('MyController', ['$scope', function($scope) {
	$scope.books = [
		{
			isbn: '978-4-7741-7078-7',
			title: 'サーブレット＆JSPポケットリファレンス',
			price: 2680,
			publish: '技術評論社',
			published: new Date(2015, 0, 8)
		},
		{
			isbn: '978-4-7741-7078-3',
			title: 'iphone/iPad開発ポケットリファレンス',
			price: 2780,
			publish: '技術評論社',
			published: new Date(2013, 10, 23)
		}
	];
}]);