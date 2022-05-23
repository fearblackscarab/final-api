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
    }
}

module.exports = alterDao;