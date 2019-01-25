process.on( "unhandledRejection" , function( reason , p ) {
    console.error( reason, "Unhandled Rejection at Promise" , p );
    console.trace();
});
process.on( "uncaughtException" , function( err ) {
    console.error( err , "Uncaught Exception thrown" );
    console.trace();
});


const app = require( "./expressAPP.js" );
const server = require( "http" ).createServer( app );


server.listen( port , async function() {
	console.log( "started media server" );
});