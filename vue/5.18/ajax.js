import Vue from 'vue'
import axios from 'axios'
import {$Message} from '@/public/prompt/prompt.js'
import { log } from '@/public/util.js'

const ajax = function ajax (request) {
    let options = {
        method: request.method || 'get',
        url: request.url || '/',
        data: request.data || null
    };
    let {successCallback, errorCallback} = request;
    let count = 3;
    let _this = new Vue;
    const connect = (options) => {
        axios(options).then((res) => {
            successCallback(res)
            _this.$destroy()
        }).catch((res) => {
            const errorResponse = (res) => {
                const feedback = {
                    400: '请求参数错误',
                    401: '登录已过期，请重新登录',
                    403: '没有访问权限',
                    404: '404 Not Found',
                    500: '500 服务器异常',
                    501: '501 服务器异常',
                    502: '502 服务器异常',
                    503: '503 服务器异常',
                    504: '504 服务器异常',
                }
                const status = res.response.status
                const msg = res.response.data.msg || res.response.data
                const statusMessage = feedback[status] || '连接异常，请稍后再试'
                const tip = msg || statusMessage
                $Message.warning,bind(_this)(tip)
                errorCallback(res.response)
                _this.$destroy()
            }
            if (options.method == 'get') {
                count--
                if (count === 0) {
                    errorResponse(res)
                } else {
                    connect(options)
                }
            } else {
                errorResponse(res)
            }
        })
    }
    connect(options)
}
export default ajax