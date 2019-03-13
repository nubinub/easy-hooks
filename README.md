This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

## Hooks API

### useToggle

    const [value, toggleValue] = useToggle(init)

This hooks allows us to manage a boolean value.
This value can only be toggled, i.e set to `true` when previously `false` and vice versa.

`init` parameter defined the initial value of our boolean, defaults to false.

`value` holds the boolean value.

`toggleValue` function to toggle the boolean value.


#### example

One simple use case is a boolean that manages the display of a given DOM element.

    const [display, toggleDisplay] = useToggle(false);
    
    return (
        <>
            <button onClick={toggleDisplay}>Toggle</button>
            {display && <div>Display managed element</div>}
        </>
    );


