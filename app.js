// app.js

module.exports = app => {
    app.once('server', server => {
        console.log('  >> server started!')
    });
    app.on('error', (err, ctx) => {
        // report error
        console.log('  >> server error!')
    });
    app.on('request', ctx => {
        // log receive request
        console.log();
        console.log('  >> url: ' + ctx.url)
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        // log total cost
        console.log('  >> used: ' + used);
        // console.log('  >> res: ' + ctx.body);
    });
};
