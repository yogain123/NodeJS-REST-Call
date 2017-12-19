var app = angular.module("myApp", []);
app.controller("myController", ($scope, $http) => {
  console.log("Inside controller");

  $scope.hola = () => {
    console.log("inside function");
    $http.post("/todos", JSON.stringify({
      "Name": "Angular 4",
      "Age": 400
    })).then((data) => {
      console.log("Data is " + (data.Name));

    }, (error) => {
      console.log("Error is " + error);
    });

  };

  $scope.catalog = () => {
    $http.get("/rest/catalog").then((data) => {
      $scope.appData = data.data;

    }, (error) => {
      console.log(error);

    });
  };

  $scope.delete = () => {
    $http.delete("/delete").then((data) => {
      $scope.appData = "hola";
    }, (error) => {
      console.log(error);

    });

  };

  $scope.add = (worklist) => {
    //console.log(typeof(JSON.stringify(worklist)));
    $http.post("/todos/Yogendra Saxena", JSON.stringify(worklist)).then(() => {
      console.log("Data Inserted Successfully");
      $scope.title = "Submitted";
      $scope.desc = "From Submitted Successfully";
      $('#modal').modal('show');



    }, (error) => {
      console.log("Some Error");
      $scope.title = "Error";
      $scope.desc = "Unable to Submit Data";
      $('#modal').modal('show');

    });

  };

  $scope.init = () => {
    $scope.date = new Date();
    let momenttt = moment();
    $scope.formattedDate = momenttt.format("DD, MM YYYY");

  };

  $scope.init();


});
