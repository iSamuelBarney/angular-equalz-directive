/*!
*  angular-equalz-directive 0.0.1 2015-07-10
*  angular-equalz-directive - An AngularJS directive to easily equalize column heights using no jquery.
*  git: https://github.com/samuelbarney/Equalz-Angular-Directive
*/

'use strict';

angular.module('ngEqualz', [])
.directive("equalz", function($parse) {
    return {
        restrict: "A",
        link: {
            pre: function (scope, element, attrs) {
                    //console.log('equalz: ' + attrs.equalz);
                    var h = element.css('height');
                    //console.log(element.css('height'));
                    var x = document.getElementsByClassName(attrs.equalz);
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].style.height = h;
                        //console.log(h);
                    }
                }
        }
    };
  });