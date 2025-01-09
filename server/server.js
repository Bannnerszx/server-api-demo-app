import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();

app.use(express.static('build'));

app.get('/*', (req, res) => {
  const appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
        <link rel="stylesheet" href="/index.css">
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
