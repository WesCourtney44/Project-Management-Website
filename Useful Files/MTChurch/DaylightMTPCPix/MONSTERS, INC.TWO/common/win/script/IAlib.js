//InterActual JavaScript Library

//Required Events

var IAErrorEvent   	= new Function("value1","");
var TitleEvent   	= new Function("value1","");
var ChapterEvent		= new Function("value1","");
var PGCEvent		= new Function("value1","");
var TimeEvent		= new Function("value1,value2","");
var TrackTimeEvent   	= new Function("value1,value2,value3","");
var TitleGroupEvent	= new Function("value1","");
var TrackEvent		= new Function("value1","");
var SlideEvent		= new Function("value1","");
var AngleEvent		= new Function("value1","");
var StateEvent   	= new Function("value1","");
var SpeedEvent   	= new Function("value1","");
var UOPsEvent    	= new Function("value1","");
var DomainEvent  	= new Function("value1","");
var AudioEvent  		= new Function("value1","");
var SubpictureEvent  	= new Function("value1","");
var ParentalEvent	= new Function("value1,value2","");
var RegionEvent  	= new Function("value1","");
var EjectEvent  		= new Function("");
var InsertEvent  	= new Function("");
var GPRMEvent		= new Function("value1,value2","");
var InfoEvent  		= new Function("");
var RCButtonEvent  	= new Function("value1","");

//Advanced API Events

var MouseEvent   	= new Function("value1,value2,value3","");
var MenuButtonEvent  	= new Function("value1","");
var KaraokeEvent  	= new Function("value1","");
var StillEvent  		= new Function("value1","");
var CCTextEvent  	= new Function("value1","");

function EventHandler(index,value1,value2,value3)
{
	switch(index)
	{
		case 0://error event
			IAErrorEvent();
			break;	
		case 1://title event
			TitleEvent(value1);
			break;			
		case 2://chapter event
			ChapterEvent(value1);
			break;
		case 3://PGC event
			PGCEvent(value1);
			break;
 	case 4://time event
			TimeEvent(value1,value2);
			break;
		case 5://tracktime event
			TrackTimeEvent(value1);
			break;	
		case 6://TitleGroup event
			TitleGroupEvent(value1);
			break;
		case 7://Track event
			TrackEvent(value1);
			break;
		case 8://Slide event
			TrackEvent(value1);
			break;
		case 9://Angle event
			AngleEvent(value1);
			break;
		case 10://State event
			StateEvent(value1);
			break;
		case 11://Speed event
			SpeedEvent(value1);
			break;
		case 12://UOPs event
			UOPsEvent(value1);
			break;
		case 13://Domain Event
			DomainEvent(value1);
			break;
		case 14://audio Event
			AudioEvent(value1);
			break;
		case 15://Subpicture Event
			SubpictureEvent(value1);
			break;
		case 16://Parental Event
			ParentalEvent(value1);
			break;
		case 17://Region Event
			DomainEvent(value1);
			break;
		case 18://Eject Event
			EjectEvent();
			break;
		case 19://Insert Event
			InsertEvent();
			break;
		case 20://GPRM event
			GPRMEvent(value1);
			break;
		case 21://Info event
			InfoEvent();
			break;
		case 22://RCButton event
			RCButtonEvent();
			break;
		case 50://mouse event
			MouseEvent(value1,value2,value3);
			break;
		case 51://Menu Button event
			MenuButtonEvent(value1);
			break;
		case 52://Karaoke event
			KaraokeEvent(value1);
			break;
		case 53://Still event
			StillEvent(value1);
			break;
		case 54://CC Text event
			CCTextEvent(value1);
			break;

		case 100: //Full Screen Event
			FsEvent(value1);
			break;

		default:
			break;
	}

}
