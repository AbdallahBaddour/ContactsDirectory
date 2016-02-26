var app = angular.module('app.controllers', []);

app.controller('contactsCtrl', function ($scope, $ionicPlatform, $cordovaSQLite) {


  var query = "SELECT id, name, phone FROM contacts";
  $ionicPlatform.ready(function () {
    //alert("ready-select");
    $cordovaSQLite.execute(db, query, []).then(function (res) {
      if (res.rows.length > 0) {
        $scope.results = [];
        for (var i = 0; i < res.rows.length; i++) {
          $scope.results.push({
            id: res.rows.item(i).id, //check id
            name: res.rows.item(i).name,
            phone: res.rows.item(i).phone
          });
          $scope.$apply();
        }

      } else {
        //alert("No results found");
      }
    }, function (err) {
      console.error(err);
    });

    $scope.CallTel = function (tel) {
      window.location.href = 'tel:' + tel;
    }

    $scope.DeleteContact = function(contact){

      $ionicPlatform.ready(function () {
      var query = "DELETE FROM contacts where id = ?";
        $cordovaSQLite.execute(db, query, [contact.id]).then(function(res) {
          $scope.results.splice($scope.results.indexOf(contact), 1);
        }, function (err) {
          console.error(err);
        });
      });
    }


  });

});

app.controller('ContactDetailsController', function ($scope, $state, $ionicPlatform, $cordovaSQLite, $stateParams) {

  $scope.contactDetails = [];

  $ionicPlatform.ready(function () {
    var query = "SELECT id, name, phone, phone2, email, note FROM contacts where id = ?";
    $cordovaSQLite.execute(db, query, [$stateParams.contactID]).then(function (res) {
      if (res.rows.length > 0) {
        //alert("rows >0");
        for (var i = 0; i < res.rows.length; i++) {
          $scope.contactDetails.push({
            name: res.rows.item(i).name,
            phone: res.rows.item(i).phone,
            phone2: res.rows.item(i).phone2,
            email: res.rows.item(i).email,
            note: res.rows.item(i).note
          });
        }

      }
    }, function (err) {
      console.error(err);
    });
  });

  $scope.CallTel = function (tel) {
    window.location.href = 'tel:' + tel;
  }

  $scope.openemail = function(email){
    window.location.href = 'mailto:' + email;
  }

});

app.controller('newcontactCtrl', function ($scope, $state, $cordovaSQLite, $ionicPlatform) {

  $scope.user = {
    name: "",
    phone: "",
    phone2: "",
    email: "",
    note: ""
  }
  //var contacts = [];
  $scope.addcontact = function (form) {
    if (form.$valid) {
      //alert("enter function");
      console.log("name: ", $scope.user.name, " phone: ", $scope.user.phone);
      //contacts.push($scope.user.name,$scope.user.phone);
      //console.log(contacts);
      //create database in app.js
      var query = "INSERT INTO Contacts (name, phone, phone2, email, note) VALUES (?,?,?,?,?)";


      $ionicPlatform.ready(function () {
        //alert("ready-ionic");
        $cordovaSQLite.execute(db, query, [$scope.user.name, $scope.user.phone, $scope.user.phone2, $scope.user.email, $scope.user.note]).then(function (res) {
          //alert("insertId: " + res.insertId);
          $state.go("contacts");
        }, function (err) {
          console.error(err);
          //alert("error");
        });
      });

    }
    else console.log("invalid form");
  }
});
