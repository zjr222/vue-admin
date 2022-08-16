import { MockMethod } from 'vite-plugin-mock'
import { userInfo } from './data'
export default [
    {
        url: '/api/getUserInfo',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: userInfo
            }
        },
    },
] as MockMethod[]