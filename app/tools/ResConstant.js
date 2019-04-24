let systemMessage = { //code range(-1,9)
  SYSTEM_SUCCESS: {
    code: 0,
    message: '请求成功',
    key: 'SYSTEM_SUCCESS'
  },
  SYSTEM_ERROR: {
    code: -1,
    message: '系统异常',
    key: 'SYSTEM_ERROR'
  },
  ERROR_ARGUMENTS: {
    code: 1,
    message: '错误的参数',
    key: 'ERROR_ARGUMENTS'
  }
}
let userMessage = {
  REGIST_SUCCESS: {
    code: 200,
    message: '注册成功',
    key: 'REGIST_SUCCESS'
  },
  EMAIL_USED: {
    code: 100,
    message: '邮箱已经注册',
    key: 'EMAIL_USED'
  },
  EMAIL_ERROR: {
    code: 101,
    message: '邮箱错误',
    key: 'EMAIL_ERROR'
  },
  PASSWORD_ERROR: {
    code: 102,
    message: '密码错误',
    key: 'PASSWORD_ERROR'
  },
  LOGIN_SUCCESS: {
    code: 200,
    message: '登陆成功',
    key: 'LOGIN_SUCCESS'
  },
  USER_NEED_LOGIN:{
    code: 103,
    message: '需要登录',
    key: 'USER_NEED_LOGIN'
  }
}

let resConstant = {
  ...systemMessage,
  ...userMessage
}

module.exports = resConstant;