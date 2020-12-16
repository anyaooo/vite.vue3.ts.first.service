const express = require('express')
const path = require('path')
const { dbAuthQuery } = require('../db')
const md5 = require('blueimp-md5')
const resCfg = require(path.resolve(__dirname, '../responseConfig'))
const { encrypt } = require('../rsaConfig')
const loginRouter = express.Router()

loginRouter.post('/', async (req, res) => {
    try {
        const rows = await dbAuthQuery('au_user_info',
            {
                'Usr_Nm': req.body.username,
                'USR_PSWD': md5(req.body.password)
            }
        )
        const params = {}
        if (!rows?.length) {
            params.state = '01'
            params.msg = '用户名或密码错误'
        } else {
            params.token = encrypt(rows[0].Usr_ID)
        }
        res.send(resCfg.success(params))
    } catch (error) {
        res.send(resCfg.failure(error))
    }

})

module.exports = loginRouter