// connect database
const express = require('express');
const con = require('../../config/db_config');

const daoCommon = {
    findAll: (res, table) => {
        con.execute(
            `select * from ${table}`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('dao error', error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.execute(
            `select * from ${table} where ${table}_id=?`,
            [id],
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('dao common error', error)
                }
            }
        )
    },

    findByType: (res, table, type) => {
        con.execute(
            `select * from ${table} where ${table}_type=?`,
            [type],
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('dao common error', error)
                }
            }
        )
    }
}

module.exports = daoCommon