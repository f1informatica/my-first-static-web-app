const { OperationCanceledException } = require("typescript");

module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Olá, " + name + ". Esta tudo funcionando perfeitamente bem aqui."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

    context.res.json({
        text: "Página inicial da Empresa F1 Informática." 
    });

}