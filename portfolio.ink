~temp closeDoors = 0
~temp lookedRight = true

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
 ->DONE
 
 ===PickUpBox===
# CLEAR 
# IMAGE: Images/openbox.png 
What a big box for such a small note...
*[Read note]->ReadNote
->DONE

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
->DONE

===ReadNote===
# CLEAR 
# IMAGE: Images/Note.png 
Creepy.
*[Go back inside]->Inside
->DONE

===Left===
# CLEAR 
# IMAGE: Images/LeftLookFirst.gif 
*[Look Right]->Right
*[Pick up package]->PickUpBox
*[Go inside and close the door]->CloseDoorAgain
->DONE

===Right===
# CLEAR 
# IMAGE: Images/RightLookFirst.gif
Who's that?
*[Chase suspicious person]->Right
*[Pick up package]->PickUpBox
*[Go back inside]->Inside
->DONE

===CallPolice===
# CLEAR 
# IMAGE: Images/callpolice.png
Hello, I'd like to report a suspicious package...
{lookedRight:
*[Describe suspicious person] ->PoliceVisit
}
{lookedRight == false:
*[Report sucspicous package]->PoliceVisit
}

->DONE

===Inside===
# CLEAR 
# IMAGE: Images/LivingRoom.png
+[Call police]->CallPolice

->DONE

===PoliceVisit===
# CLEAR 
# IMAGE: Images/PoliceVisit.png
->DONE
