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


### useClock

    const [clock] = useClock(interval)

This hooks provides a clock value which updates according to the time interval specified in parameter.

`interval` defines the update interval in ms, defaults to 1000.

`clock` Time value in ms.


#### example

One simple use case is to display the local time.

    const [clock] = useClock();
    
    return (
        <div>
            {new Date(clock).toLocaleString()}
            // use whichever formatter you like
        </div>
    );

### useTimer

    const [timer, start, stop, clear] = useTimer(interval)

This hooks provides an abstraction layer to manage a timer.

`interval` defined the update interval in ms, defaults to 1000.

`timer` the timer value in ms.

`start` starts the timer.

`stop` clears the timer setInterval, without resetting timer to 0. 
Can be resumed by using start.

`clear` clears the timer setInterval and reset timer value to 0.
Can be restarted by using start.

#### example

    const [timer, start, stop, clear] = useClock();
    
    return (
        <div>
            {timer}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={clear}>Clear</button>
        </div>
    );

### useAsync

    const [data, isLoading, error, fetch] = useAsync(asyncFn, autoFetch);

`asyncFn` the asynchronous function to be executed.
Needs to return an object with data property on success.
Needs to return an object with error property on error.

`autoFetch` if true asyncFn will be triggered on component mount.
Defaults to true.

`data` data returned by the execution of the asynchronous function.

`isLoading` boolean value, true when asynchronous method is being executed, else fale.

`fetch` function to trigger the asynchronous function and update data, isLoading, and error accordingly.

#### example

    const [data, isLoading, error, fetch] = useAsync(someAsyncFn);
    
    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && <div>{data}</div>}
            {!isLoading && <div>{error}</div>}
        </div>
    );
