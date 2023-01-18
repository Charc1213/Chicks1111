Would you like to play a game? 

 * [Yes]->BeginGame
 * <a href="/ResumeCurrent.html">No</a>
 -> DONE
 
 ===BeginGame===
 # CLEAR 
 # IMAGE: Images/Door.png 
 Knock Knock Knock....
 
 *[Open Door] ->OpenDoor
 *[<a href="/ResumeCurrent.html">Nevermind, I don't want to play</a>]
 
 ->DONE
 
 ===OpenDoor===
 # CLEAR 
 # IMAGE: Images/OpenDoor.png 
 What could that be?
 *[Pick up the box]->PickUpBox
 *[Push the box aside and close the door]->CloseDoorAgain
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
# IMAGE: Images/DoorClosing.gif 
Not today...
->DONE

===PeekOutside===
# CLEAR 
# IMAGE: Images/OpenDoor.png 
Hello....
->DONE

===ReadNote===
# CLEAR 
# IMAGE: Images/Note.png 
Creepy.
->DONE