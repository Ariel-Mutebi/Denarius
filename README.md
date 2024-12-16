# History

1. I created [first version of TaskQuest](https://github.com/black-RAM/TaskQuest/) from September 22, 2023 to December 13, 2023. It was originally just supposed to be my solution to [this Odin Project assignment](https://www.theodinproject.com/lessons/node-path-javascript-todo-list#assignment). But I got too many ideas for extra features, and the app grew into my biggest yet.
2. During late september this year, while I was wondering what to do for [the exceedingly ambiguous Inventory Application project from The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application), the thought crossed my mind that I should return to magnify my magnum opus. TaskQuest-Cloud was the name for this new version of TaskQuest which will have cloud storage and other such cool back-end capabilities.
3. Appalled by the four-hundred-plus-line code files which I was once so proud of, I enacted the "refactor of Versailles [which] dissolv[ed] empires, giving each function sovereignty". (I.e., I split up the code into different directories and modules so that each module had a single responsibility, exporting a single entity. The historical allusion was inspired by how the Treaty of Versailles dissolved the Ottoman Empire and so on.) Along the way, I also wrote dozens of tests (four dozen, actually), to make sure I was working with 100% reliable code. Plus, I tried to document the system with some UML diagrams. (Scroll down to see them.)
4. I added minor features, like the history API changing the URL when the user navigates to a different part of the app, and a few other common-sense additions. This is the stage where I am now, as of 14th December 2024. I now plan to work on the back-end API, then link the two so that the app runs on a hybrid of cloud and local storage.

# UML Diagrams

These can be found in the root of the repo. But in case you do not want to go through the hassle of loading their XML files in Draw.io, their PNGS are attached here for convenience.

## Use Case Diagram

![TaskQuest-Cloud-UML-Use-Case-Diagram drawio](https://github.com/user-attachments/assets/49c4bfd0-a1e4-4459-8551-9e2dcd5efb13)

## Class Diagram

![TaskQuest-Cloud-UML-Class-Diagram drawio](https://github.com/user-attachments/assets/d8cb1b6b-6aed-4520-aa30-7f64ccd089d8)

## Sequence Diagrams

![TaskQuest-UML-Sequence-Diagrams drawio](https://github.com/user-attachments/assets/e261e005-ddc0-488c-901c-eab91053a3be)
