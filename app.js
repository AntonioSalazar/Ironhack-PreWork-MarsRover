// Rover Object Goes Here
// ======================

var direction = [ "N", "S", "W", "E"];

var rover = {
  direction: 'N',
  position: [0][0]
};

var travelLog = [];
// ======================


function turnLeft() {
	console.log('turnLeft was called!');

	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}   

function turnRight(){
  console.log(`turnRight was called!`);

  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log(rover);
}

function moveForward() {
	console.log('moveForward was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}


	console.log(rover);
}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
		

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				break;

			case 'l':
				turn = 'left';
				break;
		}
	}
}


commands('rrfflffb');