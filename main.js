//////////////////////////////////////////////////////////////////////////
// PlugDat - Some tools and fun stuff for plug.dj
//////////////////////////////////////////////////////////////////////////
//
// Main script!
/* ----------------------------------------------------------------------
													Object Structures
-------------------------------------------------------------------------
	
*/
//////////////////////////////////////////////////////////////////////////
// Constructor
function Automator() {
	console.log( "Constructing Automator" );
	
	// Setup our dashboard
	this.overrideGameManager();
}


Automator.prototype.overrideGameManager = function() {
	manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
}


Automator.prototype.cleanUp = function() {
	console.log( "Cleaning up Automator" );
}


function getBoardState() {
	var state = [];

	for( uint iRow=0; iRow<4; ++iRow )
		state[iRow] = [];

	var boardElements = document.getElementsByClassName('tile');
}


// -----------------------------------------------------------------
// Create or destroy ourselves depending on the current situation
// -----------------------------------------------------------------
if( document.Automator === undefined ) {
	console.log( "Creating Automator" );
	document.Automator = new Automator();
} else {
	console.log( "Destroying Automator" );
	document.Automator.cleanUp();
	document.Automator = undefined;
}
// -----------------------------------------------------------------