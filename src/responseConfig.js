const success = params => (Object.assign({
    status: '00',//表示交易成功
    state: '00',// 登录、编辑、新增 等标志成功字段
    msg: '',// 对错误原因的描述
}, params))

const failure = (msg, status = '01') => ({
    status,
    msg
})

module.exports = {
    success,
    failure
}