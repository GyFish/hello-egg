// app.js

module.exports = app => {

    app.once('server', server => {
        console.log('  >> server started!')
    });

    app.on('error', (err, ctx) => {
        console.log('  >> server error!')
    });

    app.on('request', ctx => {
        if (ctx.url.startsWith('/api')) {
            console.log();
            console.log('  >> url: ' + ctx.url)
        }
    });

    app.on('response', ctx => {

        if (ctx.url.startsWith('/api'))
            return;

        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;

        // log total cost
        console.log('  >> used: ' + used + 'ms');

        // console.log('  >> res: ' + ctx.body);
    });

};
