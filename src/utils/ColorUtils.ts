/**
 * 颜色包装器
 * * 包装成{ 900: '#xxx', 800: '#xxx' }的形式
 * @param hex 长度最小为1，最大为10的 `#xxxxxx` 数组
 */
export function colorWrapper(hex: string[]) {
    if (!(hex instanceof Array) || hex.length === 0 || hex.length > 10) {
        throw new Error('传入参数必须为长度在[1, 10]的十六进制颜色数组')
    }
    const result: Record<number, string> = {}
    ;[900, 800, 700, 600, 500, 400, 300, 200, 100, 50].forEach((key, index) => {
        if (index >= hex.length) {
            result[key] = hex[hex.length - 1]
        } else {
            result[key] = hex[index]
        }
    })
    return result
}