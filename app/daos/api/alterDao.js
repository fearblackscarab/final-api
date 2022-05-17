const con = require('../../config/db_config');

const alterDao = {
    table: 'jewelry',

    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "no fields to create."
            })
        } else {
            const fields = Object.keys(req.body);// creates field array
            const values = Object.values(req.body);// creates value array

            con.execute(
                `insert into jewelry set ${fields.join('=?,')}=?`,
                values,
                (error, rows) => {
                    if (!error) {
                        if (rows.length === 1) {
                            res.json(...rows)
                        } else {
                            res.json(rows)
                        }
                    } else {
                        console.log('dao error', error)
                        res.send('error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Is not a number"
            })
        } else if (Object.keys(req.body) === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body);// creates field array
            const values = Object.values(req.body);// creates value array

            con.execute(
                // string, array, callback
                `update jewelry set ${fields.join('=?,')}=? where jewelry_id=?`,
                [...values, req.params.id],
                (error, dbres) => {
                    if (!error) {
                        if (dbres.length === 1) {
                            res.send(`changed ${dbres.changedRows}`)
                        } else {
                            res.send(`changed ${dbres.changedRows}`)
                        }
                    } else {
                        res.send('error updating')
                        console.log('filmdao error', error)
                    }
                }
            )
        }
    },

    findByRating: (req, res) => {
        con.execute(
            'select * from jewelry where type=?',
            [rating],
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                }
            }

        )
    }
}

module.exports = alterDao;