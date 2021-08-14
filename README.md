### 需求列表

- 新建或者更新的东西需要同步到仓库
    - 利用一个JSON文件去初始化并维护整个语雀空间
    - 时间统一用形如  20210804203445 这样的记录 或者用时间戳也行
- 初始化语雀空间
    - 读取配置信息语雀空间baseURL， secKey
    - 读取当前语雀空间的仓库list， 并检测是否有对应的文件夹， 没有的话就新建一个
    - 读取当前仓库的文件夹， 并检测是否有对应的文件夹， 没有的话就新建一个
    - 读取当前文件夹的笔记， 写入文件，并且维护json文件
    <!-- 以单个语雀空间为基础 -->
```json
{
    "autho":"***",
    // 空间
    "space":[{
            // 仓库
        "spaceName":"name_1",
        "repo_data":[{   
            // 分组
            "repo_name":"",
            "folder_data":[{
                // 文章
                "postName":"123",
                "author":"",
                "create_time":"new Date()",
                "update_time":"new Date()",
                "update_history":[{
                    "author":"",
                    "update_time":""
                }]
            }],
            "create_time":"new Date()",
            "update_time":"new Date()"
            }],
        "create_time":"new Date()",
        "update_time":"new Date()"
    }],
    "create_time":"new Date()",
    "update_time":"new Date()"
}
```
---
### blog需要

- 可以沿用kblog的样式， 我觉得还可以， 或者我可以自己再去写一套， 其实都还比较简单
- blog我想以仓库为base， 作为一级菜单，
- 需要结合category， 作为分类， 这边具体的分类还需要细想细想
- 分组 需要作为一层路由/externalURL_random/floder/category/post_***
- tag检索为一个子页面， 一个包含文章中有这个tag的list的的一个页面, 

### 配置
- 配置文件修改 example_conf.json  ——> conf.json