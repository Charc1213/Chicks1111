~temp closeDoors = 0
~temp lookedRight = false
~temp noteRead = false
~temp calledCops = false
~temp collectedNotes = 0
~temp firstChoice = false
~temp secondChoice = false
~temp beginConvo = false
~temp Day = 1


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
{Day == 1:
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
 }
 {Day == 2:
 After a good nights sleep, you wake up ready for the day.
 *[Head to event]->SchoolEvent
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
Wow, she has a lot of skills. Looks like she might be at the party on 555 Success St.
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
*[Find out where school is]->SchoolEvent
}

===Drink===
# CLEAR 
# IMAGE: Images/Drink.png
Here you go!
*[Drink up]->Bartender
*[Nevermind]->Bartender

===SchoolEvent===
# CLEAR 
# IMAGE: Images/School.png
{Day == 1:
You arrive to find signs leading to a school play. You follow the signs to the auditorium where small children are performing.
*[Watch the play]->Play
*[Wait outside the auditorium]->WaitOutside
}
{Day == 2:
You go to the school and see a lot of people. None of them look like Chantelle. You ask a few people if they know where she is. Somebody tells you that she is helping some students create resumes and portfolios inside.
*[Go inside] ->ComputerLab
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE
}

===Play===
# CLEAR 
# IMAGE: Images/Play.gif
~firstChoice = false
~secondChoice = false
You sit down and enjoy the play. It lasts for about 45 minutes. At the end, the audience stands up and claps. 
*[Yell out Chantelle]
~firstChoice = true
->SchoolChantelleInfo
*[Ask people around you if they know where Chantelle is]
~secondChoice = true
->SchoolChantelleInfo
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE

===WaitOutside===
# CLEAR 
# IMAGE: Images/SchoolHallway.png
~firstChoice = false
~secondChoice = false
You paitently wait for a bit. People begin to head out in large groups. You look for Chantelle, but you don't seeing her.
*[Yell out Chantelle]
~firstChoice = true
->SchoolChantelleInfo
*[Ask people around you if they know where Chantelle is]
~secondChoice = true
->SchoolChantelleInfo
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE

===SchoolChantelleInfo===
# CLEAR
{firstChoice == true:
# IMAGE: Images/Audience.png
You yell out "Chantelle", but nobody answers. A few people did look back at you though. Maybe they know who Chantelle is.
*[Ask people around you if they know where Chantelle is]
~secondChoice=true
->SchoolChantelleInfo
}
{secondChoice == true:
# IMAGE: Images/Crowd.png
You ask the people in the crowd until somebody says that they know Chantelle. They tell you that she left with her family, but that she enjoys helping out with school events. They tell you that she will be at a school event the following day. They jot down the information for you before they walk away.
*[Head home for the night]
~Day = 2
->Inside
}

===ComputerLab===
# CLEAR 
# IMAGE: Images/ComputerLab.png
~firstChoice = false
~secondChoice = false
You walk to the computer lab and see some students with what appears to be a teacher.
*[Ask students about Chantelle]
~firstChoice = true
->ComputerLabInfo
*[Ask teacher about Chantelle]
~secondChoice = true
->ComputerLabInfo
*[ <a href="/ResumeCurrent.html">I don't want to play this game</a>]->DONE

===ComputerLabInfo===
# CLEAR 
# IMAGE: Images/ComputerLab.png
{firstChoice == true:
The students show you some of the work Chantelle helped them with. She did a great job highlighting the skills and talents of each student. 
*[Ask where Chantelle is]->Clearance
*[Ask teacher about Chantelle]
~secondChoice = true
->ComputerLabInfo
}
{secondChoice == true:
The teacher introduces himself as Mr. F. He tells you that Chantelle is very personable and is always looking for ways to help others.
*[Ask Mr.F if he knows where Chantelle is] ->Clearance
}
===Clearance===
# CLEAR 
# IMAGE: Images/Classified.gif
They tell you that the information is classified, but they tell you that they know she is supposed to catch up with her old team from Bombilate games.
*[Ask about Bombilate Games]->BombilateGames

===BombilateGames===
# CLEAR 
# IMAGE: Images/QuantumCheeks.png
*[Open article about Bombilate Games]
 # LINKOPEN: https:\/\/www.brianaaea.com/sacramento-developer-collective/2017/10/26/indie-developer-spotlight-chantelle-cole-and-bombilate-games
 ->BombilateGames
*[Download Quantum Cheeks]
# LINKOPEN: https:\/\/m.apkpure.com/quantum-cheeks/com.bombilate.QuantumCheeks
 ->BombilateGames
 *[Head Home] 
 ~Day = 3
 ->Inside
 ->Inside


