/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const { getRepoList, getPostList, getPostDetial, delPost } = require('./common')

async function yuqueInit() {
 
    const {postDetial} = global.config
    const repoList = await getRepoList()
    const postMapDetial = {}
    const postAdd = []
    const postUpdate = []
    const postDel = []
    const postIDList = []
    for(const repo of repoList.data) {
        const postList = await getPostList(repo.slug)
        postList.data.map(post => {
            postMapDetial[post.id] = postDetial[post.id] ? Object.assign(postDetial[post.id], {...post, repo_slug:repo.slug}) : {...post, repo_slug:repo.slug}
            postIDList.push(post.id)

            if(!postDetial[post.id]) {
                // 新增
                postAdd.push({repo_slug: repo.slug, slug: post.slug})
            } else if(postDetial[post.id].published_at < post.published_at) {
                // 更新
                postDel.push(post.id)
                postUpdate.push({repo_slug: repo.slug, slug: post.slug})
            } else {
                // 未作修改
            }

        })
    }
    // 删除了的
    
     postDel.push(...Object.keys(postDetial).filter( s => !postIDList.includes(Number(s))))
     _logger.info(`postDel:${postDel}\npostAdd:${postAdd}\npostUpdate:${postUpdate}`)
     global.config.postDetial = postMapDetial

     for(const id of postDel) {
        _logger.warn(postDetial[id].filePath)
         if(postDetial[id].filePath) {
            await delPost(postDetial[id].filePath)
         }
    }


    for(const post of [...postAdd, ...postUpdate]) {
        await getPostDetial(post.repo_slug,  post.slug)
    }
    

    fs.writeFileSync("./conf/postDetial.json", JSON.stringify(postMapDetial), {flag:  fs.existsSync("./conf/postDetial.json")? 'w' :'wx+'})
    return true
}

module.exports = {
    yuqueInit
}
