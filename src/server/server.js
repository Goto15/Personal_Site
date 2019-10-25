const sqlite3 = require('sqlite3').verbose();
const express = require('express');

let db = new sqlite3.Database('ratings.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the ratings database.');
  });

db.serialize(() => {
    db.each(`Select IGN as name,
                    Elo as rating
             From Players
             Where IGN != "bye"
             Order By Elo Desc`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.name + "    --    " + row.rating);
    });
});

db.close((err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Closed the Database connection.')
});