# JavaScript Events Cheat Sheet

A compact, well-organized reference of important JavaScript events for developers — perfect for a GitHub repository README.

---

## Table of Contents

* [Overview](#overview)
* [How to Use This Cheat Sheet](#how-to-use-this-cheat-sheet)
* [Event Categories](#event-categories)

  * [Mouse Events](#mouse-events)
  * [Keyboard Events](#keyboard-events)
  * [Form & Input Events](#form--input-events)
  * [Window & Document Events](#window--document-events)
  * [Clipboard Events](#clipboard-events)
  * [Drag & Drop Events](#drag--drop-events)
  * [Touch & Mobile Events](#touch--mobile-events)
  * [Media Events](#media-events)
  * [Animation & Transition Events](#animation--transition-events)
  * [Other Useful Events](#other-useful-events)
* [Examples](#examples)
* [Contributing](#contributing)
* [License](#license)

---

## Overview

This README lists commonly used JavaScript events grouped by category. Use it as a quick reference while building interactive web apps.

---

## How to Use This Cheat Sheet

* Browse categories to find event names and short meanings.
* See the `Examples` section for common usage patterns.
* Copy code snippets directly into your project.

---

## Event Categories

### Mouse Events

| Event         | Trigger                                 |
| ------------- | --------------------------------------- |
| `click`       | Single click on an element              |
| `dblclick`    | Double-click                            |
| `mousedown`   | Mouse button pressed down               |
| `mouseup`     | Mouse button released                   |
| `mousemove`   | Mouse moves over an element             |
| `mouseover`   | Pointer enters an element (bubbles)     |
| `mouseout`    | Pointer leaves an element (bubbles)     |
| `mouseenter`  | Pointer enters an element (no bubbling) |
| `mouseleave`  | Pointer leaves an element (no bubbling) |
| `contextmenu` | Right-click / context menu              |

---

### Keyboard Events

| Event                     | Trigger                                     |
| ------------------------- | ------------------------------------------- |
| `keydown`                 | Key is pressed (fires repeatedly if held)   |
| `keypress` *(deprecated)* | Key pressed (character-producing keys only) |
| `keyup`                   | Key is released                             |

---

### Form & Input Events

| Event      | Trigger                                       |
| ---------- | --------------------------------------------- |
| `submit`   | Form submission                               |
| `reset`    | Form reset                                    |
| `input`    | Value changes (fires instantly while typing)  |
| `change`   | Value changes (fires after blur or selection) |
| `focus`    | Element gains focus                           |
| `blur`     | Element loses focus                           |
| `focusin`  | Focus enters an element (bubbles)             |
| `focusout` | Focus leaves an element (bubbles)             |
| `select`   | Text selection in input/textarea              |

---

### Window & Document Events

| Event              | Trigger                           |
| ------------------ | --------------------------------- |
| `load`             | Page or resource finishes loading |
| `DOMContentLoaded` | HTML parsed; DOM built            |
| `resize`           | Window resized                    |
| `scroll`           | Scrolling happens                 |
| `beforeunload`     | Page is about to be unloaded      |
| `unload`           | Page fully unloaded               |
| `hashchange`       | URL hash (`#...`) changes         |

---

### Clipboard Events

| Event   | Trigger      |
| ------- | ------------ |
| `copy`  | Copy action  |
| `cut`   | Cut action   |
| `paste` | Paste action |

---

### Drag & Drop Events

| Event       | Trigger                                      |
| ----------- | -------------------------------------------- |
| `dragstart` | Dragging starts                              |
| `drag`      | Dragging in progress                         |
| `dragenter` | Drag enters a target                         |
| `dragover`  | Drag is over a target (useful to allow drop) |
| `dragleave` | Drag leaves a target                         |
| `drop`      | Dropped on a target                          |
| `dragend`   | Dragging ends                                |

---

### Touch & Mobile Events

| Event         | Trigger                       |
| ------------- | ----------------------------- |
| `touchstart`  | Finger touches screen         |
| `touchmove`   | Finger moves on screen        |
| `touchend`    | Finger removed from screen    |
| `touchcancel` | Touch interrupted / cancelled |

---

### Media Events (audio / video)

| Event          | Trigger                       |
| -------------- | ----------------------------- |
| `play`         | Media starts playing          |
| `pause`        | Media paused                  |
| `ended`        | Media finished playing        |
| `timeupdate`   | Current playback time updated |
| `volumechange` | Volume changed                |
| `seeking`      | User starts seeking           |
| `seeked`       | Seeking ended                 |
| `canplay`      | Ready to start playback       |
| `error`        | Media loading/playing error   |

---

### Animation & Transition Events (CSS)

| Event                | Trigger                    |
| -------------------- | -------------------------- |
| `animationstart`     | CSS animation starts       |
| `animationend`       | CSS animation ends         |
| `animationiteration` | Animation iteration (loop) |
| `transitionstart`    | CSS transition starts      |
| `transitionend`      | CSS transition ends        |
| `transitioncancel`   | Transition cancelled       |

---

### Other Useful Events

| Event         | Trigger                                        |
| ------------- | ---------------------------------------------- |
| `error`       | Resource load or runtime error (element-level) |
| `online`      | Browser goes online                            |
| `offline`     | Browser goes offline                           |
| `wheel`       | Mouse wheel or trackpad scroll                 |
| `pointerdown` | Pointer device pressed (mouse, touch, pen)     |
| `pointerup`   | Pointer released                               |
| `pointermove` | Pointer moved                                  |

---

## Examples

**Basic listeners**

```javascript
// click listener
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('Button clicked');
});

// keyboard listener
document.addEventListener('keydown', (e) => {
  console.log('Key:', e.key);
});

// input vs change
const input = document.querySelector('input[name="name"]');
input.addEventListener('input', (e) => console.log('typing:', e.target.value));
input.addEventListener('change', (e) => console.log('final value:', e.target.value));

// prevent default for a link/context menu
const link = document.querySelector('a.no-default');
link.addEventListener('click', (e) => e.preventDefault());

// drag over to allow drop
const dropzone = document.getElementById('drop');
dropzone.addEventListener('dragover', (e) => e.preventDefault());
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log('dropped');
});
```

---

## Contributing

Contributions welcome! If you'd like to add events, examples, or improvements:

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/update-events`)
3. Add your changes
4. Open a pull request with a short description

---

