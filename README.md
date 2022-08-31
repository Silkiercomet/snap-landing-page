# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Screenshot.png)


### Links

- Solution URL: [solution here](https://github.com/Silkiercomet/snap-landing-page)
- Live Site URL: [live site here](https://silkiercomet.github.io/snap-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Drop-down styled menus are not as easy as one would thought, they have a little more complexity than that, i was by far the major challenge of this project, more because we need two of then, one for the mobile and other for the desktop, but once that you pick up the process to code one the other is not much different, you need to create a list item and inside that list item declare a button to handle the state change and a container to be affected With such state change, inside the container anything can be added the parent component is a position relative, which means that all his children are gonna react to his box model, the container needs to be positioned absolute 

In the mobile version I used more of an accordion approach, I declared container under the state manager (another button) with his height and overflow, set to 0 and hidden, on state change is gonna show the content inside  this container with a nice transition


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/comet466)


