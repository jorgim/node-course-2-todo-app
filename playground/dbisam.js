var db = require("odbc")()
    , cn = "DRIVER={FreeTDS};SERVER=host;UID=user;PWD=password;DATABASE=dbname"
    ;
 
db.open(cn, function (err) {
    if (err) {
        return console.log(err);
    }
 
    //we now have an open connection to the database
    //so lets get some data
    db.query("select top 10 * from customers", function (err, rows, moreResultSets) {
        if (err) {
            return console.log(err);
        }
        
        console.log(rows);
 
        //if moreResultSets is truthy, then this callback function will be called
        //again with the next set of rows.
    });
});