(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','user'];
function MyInfoController(MenuService,user) {
  var myInfoControl = this;
  myInfoControl.firstName=user.firstName;
  myInfoControl.lastName=user.lastName;
  myInfoControl.email=user.email;
  myInfoControl.phone=user.phone;
  myInfoControl.itemName=user.itemName;
  myInfoControl.itemDesc=user.itemDesc;
  myInfoControl.itemImg=user.itemImage;
  myInfoControl.saved=user.itemSaved;
}


})();
