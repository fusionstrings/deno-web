import React from 'https://unsafe-production.jspm.io/react';
import ReactDOMServer from 'https://unsafe-production.jspm.io/react-dom/server.js';

//const element = React.createElement("h1", null, "Hello React!");
function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Deno React JSPM</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <h1>Welcome to deno {Deno.version.deno} 🦕</h1>
                <div>
                This is demonstration is "Zero build" web application using 
                <ul>
                    <li><a href="https://reactjs.org/">Deno 🦕</a></li>
                    <li><a href="https://jspm.io/">JSPM</a></li>
                    <li><a href="https://reactjs.org/">React</a></li>
                </ul>
                </div>
            </body>
        </html>
    );
}
const markup = ReactDOMServer.renderToString(<App />);
export default markup;
