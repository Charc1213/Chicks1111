~temp closeDoors = 0
~temp lookedRight = false
~temp noteRead = false
~temp calledCops = false
~temp collectedNotes = 0
~temp yelled = false
~temp chased = false
~temp beginConvo = false


Would you like to play a game? 

 * [Yes]->BeginGame
 * <a href="/ResumeCurrent.html">No</a>
 -> DONE
 
 ===BeginGame===
 # CLEAR 
 # IMAGE: Images/Door.png 
 Knock Knock Knock....
 {closeDoors <2:
 +[Open Door] ->OpenDoor
 }
 {closeDoors>1:
 +[Open Door] ->OpenDoor
 +[Call police]->CallPolice
 }
 +[<a href="/ResumeCurrent.html">Nevermind, I don't want to play</a>]
 
 ->DONE
 
 ===OpenDoor===
 # CLEAR 
 # IMAGE: Images/OpenDoor.png 
 What could that be?
 *[Pick up the box]->PickUpBox
 *[Close the door]->CloseDoorAgain
 *[Peek outside to see who left it]->PeekOutside
 
 ===PickUpBox===
# CLEAR 
# IMAGE: Images/openbox.png 
What a big box for such a small note...
*[Read note]->ReadNote
*[Put box down and go back inside]->Inside

===CloseDoorAgain===
# CLEAR 
# IMAGE: Images/CloseDoor.gif 
~closeDoors++
Not today...
*[Go back inside]->BeginGame
+[Call police to report suspicious package]->CallPolice
->DONE

===PeekOutside===
# CLEAR 
# IMAGE: Images/OpenDoor.png 
*[Look left]->Left
*[Look right]->Right

===ReadNote===
# CLEAR 
{collectedNotes == 0 && noteRead == false:
# IMAGE: Images/Note.png 
Creepy.
~collectedNotes++
*[Go back inside]
~noteRead = true
->Inside
}
{collectedNotes == 1 && noteRead == true:
# IMAGE: Images/NoteAfterCops.png 
Great. Another place to go.
*[Head to location]->GoToPipeworks
}
 +[<a href="/ResumeCurrent.html">Nevermind, I don't want to play</a>]
 ->DONE

===Left===
# CLEAR 
# IMAGE: Images/LeftLookFirst.gif 
*[Look Right]->Right
*[Pick up package]->PickUpBox
*[Go inside and close the door]->Inside

===Right===
# CLEAR 
# IMAGE: Images/RightLookFirst.gif
Who's that?
~lookedRight = true
*[Chase suspicious person]->Stairwell
*[Pick up package]->PickUpBox
*[Go back inside]->Inside

===CallPolice===
# CLEAR 
# IMAGE: Images/callpolice.png
{noteRead == false:
{lookedRight == true:
*[Describe suspicious person] ->PoliceVisit
*[Report suspicious package]->PoliceVisit
+[Nevermind. Open package] ->PickUpBox
}
{lookedRight == false:
*[Report suspicious package]->PoliceVisit
+[Nevermind. Open package] ->PickUpBox
}
}
{noteRead == true:
{lookedRight == true:
*[Describe suspicious person] ->PoliceVisit
*[Report suspicious package]->PoliceVisit
}
{lookedRight == false:
*[Report suspicious package]->PoliceVisit
}
}



===Inside===
# CLEAR 
# IMAGE: Images/LivingRoom.png
{noteRead == false:
+[Call police]->CallPolice
+[Nevermind. Open package] ->PickUpBox
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
 }
 {noteRead == true: 
 +[Call police]->CallPolice
 *[Head outside to meet behind the building]->MeetUp
  *[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
 }
 ->DONE

===Stairwell===
{yelled == false && chased == false:
# CLEAR
# IMAGE: Images/Stairwell.png
*[Yell "Hey!"]
The person doesn't turn around and continues to run down the stairs.
~yelled = true
->Stairwell
*[Run after suspicious person]
You take off down the stairs, but the person runs faster than you. They run out the door into the alley. The door slams behind them. You'll never catch them.
~chased = true
->Stairwell
*[Go back inside]->Inside
}
{yelled == true && chased == false:
# IMAGE: Images/Stairwell2.png
*[Run after suspicious person]
You take off down the stairs, but the person runs faster than you. 
~chased = true
->Stairwell
*[Go back inside]->Inside
}
{yelled == false && chased == true:
# IMAGE: Images/Stairwell3.png
*[Yell "Hey!"]
The person doesn't turn around and continues to run down the stairs.
~yelled = true
->Stairwell
*[Go back inside]->Inside
}
{yelled == true && chased == true:
# CLEAR
# IMAGE: Images/Stairwell3.png
They run out the door into the alley. The door slams behind them. You'll never catch them.
*[Go back inside]->Inside
}
===PoliceVisit===
# CLEAR 
# IMAGE: Images/PoliceVisit.png
~calledCops=true
{lookedRight:
*[Tell the policeman about the suspicious person running towards the stairwell] ->BombSquad
}
{lookedRight == false:
*[Discuss the suspicious package]->BombSquad
}

===BombSquad===
# CLEAR 
# IMAGE: Images/BombSquad.png
All clear. The package is safe.
*[Pick up package]->PickUpBox
*[Throw package away]->Inside
~closeDoors++
->BeginGame

===MeetUp===
# CLEAR 
{calledCops:
# IMAGE: Images/Alley.png
There's a note across from the dumpster. 
*[Pick it up]->ReadNote
*[Go back home]->Inside
}
{calledCops == false: 
# IMAGE: Images/hoodedfigurealley.png
A strange person in a hoodie approaches.
*[Ask person if they left the package]
Yes.->HoodedConvo
*[They look shady. Retreat back home.]->Inside
}
==HoodedConvo==
{beginConvo == false:
#CLEAR
# IMAGE: Images/hoodedfigurealley.png
*[Who are you?]
I heard you're looking for somebody...
~beginConvo = true
->HoodedConvo
*[Why?]
I heard you're looking for somebody...
~beginConvo = true
->HoodedConvo
*[Can I see your face?]
I heard you're looking for somebody...
~beginConvo = true
->HoodedConvo
}
{beginConvo == true:
# IMAGE: Images/hoodedfigurealley.png
*[I am]
I know who you're looking for, but are you ready for her? That's the real question...
->HoodedFigureRun
*[Where did you hear that?]
Doesn't matter. I know you're trying to find her. Lots of people are trying to find her.
->HoodedFigureRun
}

===HoodedFigureRun===
# CLEAR
# IMAGE: Images/smokealley.gif
Wait! ->AlleyNote

 
 ===AlleyNote===
 # CLEAR
# IMAGE: Images/AlleyNoteAfterSmoke.png
The smoke clears leaving a note on the ground.You pick it up and read it.
*[Go to Pipeworks]->GoToPipeworks
*[Go back inside]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
->DONE

===GoToPipeworks===
# CLEAR 
# IMAGE: Images/BombSquad.png
->DONE
}
