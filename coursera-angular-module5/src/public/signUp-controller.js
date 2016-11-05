(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.saveSubmit=function(userFirstName,userLastName,userEmail,userPhone,userShortName){
    signUpCtrl.shortNameInd=MenuService.saveFromSubmit(userShortName).then(function (item) {
      signUpCtrl.success=false;
      signUpCtrl.failure=false;
      var user= {
             firstName:userFirstName,
             lastName:userLastName,
             email:userEmail,
             phone:userPhone,
             shortName:userShortName,
             item:item.data,
             saved:true
           };
           signUpCtrl.success=true;
           signUpCtrl.failure=false;
    MenuService.saveInService(user);
    },function()
    {
      signUpCtrl.success=false;
      signUpCtrl.failure=true;
     });
  }
}


})();
