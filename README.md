# NoA code challenge

Preview: https://effulgent-souffle-4d9265.netlify.app/

Requirements: [PDF Document](./docs/NoA_challenge.pdf)

## Used Technologies

- main: React
- code hosting: GitHub
- deploing hosting: Netlify

## Get started

- Clone the repository
- Enter the cloned repository in a terminal of your choosing
- yarn
- yarn start

## Directory structure

```
README.md
public/
src/
    assets/
    -- Pictures and icons used in the project
        icons/
        images/
    components/
        -- Components of the project
        Button/
            Button.js
        Dots/
            Dots.js
        Slide/
            Slide.js
        Slider/
            Slider.js
    shared/
        -- Constants used in the project
        constants.js
    App.css
    App.js
    index.js
```

## Component nesting

- App.js => Slider.js => (Slide.js, Button.js, Dots.js)

## Client side: styles, UI, UX

### UI:

- built responsively fo tablet and laptop
- I made an application in a minimalistic unobtrusive design

### CSS:

- the app used regular CSS for styling

### UX:

- I deviated from the requirements and built the buttons that I liked
- Also, I decided to add indicators for slides to understand their number

## Client side: REACT

- for the state management of the application and for implementation of the app I used modern React
- I tried to distribute the code between different components as much as possible to make it easier to build unit tests

## Server 

- We do not have a server side in the application, but we can)

## Optimization:

### Styles, UI, UX

- Styles are better to use declared. But, unfortunately, I did not work with JSS. I prefer Styled-components, @emotio

- It is better to create all HTML elements on the project level and then customize them directly in a separate component

- For the content part, it is better to use a content management system. I worked with Strapi, Contentful, WordPress

### Client/React

- In real projects, we use a well-thought-out state management structure. Therefore, it is always better to understand in advance how we share data between different components, and how we pass props. In this application, I used simple react hooks

- Also, it is good practice to have unit tests

- This task could be complicated and implement gitHub authentication with obtaining a token and the required data between the client and the server. But it wasn't in the assignment
