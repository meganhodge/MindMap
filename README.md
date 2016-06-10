To use mindBubble.js
1. Put mindBubble.js into \Program Files\High Fidelity\scripts\system
2. Put environment-01.svg into \Program Files\High Fidelity\scripts\system\assets\images\tools

If everything goes well, you should see a clickable environment icon on the UI

Changes of addBubble.js
1. Changed line 8 to 
mapping.from(Controller.Standard.RB).to(function (value){
   if (value == 1){
   addBubble();
 }
 });
so it only creates 1 bubble while click th button

2. Changed the button from RT to RB to make sure the stability

original file I created

mindBubble.js
environment-01.svg
AssetLibrary.zip (the collection of files that deployed to the server)


Code I added to the the orginal files

speechControl.js
Line 79-85, 98, 192-200

handControllerPointer.js
Commented out line 274-275

Files I modified

addBubble.js
Line 8-12