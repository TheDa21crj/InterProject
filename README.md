# Trading

This project has a fully functional backend and frontend. The frontend comprises of Reactjs and the backend is developed using Nodejs which includes MongoDB as the Database.The icons are imported from material-ui and for the amination gsap was used.The Backend includes express-validator for server-side data validation.

## Tech Stack

**Client:** React, CSS

**Server:** Node, Express

**DataBase:** MongoDb

## Run Locally

Clone the project

```bash
  git clone git@github.com:TheDa21crj/Trading.git
```

Go to the project directory

```bash
  cd Trading
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# About the Project

This project has 5 parts where each part is independent. The different parts are the search box and the watchlist, pie char, table, notes, rules.

The project uses the gsap to improve the user experience.

```bash
    gsap.to(".h1Wel", { y: "0%", duration: 1, stagger: 0.25 });
    gsap.to(".h1WelSlide", { y: "0%", duration: 1, stagger: 0.25 }, "-=1");
    gsap.to("#slider", { y: "-100%", duration: 2, delay: 0.75 });
    gsap.to("#NavBackDrop", { y: "-100%", duration: 1 }, "-=1");
```

## Search Box

In the search box the used can search anything and depending on the the input value the user will get filter result this was done using filter() method.

```bash
     {JSONDATA.filter((value) => {
           //conditions
          }).map((value, key) => {
            return (
              //JSX code
            );
          })}
```

The used can add the result to watchlist by first clicking on the plus icon and then on tick. In the watchlist the user will be also able to delete the items form the list (click on delete).

## Pie Chart

In the Middle section a pie chart is displayed using radial-gradient.

## Tables

Just below the pie chart the table shows in which the prices of the items change every second and depending on the prices of the items the Total Amount also changes.

## Notes

In the notes section the used can add notes using the '+' icon and then the enter the details and then click on ADD. To edit the notes user can click on the edit button and then change the data and then click on ADD to update the note. Click on Delete icon to delete the note.

## Rules

In the Rules section the user can click on '+' to added rules which is similar to the notes section. By clicking on the tick icon, the user can select all the rules and then if the delete icon is clicked then all the rules will be deleted. To delete the rules individually users just have to select the checkbox corresponding to that rule.

## Author

- [@TheDa21crj](https://github.com/TheDa21crj)
