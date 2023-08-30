# SmashControl-Graphics-Pack
A customizable graphics pack for NodeCG SmashControl

## How to Install
This graphics pack is built for use with NodeCG SmashControl, which can  be found [here](https://github.com/smashcontrol/nodecg-smashcontrol). Once that's installed, this bundle can be placed inside the "Bundles" folder and will become available for use in SmashControl.

## Customizing the Graphics Pack
Inside the graphics pack, in the "css" folder, there is a file called "customize.css". This file allows you to customize many aspects of the overlays. The syntax for the toggling of various variables is documented in the comments of that file.

### Colors
You can change the following colors by changing the hex codes in "customize.css"
```
    --bg-color: The background color for all of the graphics elements;
    --main-text: The color for player tags and other text;
    --accent: The accent color for secondary boxes and icons. This should be different from your Main Text color;
```
### Logo
Inside "customize.css", you can choose whether or not to display the logo, but to change it, you need to place your logo in the "images" folder with the file name "logo.png"

I recommend using a square image at least 600 pixels by 600 pixels.

### Animations
The transition animation toggle for the overlay elements is found in the "customize.css" file. Enabling this causes the elements to animate in each time the source is refreshed, so "Refresh browser when scene becomes active" will need to be enabled for the browser source in OBS.

Animations work better with Fade to Color and Stinger scene transitions in OBS. You might need to adjust the timing of these transitions to get the best effect.

### Character Icons
Character icons are currently a work in progress and do not function properly at this moment. I recommend leaving them off.

![Gameplay Screen](https://media.discordapp.net/attachments/752590054538346506/1146520640925487164/gameplay.png?width=1067&height=600)
![Break Screen](https://media.discordapp.net/attachments/752590054538346506/1146520641873383554/break.png?width=1067&height=600)
![Player Screen](https://media.discordapp.net/attachments/752590054538346506/1146520641307156571/player_cam.png?width=1067&height=600)
![Commentator Screen](![image](https://github.com/DrewG84/SmashControl-Graphics-Pack/assets/85595432/00989325-bdfd-4d5d-b45e-4dc2b06c233e)
![Thumbnail](https://media.discordapp.net/attachments/752590054538346506/1146520641600770148/thumbnail.png?width=1067&height=600)
