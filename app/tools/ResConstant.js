const systemMessage = { //code range(-1,9)
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
const userMessage = {
  REGIST_SUCCESS: {
    code: 0,
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
    code: 0,
    message: '登陆成功',
    key: 'LOGIN_SUCCESS'
  },
  USER_NEED_LOGIN: {
    code: 103,
    message: '需要登录',
    key: 'USER_NEED_LOGIN'
  },
  UPDATE_PASSWORD_SUCCESS: {
    code: 0,
    message: '密码修改成功',
    key: 'UPDATE_PASSWORD_SUCCESS'
  },
  TOKEN_EXPIRED: {
    code: 104,
    message: 'Token过期，请刷新Token',
    key: 'TOKEN_EXPIRED'
  },
  TOKEN_ERROR: {
    code: 105,
    message: 'Token校验失败',
    key: 'TOKEN_ERROR'
  },
  TOKEN_REFRESH: {
    code: 0,
    message: 'Token刷新成功',
    key: 'TOKEN_REFRESH'
  },
}
const contactMessage = {
  CONTACT_ADD_SUCCESS: {
    code: 0,
    message: '联系人添加成功',
    key: 'CONTACT_ADD_SUCCESS'
  },
  CONTACT_GET_SUCCESS: {
    code: 0,
    message: '获取联系人列表成功',
    key: 'CONTACT_GET_SUCCESS'
  },
  CONTACT_PUT_SUCCESS: {
    code: 0,
    message: '联系人修改成功',
    key: 'CONTACT_PUT_SUCCESS'
  },
}

const resConstant = {
  ...systemMessage,
  ...userMessage,
  ...contactMessage
}

module.exports = resConstant;