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
  },
  ILLEGAL_REQUEST: {
    code: -1,
    message: '非法请求',
    key: 'ILLEGAL_REQUEST'
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
  TOKEN_NOT_USE_NOW: {
    code: 106,
    message: 'refresh_token未到使用时间',
    key: 'TOKEN_NOT_USE_NOW'
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
  CONTACT_DEL_SUCCESS: {
    code: 0,
    message: '联系人删除成功',
    key: 'CONTACT_DEL_SUCCESS'
  },
}
const groupMessage = {
  GROUP_ADD_SUCCESS: {
    code: 0,
    message: '分组添加成功',
    key: 'GROUP_ADD_SUCCESS'
  },
  GROUP_GET_SUCCESS: {
    code: 0,
    message: '分组列表获取成功',
    key: 'GROUP_GET_SUCCESS'
  },
  GROUP_INFO_GET_SUCCESS: {
    code: 0,
    message: '分组信息获取成功',
    key: 'GROUP_INFO_GET_SUCCESS'
  },
  GROUP_ADD_CONTACT_SUCCESS: {
    code: 0,
    message: '分组添加联系人成功',
    key: 'GROUP_ADD_CONTACT_SUCCESS'
  },
  GROUP_PUT_SUCCESS: {
    code: 0,
    message: '分组信息更新成功',
    key: 'GROUP_PUT_SUCCESS'
  },
  GROUP_DEL_SUCCESS: {
    code: 0,
    message: '分组删除成功',
    key: 'GROUP_DEL_SUCCESS'
  },
  GROUP_DEL_CONTACT_SUCCESS: {
    code: 0,
    message: '分组移除联系人成功',
    key: 'GROUP_DEL_CONTACT_SUCCESS'
  },
}

const resConstant = {
  ...systemMessage,
  ...userMessage,
  ...contactMessage,
  ...groupMessage,
}

module.exports = resConstant;