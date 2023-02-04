var storyContent = ﻿{"inkVersion":20,"root":[["^Would you like to play a game?","\n","ev","str","^Yes","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^No","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":[{"->":"BeginGame"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"BeginGame":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Door.png"},"^Knock Knock Knock....","\n","ev","str","^Open Door","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"OpenDoor"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"OpenDoor":[[{"#":"CLEAR"},{"#":"IMAGE: Images/OpenDoor.png"},"^What could that be?","\n","ev","str","^Pick up the box","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Call police","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Close the door","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Peek outside to see who left it","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":[{"->":"PickUpBox"},"\n",{"#f":5}],"c-1":[{"->":"CallPolice"},"\n",{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}],"c-3":[{"->":"PeekOutside"},"\n",{"#f":5}]}],{"#f":1}],"PickUpBox":[[{"#":"CLEAR"},{"#":"IMAGE: Images/openbox.png"},"^What a big box for such a small note...","\n","ev","str","^Read note","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Put box down and go back inside","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"ReadNote"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}]}],{"#f":1}],"PeekOutside":[[{"#":"CLEAR"},{"#":"IMAGE: Images/OpenDoor.png"},"ev","str","^Look left","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Look right","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"Left"},"\n",{"#f":5}],"c-1":[{"->":"Right"},"\n",{"#f":5}]}],{"#f":1}],"ReadNote":[[{"#":"CLEAR"},"ev",{"VAR?":"collectedNotes"},0,"==",{"VAR?":"noteRead"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/Note.png"},"^\" I heard you're trying to find somebody... <br> Meet me behind the building in 30 minutes.\" <br> Creepy.","\n","ev",{"VAR?":"collectedNotes"},1,"+",{"VAR=":"collectedNotes","re":true},"/ev","ev","str","^Go back inside","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.11"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"noteRead","re":true},{"->":"Inside"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"collectedNotes"},1,"==",{"VAR?":"noteRead"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/NoteAfterCops.png"},"^\"You called the police? <br> New Plan. <br> Go to Pipewoks. There will be a note for you there.\" <br> Great. Another place to go.","\n","ev","str","^Head to location","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.23"},{"c-0":[{"->":"GoToPipeworks"},"\n",{"#f":5}]}]}],"nop","\n","ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"Left":[[{"#":"CLEAR"},{"#":"IMAGE: Images/LeftLookFirst.gif"},"ev","str","^Look Right","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Pick up package","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go inside and close the door","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":[{"->":"Right"},"\n",{"#f":5}],"c-1":[{"->":"PickUpBox"},"\n",{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}]}],{"#f":1}],"Right":[[{"#":"CLEAR"},{"#":"IMAGE: Images/RightLookFirst.gif"},"^Who's that?","\n","ev",true,"/ev",{"VAR=":"lookedRight","re":true},"ev","str","^Chase suspicious person","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Pick up package","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go back inside","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":[{"->":"Stairwell"},"\n",{"#f":5}],"c-1":[{"->":"PickUpBox"},"\n",{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}]}],{"#f":1}],"CallPolice":[{"#":"CLEAR"},{"#":"IMAGE: Images/callpolice.png"},"ev",{"VAR?":"calledCops"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"noteRead"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"lookedRight"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Describe suspicious person","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Report suspicious package","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Nevermind. Open package","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.7"},{"c-0":["^ ",{"->":"PoliceVisit"},"\n",{"#f":5}],"c-1":[{"->":"PoliceVisit"},"\n",{"#f":5}],"c-2":["^ ",{"->":"PickUpBox"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"lookedRight"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Report suspicious package","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Nevermind. Open package","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.15"},{"c-0":[{"->":"PoliceVisit"},"\n",{"#f":5}],"c-1":["^ ",{"->":"PickUpBox"},"\n",{"#f":5}]}]}],"nop","\n",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"noteRead"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"lookedRight"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Describe suspicious person","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Report suspicious package","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->":"PoliceVisit"},"\n",{"#f":5}],"c-1":[{"->":"PoliceVisit"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"lookedRight"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Report suspicious package","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.15"},{"c-0":[{"->":"PoliceVisit"},"\n",{"#f":5}]}]}],"nop","\n",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"calledCops"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^We've already visited. We will let you know if we have any more information.","\n","ev","str","^Hang up","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.16"},{"c-0":[{"->":"Inside"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n",{"#f":1}],"Inside":[{"#":"CLEAR"},{"#":"IMAGE: Images/LivingRoom.png"},"ev",{"VAR?":"Day"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"noteRead"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Call police","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Nevermind. Open package","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.7"},{"c-0":[{"->":"CallPolice"},"\n",{"#f":5}],"c-1":["^ ",{"->":"PickUpBox"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"noteRead"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Call police","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Head outside to meet behind the building","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.15"},{"c-0":[{"->":"CallPolice"},"\n",{"#f":5}],"c-1":[{"->":"MeetUp"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n",{"->":"Inside.8"},null]}],"nop","\n","ev",{"VAR?":"Day"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^After a good nights sleep, you wake up ready for the day.","\n","ev","str","^Head to event","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"->":"Inside.16"},{"c-0":[{"->":"SchoolEvent"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"Day"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Check phone notifications","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^ <a href=\"/ResumeCurrent.html\">I don't want to play this game</a>","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Google \"Chantelle + Pipeworks\"","/str","/ev",{"*":".^.c-2","flg":20},{"->":"Inside.24"},{"c-0":[{"->":"Email"},"\n",{"#f":5}],"c-1":["done","\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://www.linkedin.com/in/chantellethegamedesigner/"},{"->":"Inside"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"Stairwell":["ev",{"VAR?":"firstChoice"},false,"==",{"VAR?":"secondChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/Stairwell.png"},"ev","str","^Yell \"Hey!\"","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Run after suspicious person","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go back inside","/str","/ev",{"*":".^.c-2","flg":20},{"->":".^.^.^.10"},{"c-0":["\n","^The person doesn't turn around and continues to run down the stairs.","\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-1":["\n","^You take off down the stairs, but the person runs faster than you. They run out the door into the alley. The door slams behind them. You'll never catch them.","\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"firstChoice"},true,"==",{"VAR?":"secondChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/Stairwell2.png"},"ev","str","^Run after suspicious person","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back inside","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.22"},{"c-0":["\n","^You take off down the stairs, but the person runs faster than you.","\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"firstChoice"},false,"==",{"VAR?":"secondChoice"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/Stairwell3.png"},"ev","str","^Yell \"Hey!\"","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back inside","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.34"},{"c-0":["\n","^The person doesn't turn around and continues to run down the stairs.","\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"firstChoice"},true,"==",{"VAR?":"secondChoice"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/Stairwell3.png"},"^They run out the door into the alley. The door slams behind them. You'll never catch them.","\n","ev","str","^Go back inside","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.46"},{"c-0":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"PoliceVisit":[{"#":"CLEAR"},{"#":"IMAGE: Images/PoliceVisit.png"},"ev",true,"/ev",{"VAR=":"calledCops","re":true},"ev",{"VAR?":"noteRead"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"lookedRight"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Tell the policeman about the suspicious person running towards the stairwell","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.5"},{"c-0":["^ ",{"->":"BombSquad"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"lookedRight"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Discuss the suspicious package","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.13"},{"c-0":[{"->":"BombSquad"},"\n",{"#f":5}]}]}],"nop","\n",{"->":".^.^.^.12"},null]}],"nop","\n","ev",{"VAR?":"noteRead"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"lookedRight"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Tell the policeman about the suspicious person running towards the stairwell","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.5"},{"c-0":["\n","^Thanks for the information. We'll file a report and get back to you.","\n",{"->":"Inside"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"lookedRight"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Discuss the suspicious package","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.13"},{"c-0":["\n","^We can take the package in for evidence. We'll get back to you if we find anything.","\n",{"->":"Inside"},{"#f":5}]}]}],"nop","\n",{"->":".^.^.^.20"},null]}],"nop","\n",{"#f":1}],"BombSquad":[[{"#":"CLEAR"},{"#":"IMAGE: Images/BombSquad.png"},"^All clear. The package is safe.","\n","ev","str","^Pick up package","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Throw package away","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"PickUpBox"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"->":"BeginGame"},{"#f":5}]}],{"#f":1}],"MeetUp":[{"#":"CLEAR"},"ev",{"VAR?":"calledCops"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/Alley.png"},"^There's a note across from the dumpster.","\n","ev","str","^Pick it up","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back home","/str","/ev",{"*":".^.c-1","flg":20},{"->":"MeetUp.5"},{"c-0":[{"->":"ReadNote"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"calledCops"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/hoodedfigurealley.png"},"^A strange person in a hoodie approaches.","\n","ev","str","^Ask person if they left the package","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^They look shady. Retreat back home.","/str","/ev",{"*":".^.c-1","flg":20},{"->":"MeetUp.13"},{"c-0":["\n","^Yes. ",{"->":"HoodedConvo"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"HoodedConvo":["ev",{"VAR?":"beginConvo"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/hoodedfigurealley.png"},"ev","str","^Who are you?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Why?","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Can I see your face?","/str","/ev",{"*":".^.c-2","flg":20},{"->":".^.^.^.6"},{"c-0":["\n","^I heard you're looking for somebody...","\n","ev",true,"/ev",{"VAR=":"beginConvo","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-1":["\n","^I heard you're looking for somebody...","\n","ev",true,"/ev",{"VAR=":"beginConvo","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-2":["\n","^I heard you're looking for somebody...","\n","ev",true,"/ev",{"VAR=":"beginConvo","re":true},{"->":".^.^.^.^"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"beginConvo"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/hoodedfigurealley.png"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"ev","str","^I am","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Where did you hear that?","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.14"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"HoodedFigureRun"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"HoodedFigureRun"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"HoodedFigureRun":[[{"#":"CLEAR"},{"#":"IMAGE: Images/hoodedfigurealley.png"},"ev",{"VAR?":"firstChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^I know who you're looking for, but are you ready for her? That's the real question...","\n",{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"secondChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Doesn't matter. I know you're trying to find her. Lots of people are trying to find her.","\n",{"->":".^.^.^.16"},null]}],"nop","\n","ev","str","^Ask what they mean","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"SmokeAlley"},"\n",{"#f":5}]}],{"#f":1}],"SmokeAlley":[[{"#":"CLEAR"},{"#":"IMAGE: Images/smokealley.gif"},"^You'll understand soon.","\n","ev","str","^Swipe at smoke","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Cough","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"AlleyNote"},"\n",{"#f":5}],"c-1":[{"->":"AlleyNote"},"\n",{"#f":5}]}],{"#f":1}],"AlleyNote":[[{"#":"CLEAR"},{"#":"IMAGE: Images/AlleyNoteAfterSmoke.png"},"^The smoke clears leaving a note on the ground.You pick it up and read it.","\n","^<br> \"She works at Pipeworks. Been there for about 2 years. I hear she's a creative designer.\"","\n","ev","str","^Go to Pipeworks","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back inside","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":[{"->":"GoToPipeworks"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done","done",{"#f":5}]}],{"#f":1}],"GoToPipeworks":[{"#":"CLEAR"},"ev",{"VAR?":"Day"},4,"!=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/lobby.png"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"^There's nobody here. There is an envelope on the desk though, with your name on it.","\n","ev","str","^Pick up letter","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Look around","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go back home","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-3","flg":4},{"->":".^.^.^.7"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"ReadLetter"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"LookAround"},{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}],"c-3":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"Day"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/PipeworksBuilding.png"},"^Hmmm, it's locked.","\n","ev","str","^See if she's at the school","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.15"},{"c-0":[{"->":"SchoolEvent"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n",{"#f":1}],"ReadLetter":[{"#":"CLEAR"},{"#":"IMAGE: Images/LetterReading.png"},"^\"List of employee skills: <br> Technical Design: Ink, JSON, C#, html, javascirpt <br> Software: Atlassian (Jira/Confluence), Adobe Suite (Illustrator, Photoshop, ZD, Fresca), Source Control (Perforce, GitHub), Mockups/FlowCharts(Draw.IO, Inkscape, Visio), Code Editors(Visual Studio Code) <br> Project Completion Party: <br> 555 Success St\" <br>","\n","^Wow, she has a lot of skills. Looks like she might be at the party on 555 Success St.","\n","ev",{"VAR?":"secondChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Head to party","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back home","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.12"},{"c-0":[{"->":"Party"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"secondChoice"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Look around","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Head to party","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go back home","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-3","flg":4},{"->":".^.^.^.20"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"LookAround"},{"#f":5}],"c-1":[{"->":"Party"},"\n",{"#f":5}],"c-2":[{"->":"Inside"},"\n",{"#f":5}],"c-3":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},{"->":"LookAround"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"LookAround":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Award.png"},"^Interesting. Looks like she won an award for most creative use of theme. That's pretty cool.","\n","ev",{"VAR?":"firstChoice"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Pick up letter","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.10"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"ReadLetter"},{"#f":5}]}]}],"nop","\n","ev","str","^Head to party","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back home","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":[{"->":"Party"},"\n",{"#f":5}],"c-1":[{"->":"Inside"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"Party":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Party.png"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"^This seems like the place.","\n","ev","str","^Approach bartender","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Approach patrons","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"Bartender"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"Patrons"},"ev",{"VAR?":"secondChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Go to school event","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.12"},{"c-0":[{"->":"SchoolEvent"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":5}]}],{"#f":1}],"Bartender":[{"#":"CLEAR"},{"#":"IMAGE: Images/Bartender.png"},"ev",{"VAR?":"secondChoice"},false,"==",{"VAR?":"firstChoice"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Ask about Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Order a drink","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Approach patrons","/str","/ev",{"*":".^.c-2","flg":20},{"->":".^.^.^.12"},{"c-0":[{"->":"ChantelleInfo"},"\n",{"#f":5}],"c-1":[{"->":"Drink"},"\n",{"#f":5}],"c-2":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"Patrons"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"secondChoice"},true,"==",{"VAR?":"firstChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Ask about Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Order a drink","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.24"},{"c-0":["\n",{"->":"ChantelleInfo"},{"#f":5}],"c-1":[{"->":"Drink"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"Patrons":[{"#":"CLEAR"},{"#":"IMAGE: Images/Patrons.png"},"ev",{"VAR?":"firstChoice"},false,"==",{"VAR?":"secondChoice"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Ask about Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Approach bartender","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.12"},{"c-0":[{"->":"ChantelleInfo"},"\n",{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"Bartender"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"firstChoice"},true,"==",{"VAR?":"secondChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Ask about Chantelle","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.24"},{"c-0":["\n","ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"ChantelleInfo"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"ChantelleInfo":[{"#":"CLEAR"},{"#":"IMAGE: Images/Party.png"},"ev",{"VAR?":"firstChoice"},true,"==",{"VAR?":"secondChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","^She just left. It was nice to see her though. She spends a lot of time working and enjoying her family.","\n","ev","str","^Find out more information","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.12"},{"c-0":[{"->":"Patrons"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"secondChoice"},true,"==",{"VAR?":"firstChoice"},false,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","^She was here. I think she left though. She had a school thing to go to for one of her kids. I don't know how she succeeds while having 5 kids! I think the kids help her as a designer though. She has a very diverse family that helps her really incorporate inclusivity in her designs.","\n","ev","str","^Find out more information","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Find out where school is","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.24"},{"c-0":[{"->":"Bartender"},"\n",{"#f":5}],"c-1":[{"->":"SchoolEvent"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"firstChoice"},true,"==",{"VAR?":"secondChoice"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Find out where school is","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.36"},{"c-0":[{"->":"SchoolEvent"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"Drink":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Drink.gif"},"^Here you go!","\n","ev","str","^Drink up","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Nevermind","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"Bartender"},"\n",{"#f":5}],"c-1":[{"->":"Bartender"},"\n",{"#f":5}]}],{"#f":1}],"SchoolEvent":[{"#":"CLEAR"},{"#":"IMAGE: Images/School.png"},"ev",{"VAR?":"Day"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You arrive to find signs leading to a school play. You follow the signs to the auditorium where small children are performing.","\n","ev","str","^Watch the play","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Wait outside the auditorium","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.8"},{"c-0":[{"->":"Play"},"\n",{"#f":5}],"c-1":[{"->":"WaitOutside"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"Day"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You go to the school and see a lot of people. None of them look like Chantelle. You ask a few people if they know where she is. Somebody tells you that she is helping some students create resumes and portfolios inside.","\n","ev","str","^Go inside","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.16"},{"c-0":["^ ",{"->":"ComputerLab"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"Day"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Chantelle isn't there, but the teacher from the computer lab is there. Mr. F.","\n","ev","str","^Ask Mr. F for Chantelle's contact information","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.24"},{"c-0":[{"->":"ChantellesContactPage"},"\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}]}],"nop","\n",{"#f":1}],"Play":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Play.gif"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"^You sit down and enjoy the play. It lasts for about 45 minutes. At the end, the audience stands up and claps.","\n","ev","str","^Yell out Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask people around you if they know where Chantelle is","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"SchoolChantelleInfo"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"SchoolChantelleInfo"},{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"WaitOutside":[[{"#":"CLEAR"},{"#":"IMAGE: Images/SchoolHallway.png"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"^You paitently wait for a bit. People begin to head out in large groups. You look for Chantelle, but you don't seeing her.","\n","ev","str","^Yell out Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask people around you if they know where Chantelle is","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"SchoolChantelleInfo"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"SchoolChantelleInfo"},{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"SchoolChantelleInfo":[{"#":"CLEAR"},"ev",{"VAR?":"firstChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: Images/Audience.png"},"^You yell out \"Chantelle\", but nobody answers. A few people did look back at you though. Maybe they know who Chantelle is.","\n","ev","str","^Ask people around you if they know where Chantelle is","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":".^.^.^.^"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"secondChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"#":"IMAGE: Images/Crowd.png"},"^You ask the people in the crowd until somebody says that they know Chantelle. They tell you that she left with her family, but that she enjoys helping out with school events. They tell you that she will be at a school event the following day. They jot down the information for you before they walk away.","\n","ev","str","^Head home for the night","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.15"},{"c-0":["\n","ev",2,"/ev",{"VAR=":"Day","re":true},{"->":"Inside"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"ComputerLab":[[{"#":"CLEAR"},{"#":"IMAGE: Images/ComputerLab.png"},"ev",false,"/ev",{"VAR=":"firstChoice","re":true},"ev",false,"/ev",{"VAR=":"secondChoice","re":true},"^You walk to the computer lab and see some students with what appears to be a teacher.","\n","ev","str","^Ask students about Chantelle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask teacher about Chantelle","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",true,"/ev",{"VAR=":"firstChoice","re":true},{"->":"ComputerLabInfo"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":"ComputerLabInfo"},{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"ComputerLabInfo":[{"#":"CLEAR"},{"#":"IMAGE: Images/ComputerLab.png"},"ev",{"VAR?":"firstChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^The students show you some of the work Chantelle helped them with. She did a great job highlighting the skills and talents of each student.","\n","ev","str","^Ask where Chantelle is","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask teacher about Chantelle","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.8"},{"c-0":[{"->":"Clearance"},"\n",{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"secondChoice","re":true},{"->":".^.^.^.^"},{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"secondChoice"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^The teacher introduces himself as Mr. F. He tells you that Chantelle is very personable and is always looking for ways to help others.","\n","ev","str","^Ask Mr.F if he knows where Chantelle is","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.16"},{"c-0":["^ ",{"->":"Clearance"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"Clearance":[[{"#":"CLEAR"},{"#":"IMAGE: Images/Classified.gif"},"^They tell you that the information is classified, but they tell you that they know she is supposed to catch up with her old team from Bombilate games.","\n","ev","str","^Ask about Bombilate Games","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"BombilateGames"},"\n",{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"BombilateGames":[[{"#":"CLEAR"},{"#":"IMAGE: Images/QuantumCheeks.png"},"ev","str","^Open article about Bombilate Games","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Download Quantum Cheeks","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Head Home","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",{"#":"LINKOPEN: https://www.brianaaea.com/sacramento-developer-collective/2017/10/26/indie-developer-spotlight-chantelle-cole-and-bombilate-games"},{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://m.apkpure.com/quantum-cheeks/com.bombilate.QuantumCheeks"},{"->":".^.^.^"},{"#f":5}],"c-2":["^ ","\n","ev",3,"/ev",{"VAR=":"Day","re":true},{"->":"Inside"},{"#f":5}]}],{"#f":1}],"Email":[[{"#":"CLEAR"},{"#":"IMAGE: Images/notification.png"},"^There's one new email!","\n","ev","str","^Open email","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Swipe away enail notification","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^I don't want to play this game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":[{"->":"ReadEmail"},"\n",{"#f":5}],"c-1":[{"->":"PhoneCall"},"\n",{"#f":5}],"c-2":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"ReadEmail":[[{"#":"CLEAR"},{"#":"IMAGE: Images/ReadingQuest.png"},"^The email is from CastleQuest.","\n","ev","str","^Click on link","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Close email","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"#":"LINKOPEN: https:/\n->PhoneCall"},{"#f":5}],"c-1":[{"->":"PhoneCall"},"\n",{"#f":5}]}],{"#f":1}],"PhoneCall":[[{"#":"CLEAR"},{"#":"IMAGE: Images/RingPhone.gif"},"^Ring ring!","\n","ev","str","^Answer phone","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Reject phone call","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"TalkOnPhone"},"\n",{"#f":5}],"c-1":[{"->":"Voicemail"},"\n",{"#f":5}]}],{"#f":1}],"TalkOnPhone":[[{"#":"CLEAR"},{"#":"IMAGE: Images/ParadoxTectonic.png"},"^Hello. This is Paradox Tectonic. We heard you were looking for Chantelle. While we can't discuss what she worked on, we wanted to let you know that she did in fact work here as a contractor and a temporary employee. She helped out with design tasks and got along well with the team.","\n","ev","str","^Thank Paradox for the call and hang up","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"AfterCall"},"\n",{"#f":5}]}],{"#f":1}],"Voicemail":[[{"#":"CLEAR"},{"#":"IMAGE: Images/ParadoxTectonic.png"},"^This is Paradox Tectonic. We heard you were looking for Chantelle. While we can't discuss what she worked on, we wanted to let you know that she did in fact work here as a contractor and a temporary employee. She helped out with design tasks and got along well with the team. I hope this information is helpful.","\n","ev","str","^Hang up","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"AfterCall"},"\n",{"#f":5}]}],{"#f":1}],"AfterCall":[[{"#":"CLEAR"},{"#":"IMAGE: Images/RingPhone.gif"},"^Well, we know a lot about Chantelle. Now time to find her!","\n","ev","str","^Go to Pipeworks","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go to school","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",4,"/ev",{"VAR=":"Day","re":true},{"->":"GoToPipeworks"},{"#f":5}],"c-1":["^ ","\n","ev",4,"/ev",{"VAR=":"Day","re":true},{"->":"SchoolEvent"},{"#f":5}]}],{"#f":1}],"ChantellesContactPage":[[{"#":"CLEAR"},{"#":"IMAGE: Images/GameOver.png"},"ev","str","^Email Chantelle","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^View Resume","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"#":"LINKOPEN: mailto: Chantellethegamedesigner@gmail.com"},{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"#":"LINKOPEN: https://chicks1111.com/resumecurrent"},"done",{"#f":5}]}],{"#f":1}],"global decl":["ev",false,{"VAR=":"lookedRight"},false,{"VAR=":"noteRead"},false,{"VAR=":"calledCops"},0,{"VAR=":"collectedNotes"},false,{"VAR=":"firstChoice"},false,{"VAR=":"secondChoice"},false,{"VAR=":"beginConvo"},1,{"VAR=":"Day"},"/ev","end",null],"#f":1}],"listDefs":{}};