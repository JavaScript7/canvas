import Vue from 'vue'
import axios from 'axios'
import prompt from './components/common/prompt'

const ajax = function ajax (options,sucCallback,errCallback){
    let count = 3
    let vm = new Vue()
    const request = (options) => {
        axios(options)
        .then((res) => {
            sucCallback.bind(this)(res)
        })
        .catch((res) => {
            if (options.method == 'get') {
                count--
                if (count === 0){
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
                    const msg = res.response.data.msg
                    const statusMessage = feedback[status] || '连接失败'
                    const tip = msg || statusMessage
                    prompt.warnMsg.bind(vm)(tip)
                    errCallback.bind(this)(res.response)
                    return
                }
                request(options)
            }else{
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
                const msg = res.response.data.msg
                const statusMessage = feedback[status] || '连接失败'
                const tip = msg || statusMessage
                prompt.warnMsg.bind(vm)(tip)
                errCallback.bind(this)(res.response)
            }
        })
    }
    request(options)
}
export default ajax