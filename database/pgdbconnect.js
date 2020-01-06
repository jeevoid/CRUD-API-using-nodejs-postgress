 const pg = require("pg")

var config = {
    user:'postgres',
    database:'sample',//first connection folder
    password:'NURTURE_123',
    host:'192.168.168.6',
    port:5432,
    max:10000,
    idleTimeoutMillis: 30000,
    };
    
    var pool = new pg.Pool(config);
    pool.connect(function(err, client, done) {
        if(err) {
           console.log("error in connecting",err)
        }
        done();
        console.log("postgres connected")
    });
    
     module.exports = pool;
    