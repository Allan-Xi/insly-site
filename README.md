1. the HTML template we use is Freemaker.
2. As we use bootstrap table in the website,
   when a table uses apis to get multiple rows from the server, the request url will be something like this:
    
    http://localhost:8080/api/claims?order=asc&offset=0&limit=10
    the server should implement pagination.
    And the response JSon should be something like:

   {
        total   : 100,                              // how many items do we have in total.
        rows    : [{                                // data array.
                    some_attr  :    some_value,
                    some_attr  :    some_value,
                },
                ...]
   }
