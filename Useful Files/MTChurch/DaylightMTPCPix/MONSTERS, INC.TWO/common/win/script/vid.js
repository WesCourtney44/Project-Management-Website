//Version 1.0TSC IA20 Javascript File  090401 Touchstone C Template Version
//Bookmarking
//Full Screen Event
//Requires IA Player 2.0 MR2 or higher
//File Information
//(c) 2001 - 2002 InterActual Technologies, Inc.
//Author: Scott M. Bruck
// enhanced time play modifications 041602 Scott M. Bruck


/////////////////////////////////////////////////////
//This vid.js file contains the functions referenced
//by the buttons in the main HTML page.  While these
//are simple one-line functions, it is good to keep
//your video code in a centralized file.  That way,
//should you have to make any changes to a function,
//you only have to edit this single file instead of
//every place the function is called.
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//Global Variable Declarations
/////////////////////////////////////////////////////

//the type of video behavior is declared
//this is used by the events to decide how to behave

var Template_Behavior = "";	
var URLhold = "";
var returnURL="";
var platform=-1;
var tSyncTitle= false;
var tSyncDomain= false;
var tSyncChap=-1;

//these variables save the numbers of the
//title or chapter which were called in the
//TitlePlay or ChapterPlay functions
//They will be used in the event functions to
//determine when you're no longer playing
//the section of video you wanted

var CurrentTitle = -1;
var CurrentChapter = -1;

//this variable is used to determine when you
//have started playing the desired piece of video
//and can therefore start checking when you need
//to stop playback

var playing = false;

//This variable is used if the user selects play full
//screen in the script and screen section


var fullScreen = 0;

/////////////////////////////////////////////////////
//This function is called after video playback has
//stopped to reset all variables to their defaults
/////////////////////////////////////////////////////

function Reset_All() {
	Template_Behavior = "";
	CurrentTitle = -1;
	CurrentChapter = -1;
	playing = false;
	tSyncTitle=false;
	tSyncDomain=false;
	tSyncChap=-1;
}

/////////////////////////////////////////////////////
//This function is used to begin playback of main feature
//The first title will play the DVD from the first play
//PGC or the Warning cards
//The second play should play the feature directly
//of take the user to the main menu
/////////////////////////////////////////////////////

function PlayTitle2(Title) {

	//make sure all variables are reset
	Reset_All();
	
	//define the behavior to be used by the events
	Template_Behavior = "Title_Trap";

	//initiate the video playback to the title
	InterActual.PlayTitle(Title);

	returnURL = "index.htm";

	//and show the video controller
	InterActual.ShowControls();
}

//////////////////////////////////////////////////////
//This function is used to begin playback on settops
/////////////////////////////////////////////////////

function PlayMovie(url,system) {

//make sure all variables are reset
Reset_All();


//define the behavior to be used by the events

//alert('platform= '+system);
//alert('pcCode= '+top.vari.pcCode);


Template_Behavior = "pc_autostop";




	returnURL = url;

//fullScreen = true;
  InterActual.Play();



InterActual.ShowContextMenu(0x00000000);	//and disable the right-click menu.

}


/////////////////////////////////////////////////////
//This function is used to begin playback of special features
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//This function is used to begin playback of a specific
//Title.
/////////////////////////////////////////////////////

function PlayTitle(Title,URL) {

	//make sure all variables are reset
	Reset_All();

	//define the behavior to be used by the events
	Template_Behavior = "monster_clip";

	//save the title that was just called so you
	//can compare it later in the TitleEvent
	CurrentTitle = Title;


 	returnURL = URL;

	
	//initiate the video playback to the title
	InterActual.PlayTitle(CurrentTitle);

	//and show the video controller
//	InterActual.ShowControls();
}



/////////////////////////////////////////////////////
//This function is used to begin time playback for BOOKMARKING
/////////////////////////////////////////////////////


function PlayTitleBook(Title,URL) {
	
	//make sure all variables are reset
	Reset_All();

	//define the behavior to be used by the events
	Template_Behavior = "bookmarking";

	//save the title that was just called so you
	//can compare it later in the TitleEvent
	CurrentTitle = Title;


 	returnURL = URL;

	
	//initiate the video playback to the title
	InterActual.PlayTitle(CurrentTitle);

	//and show the video controller
	//InterActual.ShowControls();
}



/////////////////////////////////////////////////////
//This function is used to begin playback of a specific
//Chapter.
/////////////////////////////////////////////////////

function PlayChapter(chapter) {

	//make sure all variables are reset
	Reset_All();

	//define the behavior to be used by the events
	Template_Behavior = "ChapterPlay_Autostop";

	//save the chapter that was just called so you
	//can compare it later in the ChapterEvent
	top.vari.ChapHold = chapter;

	//initiate the video playback to the specified
	//chapter in the FeatureTitle (defined in the var.js)
	InterActual.PlayChapter(top.vari.FeatureTitle,chapter);

	//and show the video controller
	InterActual.ShowControls();
}

/////////////////////////////////////////////////////////
//This chapter functionis used for synchronized script
//to screen
////////////////////////////////////////////////////////

function PlayChapSync(chapter) {

	//make sure all variables are reset
	Reset_All();

	//define the behavior to be used by the events
	Template_Behavior = "ChapterPlay_Sync";

	//save the chapter that was just called so you
	//can compare it later in the ChapterEvent
	//this chapter is stored in top.vari.scriptChap

	//set the return destination if the user clicks stop
	returnURL = "index.htm";

	//initiate the video playback to the specified
	//chapter in the FeatureTitle (defined in the vari.htm)
	InterActual.PlayChapter(top.vari.FeatureTitle,chapter);

	//DO NOT show the video controller (playing in a window)
	//InterActual.ShowControls();

	//Disable the right click menus

	InterActual.ShowContextMenu(0x00000000);	//and disable the right-click menu.
}


/////////////////////////////////////////////////////////////
//this function is called when the user clicks the Full Screen button
////////////////////////////////////////////////////////////

function playFull(){
	if (InterActual.PlayState != 1)	{ 		//if video isn't playing,
		InterActual.Play();				//then start it playing from first play PGC
	}

			
	InterActual.FullScreen(1);					//play full screen
	InterActual.ShowContextMenu(0x00000000);	//and disable the right-click menu.
	

	//DO NOT show the video controller (playing in a window)
	//InterActual.HideControls();

	
	//subscribe to the mouse even to catch the mouse click
	//50 is the mouse event -- 1 activates the event monitoring
	InterActual.SubscribeToEvent(50,1);

	//set the fullscreen flag to 1

	fullScreen = 1;

}


/////////////////////////////////////////////////////////////
//Function to monitor the mouse click to return the video to window mode
////////////////////////////////////////////////////////////

//function for catching the mouse click when full screen
//
//function MouseEvent(mouseButton, x, y){
//	if ((mouseButton == 0) && (fullScreen == 1)){
   // Trigger event based on left mouse click
//	fullScreen = 0;				//set the flag to 0 to enable events
//	InterActual.SubscribeToEvent(50,0);  //unsubscribe to mouse event
//	InterActual.FullScreen(0);  //return to window playback
//	}
//}
	

//////////////////////////////////////////////////////////////
//
//Time Play Function
//
//This function is used to play a feature from a specific
//title and time
//
/////////////////////////////////////////////////////////////

function playTime(tTitle, tTime, url, platForm) {

top.vari.bmarkTitle=tTitle;

//make sure all variables are reset
Reset_All();




Template_Behavior = "pc_autostop";



	returnURL = url;

	var tmp=0;
	var sec=0;
	var min=0;
	var hrs=0;

	if ((top.vari.totalTime - tTime) < 10000){
		InterActual.PlayTitle(top.vari.bmarkTitle);
		InterActual.ShowContextMenu(0x00000000);	//and disable the right-click menu.
	}	
	else {	
	    tmp = tTime/1000;
       	sec = tmp % 60;
       	tmp = tmp - sec;
       	min = (tmp / 60) % 60;
       	tmp = tmp - min*60;
       	hrs = tmp / 3600;
		InterActual.PlayTime(tTitle,hrs,min,sec,0);
		InterActual.ShowContextMenu(0x00000000);	//and disable the right-click menu.
	}

}
	


function StateEvent(nState) {

top.vari.pState=nState;
//alert('what is my state= '+nState);

}



function FsEvent(nEvent){

	switch(Template_Behavior)
	{

	case "pc_autostop":

	if (nEvent == 0) 
				InterActual.HideControls();
			else if (nEvent == 1)
				InterActual.ShowControls();

	break;

	}	
}






/////////////////////////////////////////////////////
//This function is used to create a "private" version
//of the DomainEvent function.  The "dummy" version is
//defined in the IAlib.js file as part of the EventHandler
//function.  This private one overrides the dummy one.
//
//The value for ndomain is passed by the EventHandler 
//function in IAlib.js.  The EventHandler function gets 
//this value from value1 in the InterActual MediaEvent 
//at the bottom of the main HTML page.
//
//Because not all decoders on the computer handle events 
//the same way, a DomainEvent is also included to ensure 
//that we can detect when the specified portion of the 
//video is no longer playing.  Both a title and a chapter 
//will be part of the TitleDomain.  An easy backup is to 
//check when a domain event occurs, if we're no longer in 
//the TitleDomain.  This would happen if the user pressed 
//the Root or Title menu buttons.  This would also happen 
//if you were playing a segment of video that, when it 
//completed, would usually return to the Root Menu.
/////////////////////////////////////////////////////

function DomainEvent(ndomain) {

	//alert('in domain function');

	DecoderShutDown = 8;	//the event indicating decoder
							//is shutting down on the PC

	SettopShutDown = 7;	//indicates the settopbox issued a stop

//	SettopShutDown = 8;	//use only for testing content on a PC


	//TitleDomain is defined by ndomain is 5
	TitleDomain = 5;
	domain = ndomain;

	//Our private DomainEvent function is formed as 
	//a switch statement.  
	//If you had many different types of behaviors, 
	//the code for a DomainEvent function could become 
	//complex very quickly.  The use of the case statement 
	//allows you to segment your code and prevent different
	//behaviors from unintentionally affecting each other 
	//adversely.
	  
	switch(Template_Behavior)
	{
		
		case "Title_Trap":
			if (domain == DecoderShutDown) {
	//		alert('url= '+returnURL);
			top.topframe.location=top.vari.returnURL;
			}		
			break;
	
	
		//First, we make sure that the playing 
		//variable is true.  We want to make sure that 
		//the content has started playing before checking 
		//to see if it should stop.  If we didn't first 
		//make sure that the content had started to play, 
		//the other domain events that fire BEFORE the 
		//title or chapter plays would incorrectly interrupt 
		//video playback before it even had a chance to start.
		//Finally, if the playing variable is true and the 
		//domain event says the domain is no longer in the 
		//TitleDomain, then video playback is stopped.	

		case "ChapterPlay_Autostop":
			if (playing == true) {
				if (domain != TitleDomain) {
					InterActual.Stop();
				}
			}		
			break;


		//For Script to Screen, if the author does not place an extra chapter at
		//the end and it changes domain (to menu) or the user changes domain during
		//full screen play, the video will stop playing and reload script to screen


	case "ChapterPlay_Sync":
				if (playing == true) {
				if (domain != TitleDomain) {
							InterActual.Stop();
					top.topframe.location="index.htm";
				}
			}		
			break;


	
		case "TitlePlay_Autostop":
			if (playing == true) {
				if (domain != TitleDomain) {
					InterActual.Stop();
					top.topframe.location=returnURL;
				}
			}		
			break;	
		


	case "pc_autostop":
			if (domain == DecoderShutDown) {
//		top.vari.Playing=0;
//		top.vari.pState=-1;	
//		top.topframe.dvdvideo.location=returnURL;
 		self.location=returnURL;		
		}		
			break;

	case "monster_clip":
			if (domain == DecoderShutDown) {

 		top.topframe.location=returnURL;		
		}		
			break;



		case "bookmarking":
			
			if (domain == 5) {
				tSyncDomain = true;
				
			}
			if ((tSyncTitle == true)&&(tSyncDomain == true)){
				tSyncTitle = false;
				tSyncDomain = false;			
				playTime(top.vari.cTitle, top.vari.elapsedTime,returnURL);
			}
	
			break;





	case "settop_autostop":
			if (domain == SettopShutDown) {	
//			alert('url = '+returnURL);
			top.vari.Playing=0;
			top.vari.pState=-1;
		
			top.topframe.dvdvideo.location= '../settop/'+ returnURL;
		
			}		
			break;

		


	//The default case is defined so that if a behavior is not used 
		//by the DomainEvent, the DomainEvent does nothing.



	default:
			break;
	}
}

/////////////////////////////////////////////////////
//This function is used to create a "private" version
//of the TitleEvent function.  The "dummy" version is
//defined in the IAlib.js file as part of the EventHandler
//function.  This private one overrides the dummy one.
//
//The value for ntitle is passed by the EventHandler 
//function in IAlib.js.  The EventHandler function gets 
//this value from value1 in the InterActual MediaEvent 
//at the bottom of the main HTML page.
/////////////////////////////////////////////////////

function TitleEvent(ntitle) {

	title = ntitle;

	//Our private TitleEvent function is formed as 
	//a switch statement.  While we only have one 
	//video behavior, TitlePlay_Autostop, defined, 
	//if you had many different types of behaviors, 
	//the code for a TitleEvent function could become 
	//complex very quickly.  The use of the case statement 
	//allows you to segment your code and prevent different
	//behaviors from unintentionally affecting each other 
	//adversely.

	switch(Template_Behavior)
	{
		case "Title_Trap":

			//Check to see if video has hit any of the defined traps
			//If so, then load the URL associated with the title trap
			//Loading another HTML page destroys the video object
			//and automatically stops video playback

			//If the first title trap is detected
			if (title == top.vari.trapTitle) {

				//load the associated URL
				//top.topframe.location="index.htm";
				GoLink(1); //Craig David
				top.vari.trapPlaying=1;
			}

			//If the second title trap is detected
			else if (title == top.vari.trapTitle2) {
				
				GoLink(2); //Atlantic Records
				top.vari.trapPlaying=1;
			//	alert('URLtrap2= '+	URLhold);
				//load the associated URL
		    //	top.topframe.location=URLhold;	
			}

			break;

	case "TitlePlay_Autostop":

			//Check to see if video has started 
			//playing yet in the desired title.  
			//We want to prevent spurious events 
			//from stopping playback before it has 
			//had a chance to actually start playing. 
			//Since we initialized the playing variable
			//to false, the first title event we receive 
			//will check to see if we are playing the 
			//title we specified.

			if (playing == false) {
				if (title == CurrentTitle) {

					//Once we get there, the playing variable 
					//is set to true.

					setTimeout('playing = true;',3000);
				}
			}

			//A subsequent title event will skip the first 
			//"if" statement and execute the "else if" statement.  
			//This will check to see if we are no longer playing 
			//the title we specified.  If we're not, the playback 
			//has been completed, or the user has pressed some 
			//button on the controller that has taken us out of 
			//the title, and an InterActual.Stop command is issued.

			else if (title != CurrentTitle) {
				InterActual.Stop();
			}
			break;



	//note author needs to put a last 'fake' chapter at the end in order
	//for code to loop back to the beginning of the movie properly
	//if not, either a domain event or title even will occur and 
	//the content will reload the script to screen index.htm


	case "ChapterPlay_Sync":

		if (playing == false) {
				if ((title == top.vari.FeatureTitle) && (InterActual.ChapterNumber == top.vari.scriptChap)){

					//Once we get there, the playing variable 
					//is set to true.

					setTimeout('playing = true;',3000);
				}
			}

			//A subsequent title event will skip the first 
			//"if" statement and execute the "else if" statement.  
			//This will check to see if we are no longer playing 
			//the title we specified.  If we're not, the playback 
			//has been completed, or the user has pressed some 
			//button on the controller that has taken us out of 
			//the title, and an InterActual.Stop command is issued.

			else if (title != top.vari.FeatureTitle) {
				InterActual.Stop();
			}
			break;


	case "pc_autostop":

		if (playing == false) {
				if ((title == top.vari.FeatureTitle)){

					//Once we get there, the playing variable 
					//is set to true.
			
					setTimeout('playing = true;',3000);
				//	top.vari.Playing=1;

				
				}
			}

			break;

	case "monster_clip":
		if (playing == false) {
				if ((title == top.vari.FeatureTitle)){

					//Once we get there, the playing variable 
					//is set to true.
			
					setTimeout('playing = true;',3000);
				//	top.vari.Playing=1;

				
				}

}
			break;


		


	case "settop_autostop":

		if (playing == false) {
				if ((title == top.vari.FeatureTitle)){

					//Once we get there, the playing variable 
					//is set to true.

				setTimeout('playing = true;',3000);	
					top.vari.Playing=1;
				
				}
			}

		
			break;



		case "bookmarking":

			if (title == top.vari.FeatureTitle) tSyncTitle = true;		
			//alert("In title event and tSyncTitle = " + tSyncTitle+ ", " + "tSyncDomain = " + tSyncDomain);			
			if ((tSyncTitle == true)&&(tSyncDomain == true)){

			tSyncTitle = false;
			tSyncDomain = false;		
			playTime(top.vari.cTitle, top.vari.elapsedTime,returnURL);
			}
	
			break;




		//The default case is defined so that if a behavior is not used 
		//by the TitleEvent, the TitleEvent does nothing.

		default:
			break;
	}

}
/////////////////////////////////////////////////////
//This function is used to create a "private" version
//of the ChapterEvent function.  The "dummy" version is
//defined in the IAlib.js file as part of the EventHandler
//function.  This private one overrides the dummy one.
//
//The value for nchapter is passed by the EventHandler 
//function in IAlib.js.  The EventHandler function gets 
//this value from value1 in the InterActual MediaEvent 
//at the bottom of the main HTML page.
/////////////////////////////////////////////////////

function ChapterEvent(nchapter) {

	chapter = nchapter;

	//Our private ChapterEvent function is formed as 
	//a switch statement.  While we only have one 
	//video behavior, ChapterPlay_Autostop, defined, 
	//if you had many different types of behaviors, 
	//the code for a ChapterEvent function could become 
	//complex very quickly.  The use of the case statement 
	//allows you to segment your code and prevent different
	//behaviors from unintentionally affecting each other 
	//adversely.

	switch(Template_Behavior)
	{

		case "settop_autostop":
//			alert('chaphold=  '+	top.vari.ChapHold);
			top.vari.ChapHold=chapter;
			
//				alert('chaphold=  '+	top.vari.ChapHold);		
			break;



		case "ChapterPlay_Autostop":

			//Check to see if video has started 
			//playing yet in the desired title and chapter.  
			//We want to prevent spurious events 
			//from stopping playback before it has 
			//had a chance to actually start playing. 
			//Since we initialized the playing variable
			//to false, the first chapter event we receive 
			//will check to see if we are playing the 
			//chapter we specified.

			if (playing == false) {
				if ((InterActual.TitleNumber == top.vari.FeatureTitle) && 
				(chapter == CurrentChapter)) {

					//Once we get there, the playing variable 
					//is set to true.

					playing = true;
				}
			}

			//A subsequent chapter event will skip the first 
			//"if" statement and execute the "else if" statement.  
			//This will check to see if we are no longer playing 
			//the chapter we specified.  If we're not, the playback 
			//has been completed, or the user has pressed some 
			//button on the controller that has taken us out of 
			//the chapter or title, and an InterActual.Stop command 
			//is issued.

			else if (chapter != CurrentChapter) {
				InterActual.Stop();
			}			
			break;


	case "ChapterPlay_Sync":

			//Check to see if video has started 
			//playing yet in the desired title and chapter.  
			//We want to prevent spurious events 
			//from stopping playback before it has 
			//had a chance to actually start playing. 
			//Since we initialized the playing variable
			//to false, the first chapter event we receive 
			//will check to see if we are playing the 
			//chapter we specified.

			if (playing == false) {
				if ((InterActual.TitleNumber == top.vari.FeatureTitle) && 
				(chapter == InterActual.ChapterNumber)) {

					//Once we get there, the playing variable 
					//is set to true.

					playing = true;
				}
			}


	//note author needs to put a last 'fake' chapter at the end in order
	//for code to loop back to the beginning of the movie properly. If not
	//a domain or title event will reset back to a stop state and reload
	//index.htm for the script to screen

			if ((fullScreen == 0) && (playing == true)) {
				
					if (chapter != top.vari.scriptChap) {
						//if the next chapter is after the last chapter, then
						//start over at chapter 1.  Calling the clicked() function
						//will also perform a video call
					
						if (chapter > top.vari.LastChapter) {
							parent.chapternum.clicked(1);
						}

						//otherwise, you're just syncing up the screenplay
						//to the video and just need to call the updatePage() function
						else {	
						parent.chapternum.updatePage(chapter);
						}

					}
			}



		
		//The default case is defined so that if a behavior is not used 
		//by the ChapterEvent, the ChapterEvent does nothing.
	
		default:
			break;
	}
}


//////////////////////////////////////////////////////
//Time Event
/////////////////////////////////////////////////////
function TimeEvent(Elapsed,Total) {

if ((InterActual.Domain == 5) && (Template_Behavior != "bookmarking")) {

top.vari.cTitle=InterActual.TitleNumber;
top.vari.elapsedTime=Elapsed;
top.vari.totalTime=Total;

}

}



//
//   SCRIPTS FOR THE CONTROLLER
//


//  function for previous chapter
//
function con_skir()  {
	if (InterActual.PlayState != 0)	{ 		//if video is initialized

InterActual.PrevPG();
		}
}


//  function to reverse
//
function con_rew()   {
	if (InterActual.PlayState != 0)	{ 	//if video is initialized	
InterActual.Rewind(2);
		}
}


//  function to pause video playback
//
function con_pause()  {
	if (InterActual.PlayState != 0)	{ 	//if video is initialized
	InterActual.Pause();
		}
}


//  function to play 
//
function con_play()  {
	if (InterActual.PlayState != 0)	{ 	//if video is initialized	
InterActual.Play();
		}
}


//  function to fastforward
//
function con_ff()  {
	if (InterActual.PlayState != 0)	{ 	//if video is initialized	
InterActual.FastForward(2);
		}
}


//  function to skip chapter forward
//
function con_skif() {
	if (InterActual.PlayState != 0)	{ 	//if video is initialized	
InterActual.NextPG();
		}
}

//Menu function
function con_menu() {
	InterActual.Menu(2);
}






