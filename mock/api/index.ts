import { MockMethod } from 'vite-plugin-mock'
import { userInfo } from '../data'
const Mock = require('mockjs')
export default [
    {
        url: '/api/getUserInfo',
        method: 'post',
        response: ({ query }) => {
            return {
                code: 200,
                data: userInfo
            }
        },
    },
] as MockMethod[]