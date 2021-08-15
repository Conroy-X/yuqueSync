const fs = require('fs');

const { request, loadYuqueBody } = require('../utils/tools');


async function getRepoList(){
    
    const { baseUrl, user } = global.config.yuqueConfig
    const res = await request(`${baseUrl}/users/${user}/repos`)
    return JSON.parse(res.body)
}

async function getPostList(repoName){
    const { baseUrl, user } = global.config.yuqueConfig
    const res = await request(`${baseUrl}/repos/${user}/${repoName}/docs`)
    const postList = JSON.parse(res.body)
    const posts = {data:[]}
    postList.data.map(post => {
        // eslint-disable-next-line camelcase
        const {id, slug, title, description, book_id, created_at, updated_at, published_at} = post
        posts.data.push({
            id, slug, title, description, book_id, created_at, updated_at, published_at,repo_slug:repoName
        })
    })
    return posts
}

async function syncWriteFile(rawData, repoName) {
    const { postBaseDIr, postDetial } = global.config
    const {meta, content} = loadYuqueBody(rawData)
    let basePath = `/${repoName}`
    if(!fs.existsSync(`${postBaseDIr}${basePath}`)){
        fs.mkdirSync(`${postBaseDIr}${basePath}`)
    }
    if(meta.categories) {
        const categories = meta.categories.match(/[a-zA-Z0-9\u4e00-\u9fa5]+/)[0]
        basePath += `/${categories}`
        if(!fs.existsSync(`${postBaseDIr}${basePath}`)){
            fs.mkdirSync(`${postBaseDIr}${basePath}`)
        }
    }

    const filename = `${rawData.title}.md`
    postDetial[rawData.id].filePath = `${basePath}/${filename}`
    fs.writeFileSync(`${postBaseDIr}${basePath}/${filename}`, content)

    _logger.info(`file meta: ${JSON.stringify(meta)}`)
    _logger.info(`write file sueeceee at ${postBaseDIr}${basePath}/${filename}`)
}

async function getPostDetial(repoName, postName){
    const { baseUrl, user } = global.config.yuqueConfig
    const res = await request(`${baseUrl}/repos/${user}/${repoName}/docs/${postName}`)
    const post = JSON.parse(res.body)
    syncWriteFile(post.data, repoName)
    return JSON.parse(res.body)
}

function configInit() {
    if(!fs.existsSync("./conf/conf.json")) {
        throw new Error("配置文件错误")
    }
    global.config = JSON.parse(fs.readFileSync('./conf/conf.json'))
    global.config.postBaseDIr = global.config.postBaseDIr || __dirname
    if(!fs.existsSync("./conf/postDetial.json")) {
        global.config.postDetial = {}
    } else {
        global.config.postDetial = JSON.parse(fs.readFileSync('./conf/postDetial.json')) 
    }
    return global.config
}

async function delPost(filePath) {
    const { postBaseDIr } = global.config
    fs.rm(`${postBaseDIr}/${filePath}`, (err) => {
        if(err) {
            _logger.error('err:', filePath,  err)
        }
    })
}

module.exports =  {
    getRepoList,
    getPostList,
    getPostDetial,
    configInit,
    syncWriteFile,
    delPost
}





