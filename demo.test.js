
// describe('change password 测试', () => {
//   test('原密码输入 测试', () => {

//     // 获取旧密码
//     const getOldPassword = jest.fn()
//     // 输入新密码
//     const inputNewPassword = jest.fn()
//     // 再次输入新密码
//     const inputNewPasswordAgain = jest.fn()

//     getOldPassword.mockReturnValueOnce('12346')
//     expect(getOldPassword().length).toBeLessThan(6)
//   })
// })
import { getOldPassword, getNewPassword, getNewPasswordAgain, serverMsg ,serverErrMsg} from './demo'

test('输入原密码 测试', () => {
  // 获取原密码
  // const getOldPassword = jest.fn()
  // getOldPassword.mockReturnValueOnce('12345')
  expect(getOldPassword().length).toBeGreaterThan(0)
})

test('输入新密码 测试', () => {
  // 获取输入的新密码
  // const getNewPassword = jest.fn()
  // getNewPassword.mockReturnValue('000000')

  // 期望密码长度大于等于6
  expect(getNewPassword().length).toBeGreaterThanOrEqual(6)
  expect(getNewPassword().length).toBeLessThanOrEqual(10)
})

test('两次密码输入是否相同 测试', () => {
  // // 获取输入的新密码
  // const getNewPassword = jest.fn()
  // // 获取再次输入的新密码
  // const getNewPasswordAgain = jest.fn()

  // getNewPassword.mockReturnValueOnce('000000')
  // getNewPasswordAgain.mockReturnValueOnce('000000')
  expect(getNewPassword()).toBe(getNewPasswordAgain())

})

test("服务器返回成功", () => {
  // 服务器返回的信息
  // const serverMsg = jest.fn()
  // serverMsg.mockReturnValueOnce({
  //   stauts: 200,
  //   msg: '密码修改成功'
  // })
  expect(serverMsg()).toEqual({
    stauts: 200,
    msg: '密码修改成功'
  })
})

test("服务器返回失败", () => {
  // 服务器返回的信息
  // const serverErrMsg = jest.fn()
  // serverErrMsg.mockReturnValueOnce({
  //   stauts: 400,
  //   msg: 'error'
  // })
  expect(serverErrMsg()).toEqual({
    stauts: 400,
    msg: 'error'
  })
})