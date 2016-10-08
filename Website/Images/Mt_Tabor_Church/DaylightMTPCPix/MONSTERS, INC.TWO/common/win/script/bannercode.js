isopen=true;

targetlink_Flexlink="http://redirect.interactual.com/redirect.asp?linkid=3015"; 


function goToggle()
{
	
	if(isopen)
	{
		top.topframe.mainframe.rows='*,14px';
		isopen=false;
	}
	else
	{
		top.topframe.mainframe.rows='*,80px';
		isopen=true;
	}

}

function bannerLoad()
{



	self.master.SetVariable("online_target", targetlink_test);
	if (banner==1 | top.vari.splash==false | top.vari.Playing==1)	{
		self.master.TgotoFrame("_root.mainmono.mono", 1);
	}
	if (top.vari.splash==true)	{
		self.master.TgotoFrame("_root.mainmono.mono", 0);
	}
	if (top.vari.pState==2)	{
		self.master.TgotoFrame("_root.mainmono.mono", 0);
	}
}







function goOnline()
{

	errreturn = top.topframe.dvdvideo.InterActual.NetConnect();
	if(errreturn == 0)
		top.topframe.bottom_fr.location=targetlink_Flexlink;
	else{	
		top.topframe.bottom_fr.banner.location='banner_error.htm';
	}
}



function goSkipB()
{
	if(top.vari.pState==1 & top.vari.splash==false){
	top.topframe.dvdvideo.con_skir();
	}

}

function goRW()
{
	if(top.vari.pState==1 & top.vari.splash==false){
	top.topframe.dvdvideo.con_rew();
	self.master.TgotoFrame("_root.mainmono.mono", 0);
	}
}

function goPlay()
{
	if (top.vari.splash==true)	{
	top.topframe.dvdvideo.location="dvdvideo.htm";
	}
	else if(top.vari.pState==1){ //state 1 is play
	}
	else if (top.vari.pState==3){
	top.topframe.dvdvideo.location="dvdvideo.htm";
	}
	else if (top.vari.pState==2){
	top.topframe.Playing=1;
	top.topframe.dvdvideo.con_play();
	}
	else if (top.vari.pState==4 | top.vari.pState==5){
	top.topframe.Playing=1;
	top.topframe.dvdvideo.con_play();
	}
}

function goPause()
{
	if (top.vari.splash==true)	{
	top.topframe.dvdvideo.location="dvdvideo.htm";
	}
	else if(top.vari.pState==1){ //state 1 is play
	top.topframe.dvdvideo.con_pause();
	}
	else if (top.vari.pState==3){
	top.topframe.dvdvideo.location="dvdvideo.htm";
	}
	else if (top.vari.pState==2){
	top.topframe.Playing=1;
	top.topframe.dvdvideo.con_play();
	}
}

function goFF()
{

	if(top.vari.pState==1 & top.vari.splash==false){
	top.topframe.dvdvideo.con_ff();
	//self.master.TgotoFrame("_root.mainmono.mono", 0);
	}
}

function goSkipF()
{
	if(top.vari.pState==1& top.vari.splash==false){
	top.topframe.dvdvideo.con_skif();
	}

}

function goFS()
{
	if(top.vari.pState==1 & top.vari.splash==false){
	top.topframe.dvdvideo.playFull();
	top.topframe.dvdvideo.InterActual.ShowControls();
	//self.master.TgotoFrame("_root.mainmono.mono", 1);
	}

}

function goMenu()
{
	if(top.vari.pState==1 & top.vari.splash==false){
	top.topframe.dvdvideo.con_menu();
}	}


function goDVD()
{
	self.location="banner.htm"

}

function goStop()
{
	top.topframe.dvdvideo.location="splash2.htm";	
}

