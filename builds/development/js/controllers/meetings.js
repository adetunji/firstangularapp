myApp.controller('MeetingsController', function($scope, $firebase){
	
	var ref = new Firebase('https://attend.firebaseio.com/meetings');
	var meetings = $firebase(ref);
	
	$scope.meetings = meetings.$asObject();
	
	$scope.addMeeting=function(){
		meetings.$push({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function(){
			$scope.meetingname = '';
		});
	};//add meeting
	
	
	$scope.deleteMeeting=function(key){
		meetings.$remove(key);
	};
});//MeetingsController
