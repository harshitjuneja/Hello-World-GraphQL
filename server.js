import express from 'express';

import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import schema from './schema';

let app = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {

    graphql(schema, req.body).then((result) => {
        res.send(JSON.stringify(result, null, 2));
    });
}
);

let server = app.listen(PORT, function () {
    let host = server.address().address;
    console.log('hsot-->', host);
    let port = server.address().port;
    console.log('Graphql listening @ ', host, port);

    // Sample request : query getHighScores(limit: 10) { score }

    // Our GraphQL server needs to be configured to respond to requests like these — it does this using a schema.

    // Our schema will describe what fields the server can respond to and what types of objects the responses will contain.

    // You can write a GraphQL query to ask a GraphQL server about its fields. Very meta.

    // each GraphQL root field automatically has a `__schema` field, which has its own fields that we can query against — 
    // in particular, the `queryType` field. Every field can be queried for meta-information, such as the name.

});

