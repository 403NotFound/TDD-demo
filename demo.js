export function getOldPassword() {
  return '1234524423'
}

export function getNewPassword() {
  return '000000'
}

export function getNewPasswordAgain() {
  return '000000'
}

export function serverMsg() {
  return {
    stauts: 200,
    msg: '密码修改成功'
  }
}

export function serverErrMsg() {
  return {
    stauts: 400,
    msg: 'error'
  }
}