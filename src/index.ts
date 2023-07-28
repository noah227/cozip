const AdmZip = require("adm-zip")
const path = require("path")
const fs = require("fs")

export type TIncludeItem = [string, boolean?, (RegExp | ((filename: string) => boolean))?]

const getZipPath = (p: string) => {
    if(fs.statSync(p).isDirectory()) return p
    return path.dirname(p) === "." ? "" : path.dirname(p)
}
/**
 * 打包
 * @param savePath zip文件保存路径
 * @param includes 打包文件列表
 * @param callback
 */
export default (savePath: string, includes: TIncludeItem[], callback?: (err?: Error) => void) => {
    const zip = new AdmZip("")
    includes.forEach(([i, isFolder, filter]) => {
        if (isFolder) {
            zip.addLocalFolder(i, getZipPath(i), filter)
        } else zip.addLocalFile(i, getZipPath(i))
    })

    zip.writeZip(savePath, (err?: Error) => {
        callback && callback(err)
    })
}
