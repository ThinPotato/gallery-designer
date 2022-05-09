# Gallery Designer
This is a volunteer project in association with the Zuccaire Gallery. This application creates a virtual enviornement where the curators can visualize their gallery in any array of layouts and designs. The purpose of this application is to help make designing the gallery for different exhibitions as easy as possible.
- [Gallery Designer](#gallery-designer)
  - [Client Background](#client-background)
    - [Georgia Lamair Tomczak](#georgia-lamair-tomczak)
      - [Public Programs Director](#public-programs-director)
  - [Problem Statement](#problem-statement)
  - [Outline of Solution](#outline-of-solution)
  - [Developers](#developers)
    - [Bryce Stoker-Schaeffer](#bryce-stoker-schaeffer)
      - [Researcher](#researcher)
    - [Steven Jin](#steven-jin)
      - [Evangelist](#evangelist)
    - [Michael La](#michael-la)
      - [Team Secretary](#team-secretary)
  - [Planned Features](#planned-features)
  - [Wireframe](#wireframe)
  - [UI mockup](#ui-mockup)
  - [Software Information for Users](#software-information-for-users)
    - [To Install](#to-install)
    - [To Use](#to-use)
  - [Software Information for Developers](#software-information-for-developers)
    - [To Use](#to-use-1)
    - [To build](#to-build)
    - [Resources for Learning Electron](#resources-for-learning-electron)
    - [License](#license)
## Client Background 
### Georgia Lamair Tomczak (georgia.lamair@stonybrook.edu)
#### Public Programs Director
The Paul W. Zuccaire Gallery is a 5,000 square foot space in the Staller Center for the Arts at Stony Brook University. It represents a dynamic space in which professional and student exhibits are showcased. Every year, the gallery presents exhibitions from works of Stony Brook University undergraduates and graduate students as well as exhibitions from the distinguished faculty of the Art Department. 

## Problem Statement
The Zuccaire Gallery needs a type of curation tool that would allow them to be able to import potential art pieces into a program and then from there be able to virtually design as well as plan for their future exhibits. The current way of using hand drawings and design templates within MS Word is both not time efficient and cannot create work that is in a standardized order.

## Outline of Solution
The solution would be to create an electron based application such that it’s able to run on both MacOS and windows based machines. The ideal experience would be one in which the user is able to open the program up and be able to select their preferred images from their file explorer. From there, the images would be loaded onto an “art-bar,” where selecting a preferred wall, selecting a preferred image, and then a canvas creates it within the blender gallery model. At the end, users would be able to move their image within an xyz plane as well as be able to resize the image model as well.

## Developers
### [Bryce Stoker-Schaeffer](https://github.com/ThinPotato)
#### Researcher
bryce.stoker-schaeffer@stonybrook.edu

### [Steven Jin](https://github.com/StevenJin7820)
#### Evangelist
steven.jin@stonybrook.edu

### [Michael La](https://github.com/MichaelLa99)
#### Team Secretary
michael.la@stonybrook.edu


## Planned Features
- [X] Import images into the program
- [X] Selectable walls based on the floor-plan where images can be placed and sized in space
- [ ] JPEG export from multiple angles 
- [ ] Saving projects so they can be added to and iterated on in the future.

## Wireframe
[Wireframe.pdf](https://github.com/ThinPotato/gallery-designer/files/8507543/Wireframe.pdf)

## UI mockup
[iMac - 1.pdf](https://github.com/ThinPotato/gallery-designer/files/8507545/iMac.-.1.pdf)

## Software Information for Users

### To Install
Download the software from the [link](https://drive.google.com/drive/u/1/folders/1hhe5qOMEIQD8GKVCyymCjRy-J_Txtcr1) (this link may not work in the future. Contact me if it does not.) This software should download in a zip file. Unzip the file and you should see a normal application (it's best practice to move this application into the Applications directory.) If you try to run the program, you may get an error saying your mac cannot validate the file is virus free. If this happens, press Cmd + space, type in "security * privacy", press enter, navigate to "General", and at the bottom of the window should be a button that says "Open anyway." Press that and the program should launch

### To Use
Import your images on the bottom of the screen by pressing `Photo`. This will allow you to import any images you want. Feel free to press `Photo` again at any time to add more images to the Art-Bar.

From here, you can Change which wall you are currently editing by selecting the different walls under the `Views` card on the left.

When you're ready to add a work of art, press the `Artwork` button in the `Tools` card right below the `Views` card.

To further assist with editing the gallery, the `Switch Tools` and `Enable/Disable Tools` buttons exist to asist.

- `Switch Tools` toggles the tools from Transform to Scale, and vice versa. It's useful for resizing and moving artwork.

- `Enable/Disable Tools` lets you view the gallery with the tools on or off. It can help by getting rid of some clutter when you're sizing the work out.

---

## Software Information for Developers
This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start).

This application uses [React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

### To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
#clone repo
git clone https://github.com/ThinPotato/gallery-designer
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### To build

We've only built this application for macOS, but it is possible to build for other operating systems. 
To build for mac, from your command line:
```bash
npm run package
```

### Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

### License

[CC0 1.0 (Public Domain)](LICENSE.md)
