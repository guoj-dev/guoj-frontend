// import gql from 'graphql-tag'
import * as  loginGql from "../graphql/login.graphql";
import apolloProvider from "../graphql";

/**
 * 登录
//  * @param data 登录的表单数据
 */

export const login = (username, password) => {
  return apolloProvider.defaultClient
    .mutate({
      mutation: loginGql.loginQuery,
      variables: {
        email: username,
        password: password,
      }
      /* 如果一个获取数据的列表，在参数没有变化的时候，那我们希望用后台数据的缓存，则需要在请求下方加上  fetchPolicy: 'network-only'来做缓存 */
    })
};

/**
 * 登出
 */
export const logout = () => {};

/**
 * 获取个人信息
 */
export const getCurrentUser = () => {};

/**
 * 获取个人动态
 * @param {*} userId 用户ID
 */
// export const getAccessLogsByUserId = (userId) => {

// };

/**
 * 保存个人配置
 */
export const saveUserProfile = (data) => {
  return data;
};

/**
 * 修改密码
 */
export const updatePassword = (data) => {
  return data;
};
