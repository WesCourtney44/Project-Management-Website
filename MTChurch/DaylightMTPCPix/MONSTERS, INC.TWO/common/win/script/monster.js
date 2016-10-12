// monster.js file for monsters, inc. disc 2
//
//
// (c) 2001 - 2002 InterActual Technologies
// Author: Scott M. Bruck
// 


function GamePage()  {

self.location="replace.htm";

}

//
// LUNCH ROOM DVD-ROM GAME FUNCTION
//
function goLunchRoom()  {


	GamePage();

	ddir = InterActual.DiscDirectory;
	path = ddir + "common/win/monster/IPLaunch.exe";
	InterActual.Launch(path, "mon");


}


//
// PEEK A BOO DOOR GAME
//
function goPeek()   {

top.vari.playfeature=top.vari.PeekABooGame;
top.vari.site="main.htm";

 	top.topframe.location="playt.htm";


}


//
// STORYTIME MONSTROPOLIS
//
function goStory()   {

top.vari.playfeature=top.vari.Storytime;
top.vari.site="main.htm";

 	top.topframe.location="playt.htm";


}


