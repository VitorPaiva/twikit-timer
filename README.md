# Twikit Time-it

Angular timer application assignment for Twikit.

## Installation

Before starting make sure you have [NodeJS](https://nodejs.org/en/)(>=16) and [npm](https://www.npmjs.com/) installed. Then install [Angular CLI](https://angular.io/).

```bash
npm i -g @angular/cli
```

After clone the repository into your local environment. Open the a terminal/cmd window and navigate into the cloned repository and install the npm packages.
```bash
git clone git@github.com:VitorPaiva/twikit-timer.git
cd twikit-timer
npm i
```

Then you can run the app in development mode with `ng serve`. Navigate to `http://localhost:4200/` to check out the app.
## Subtasks
For the UX/UI decided to use the Material UI package for Angular
### Subtask 1
To complete this task I decided to create 2 components. First the **timer-line** which consists of every line in the timer and then the **time-table** that would be composed by multiple lines and the buttons for **sorting** and **refresh**.  

##### Timer-Line Component
This component would have all the data and functionalities of each line in the table. The Play/Stop/Done button as well as the time itself. I also added a creationTime attribute to help with the sorting later. At last the line would emit an event whenever it changed it status to 'Done'.

##### Time-Table Component
This component is composed by an array of Timer-Lines that would be visible to the user. This component also added the functionalities of sorting the already 'Done' times and refreshing the timer. The sorting of the lines will have in count the time of creation of the line using the attribute creationTime.

### Subtask 2
In this case a new component could have been created for the button but this was not the case. The way I decided to accomplish this task was by creating one button with all the icons where only one is active at a time. Then by adding or removing classes those icons would animate disappearing or appearing, depending on the classes. 

### Subtask 3
As mentioned before this button was part of the table component. Also as mentioned before a component could/should have been created for this button that could then be reused for all the buttons.

### Subtask 4
For theming I decided to use the Twikit colors with some slight changes.

### Subtask 5
Some UX improvement I would do:
- Add a delete button at the end of each line (either a trash bin icon or a dash)
- Instead of having multiple buttons to 'Play/Stop' I would create only one button at the bottom of the screen
- Add more sorting options
- Add numbers to the start of each line, to better keep track of the times
- Highlight the best and worst times
