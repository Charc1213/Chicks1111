~temp closeDoors = 0
~temp lookedRight = false
~temp noteRead = false
~temp calledCops = false
~temp collectedNotes = 0
~temp firstChoice = false
~temp secondChoice = false
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
{calledCops == false:
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
}
{calledCops == true:
We've already visited. We will let you know if we have any more information.
*[Hang up]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
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
{firstChoice == false && secondChoice == false:
# CLEAR
# IMAGE: Images/Stairwell.png
*[Yell "Hey!"]
The person doesn't turn around and continues to run down the stairs.
~firstChoice = true
->Stairwell
*[Run after suspicious person]
You take off down the stairs, but the person runs faster than you. They run out the door into the alley. The door slams behind them. You'll never catch them.
~secondChoice = true
->Stairwell
*[Go back inside]->Inside
}
{firstChoice == true && secondChoice == false:
# IMAGE: Images/Stairwell2.png
*[Run after suspicious person]
You take off down the stairs, but the person runs faster than you. 
~secondChoice = true
->Stairwell
*[Go back inside]->Inside
}
{firstChoice == false && secondChoice == true:
# IMAGE: Images/Stairwell3.png
*[Yell "Hey!"]
The person doesn't turn around and continues to run down the stairs.
~firstChoice = true
->Stairwell
*[Go back inside]->Inside
}
{firstChoice == true && secondChoice == true:
# CLEAR
# IMAGE: Images/Stairwell3.png
They run out the door into the alley. The door slams behind them. You'll never catch them.
*[Go back inside]->Inside
}
===PoliceVisit===
# CLEAR 
# IMAGE: Images/PoliceVisit.png
~calledCops=true
{noteRead == false:
{lookedRight:
*[Tell the policeman about the suspicious person running towards the stairwell] ->BombSquad
}
{lookedRight == false:
*[Discuss the suspicious package]->BombSquad
}
}
{noteRead == true:
{lookedRight:
*[Tell the policeman about the suspicious person running towards the stairwell]
Thanks for the information. We'll file a report and get back to you.
->Inside
}
{lookedRight == false:
*[Discuss the suspicious package]
We can take the package in for evidence. We'll get back to you if we find anything.
->Inside
}
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
~firstChoice = false
~secondChoice = false
*[I am]
~firstChoice = true
->HoodedFigureRun
*[Where did you hear that?]
~secondChoice = true
->HoodedFigureRun
}

===HoodedFigureRun===
# CLEAR 
# IMAGE: Images/hoodedfigurealley.png
{firstChoice == true:
I know who you're looking for, but are you ready for her? That's the real question...
}
{secondChoice == true:
Doesn't matter. I know you're trying to find her. Lots of people are trying to find her.
}
*[Ask what they mean]->SmokeAlley

===SmokeAlley===
# CLEAR 
 # IMAGE: Images/smokealley.gif
You'll understand soon.
*[Swipe at smoke]->AlleyNote
*[Cough]->AlleyNote

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
# IMAGE: Images/lobby.png
~firstChoice = false
~secondChoice = false
There's nobody here. There is an envelope on the desk though, with your name on it.
*[Pick up letter]
~firstChoice = true
->ReadLetter
*[Look around]
~secondChoice = true
->LookAround
*[Go back home]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
->DONE

===ReadLetter===
# CLEAR 
# IMAGE: Images/LetterReading.png
Looks like she might be at the party on 555 Success St.
{secondChoice == true:
*[Head to party]->Party
*[Go back home]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
}
{secondChoice == false:
*[Look around]
~secondChoice = true
->LookAround
*[Head to party]->Party
*[Go back home]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE

->LookAround
}


===LookAround===
# CLEAR 
# IMAGE: Images/Award.png
Interesting. Looks like she won an award for most creative use of theme. That's pretty cool.
{firstChoice == false:
*[Pick up letter]
~firstChoice = true
->ReadLetter
}
*[Head to party]->Party
*[Go back home]->Inside
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE


===Party===
# CLEAR 
# IMAGE: Images/Party.png
~firstChoice = false
~secondChoice = false
This seems like the place.
*[Approach bartender]
~firstChoice = true
->Bartender
*[Approach patrons]
~secondChoice = true
->Patrons
{secondChoice == true:
*[Go to school event]->SchoolEvent
}

===Bartender===
# CLEAR 
# IMAGE: Images/Bartender.png
{secondChoice == false:
*[Ask about Chantelle]->ChantelleInfo
*[Order a drink]->Drink
*[Approach patrons]
~secondChoice = true
->Patrons
}
{secondChoice == true:
*[Ask about Chantelle]
~secondChoice = false
->ChantelleInfo
*[Order a drink]->Drink
}

===Patrons===
# CLEAR 
# IMAGE: Images/Patrons.png
{firstChoice == false:
*[Ask about Chantelle]->ChantelleInfo
*[Approach bartender]
~firstChoice = true
->Bartender
}
{firstChoice == true:
*[Ask about Chantelle]
~firstChoice = false
->ChantelleInfo
}

===ChantelleInfo===
# CLEAR 
# IMAGE: Images/Party.png
{firstChoice == true:
She just left. It was nice to see her though. She spends a lot of time working and enjoying her family.
*[Find out more information]->Party
}
{secondChoice == true:
She was here. I think she left though. She had a school thing to go to for one of her kids. I don't know how she succeeds while having 5 kids! I think the kids help her as a designer though. She has a very diverse family that helps her really incorporate inclusivity in her designs.
*[Find out more information]->Party
*[Find out where school is]->Party
}

===Drink===
# CLEAR 
# IMAGE: Images/Drink.png
Here you go!
*[Drink up]->Bartender
*[Nevermind]->Bartender

===SchoolEvent===
# CLEAR 
# IMAGE: Images/Play.png

You arrive to find signs leading to a school play. You follow the signs to the auditorium where small children are performing.
*[Watch the play]->Play
*[Wait outside the auditorium]->WaitOutside

===Play===
# CLEAR 
# IMAGE: Images/Play.png

===WaitOutside===
# CLEAR 
# IMAGE: Images/Play.png
