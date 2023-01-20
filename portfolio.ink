~temp closeDoors = 0
~temp lookedRight = false
~temp readNote = false
~temp calledCops = false
~temp collectedNotes = 0
~temp yelled = false
~temp chased = false

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
{collectedNotes == 0 && readNote == false:
# IMAGE: Images/Note.png 
Creepy.
~collectedNotes++
*[Go back inside]
~readNote = true
->Inside
}
{collectedNotes == 1 && readNote == true:
# IMAGE: Images/NoteAfterCops.png 
Great. Another place to go.
*[Head to location]->GoToNewLocation
}

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
*[Chase suspicious person]->Stairwell
*[Pick up package]->PickUpBox
*[Go back inside]->Inside

===CallPolice===
# CLEAR 
# IMAGE: Images/callpolice.png
Hello, I'd like to report a suspicious package...
{lookedRight:
*[Describe suspicious person] ->PoliceVisit
}
{lookedRight == false:
*[Report suspicious package]->PoliceVisit
}
+[Nevermind. Open package] ->PickUpBox


===Inside===
# CLEAR 
# IMAGE: Images/LivingRoom.png

+[Call police]->CallPolice
 * <a href="/ResumeCurrent.html">Give up on this mystery</a>
 {readNote: 
 *[Head outside to meet behind the building]->MeetUp
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
You take off down the stairs, but the person runs faster than you. They run out the door into the alley. The door slams behind them. You'll never catch them.
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
*[Throw package away]
~closeDoors++
->BeginGame

===MeetUp===
# CLEAR 
# IMAGE: Images/BombSquad.png
{calledCops:
There's a note by the dumpster. 
*[Pick it up]->ReadNote
*[Go back home]->Inside
}
{calledCops == false: 
A strange person in a hoodie approaches.
*[Ask person if they left the package]->Inside
*[They look shady. Retreat back home.]->Inside
}

===GoToNewLocation===
# CLEAR 
# IMAGE: Images/BombSquad.png
->DONE
}
