module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.ratingid || (req.body && req.body.ratingid)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: JSON.stringify(context.bindings.inputDocument)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a ratingid on the query string or in the request body"
        };
    }
    context.done();
};