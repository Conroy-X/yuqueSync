 - 获取当前用户信息 ```curl -H "X-Auth-Token: vCUhFePqSDp2ikyrhnY9llrKru6BAaD3DyE9Exua" https://wisper.yuque.com/api/v2/users/xxbin-qusi1```

```json
{
    "data":{
        "id":2682960,
        "type":"User",
        "space_id":0,
        "account_id":2191296,
        "login":"xxbin-qusi1",
        "name":"xx斌",
        "avatar_url":"https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1602487864560-c7bb6e00-7611-4651-a182-e3c436205a6d.jpeg",
        "books_count":1,
        "public_books_count":0,
        "followers_count":0,
        "following_count":0,
        "public":1,
        "description":null,
        "created_at":"2020-10-12T07:31:30.000Z",
        "updated_at":"2021-08-05T07:49:05.000Z",
        "_serializer":"v2.user_detail"
        }
}
```

---

- 获取当前用户仓库信息 ```curl -H "X-Auth-Token: vCUhFePqSDp2ikyrhnY9llrKru6BAaD3DyE9Exua" https://wisper.yuque.com/api/v2/users/xxbin-qusi1/repos```
```json
{
    "data": [
        {
            "id": 20468389,
            "type": "Book",
            "slug": "it25pf",
            "name": "学习笔记",
            "user_id": 2682960,
            "description": "点滴学习，随时记录",
            "creator_id": 2682960,
            "public": 0,
            "items_count": 2,
            "likes_count": 0,
            "watches_count": 1,
            "content_updated_at": "2021-08-05T07:49:05.230Z",
            "updated_at": "2021-08-05T07:49:05.000Z",
            "created_at": "2021-08-05T07:49:05.000Z",
            "namespace": "xxbin-qusi1/it25pf",
            "user": {
                "id": 2682960,
                "type": "User",
                "login": "xxbin-qusi1",
                "name": "xx斌",
                "description": null,
                "avatar_url": "https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1602487864560-c7bb6e00-7611-4651-a182-e3c436205a6d.jpeg",
                "followers_count": 0,
                "following_count": 0,
                "created_at": "2020-10-12T07:31:30.000Z",
                "updated_at": "2021-08-05T07:49:05.000Z",
                "_serializer": "v2.user"
            },
            "_serializer": "v2.book"
        }
    ]
}
```

---

- 获取当前repo的文档list```
https://wisper.yuque.com/api/v2/repos/xxbin-qusi1/mybqal/docs```
```json
{
    "data": [
        {
            "id": 50488111,
            "slug": "yx9z9k",
            "title": "kafka 基本操作",
            "description": null,
            "user_id": 2682960,
            "book_id": 20468612,
            "format": "lake",
            "public": 1,
            "status": 1,
            "view_status": 0,
            "read_status": 1,
            "likes_count": 0,
            "comments_count": 0,
            "content_updated_at": "2021-08-05T08:12:49.000Z",
            "created_at": "2021-08-05T08:12:49.000Z",
            "updated_at": "2021-08-05T08:12:50.000Z",
            "published_at": "2021-08-05T08:12:49.000Z",
            "first_published_at": "2021-08-05T08:12:49.000Z",
            "draft_version": 0,
            "last_editor_id": 2682960,
            "word_count": 124,
            "cover": null,
            "custom_description": null,
            "last_editor": {
                "id": 2682960,
                "type": "User",
                "login": "xxbin-qusi1",
                "name": "rik",
                "description": null,
                "avatar_url": "https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1602487864560-c7bb6e00-7611-4651-a182-e3c436205a6d.jpeg",
                "followers_count": 0,
                "following_count": 0,
                "created_at": "2020-10-12T07:31:30.000Z",
                "updated_at": "2021-08-05T08:10:06.000Z",
                "_serializer": "v2.user"
            },
            "book": null,
            "_serializer": "v2.doc"
        }
    ]
}
```

- 获取单片文章```curl -H "X-Auth-Token: vCUhFePqSDp2ikyrhnY9llrKru6BAaD3DyE9Exua" https://wisper.yuque.com/api/v2/repos/xxbin-qusi1/mybqal/docs/yx9z9k```
```json
{
    "abilities": {
        "update": true,
        "destroy": true
    },
    "data": {
        "id": 50488111,
        "slug": "yx9z9k",
        "title": "kafka 基本操作",
        "book_id": 20468612,
        "book": {
            "id": 20468612,
            "type": "Book",
            "slug": "mybqal",
            "name": "记录",
            "user_id": 2682960,
            "description": "",
            "creator_id": 2682960,
            "public": 0,
            "items_count": 1,
            "likes_count": 0,
            "watches_count": 1,
            "content_updated_at": "2021-08-05T08:12:50.038Z",
            "updated_at": "2021-08-05T08:12:54.000Z",
            "created_at": "2021-08-05T08:10:06.000Z",
            "namespace": "xxbin-qusi1/mybqal",
            "user": {
                "id": 2682960,
                "type": "User",
                "login": "xxbin-qusi1",
                "name": "xx斌",
                "description": null,
                "avatar_url": "https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1602487864560-c7bb6e00-7611-4651-a182-e3c436205a6d.jpeg",
                "books_count": 3,
                "public_books_count": 0,
                "followers_count": 0,
                "following_count": 0,
                "created_at": "2020-10-12T07:31:30.000Z",
                "updated_at": "2021-08-05T08:10:06.000Z",
                "_serializer": "v2.user"
            },
            "_serializer": "v2.book"
        },
        "user_id": 2682960,
        "creator": {
            "id": 2682960,
            "type": "User",
            "login": "xxbin-qusi1",
            "name": "xx斌",
            "description": null,
            "avatar_url": "https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1602487864560-c7bb6e00-7611-4651-a182-e3c436205a6d.jpeg",
            "books_count": 3,
            "public_books_count": 0,
            "followers_count": 0,
            "following_count": 0,
            "created_at": "2020-10-12T07:31:30.000Z",
            "updated_at": "2021-08-05T08:10:06.000Z",
            "_serializer": "v2.user"
        },
        "format": "lake",
        "body": "kafka 重启<br />\nzookeeper: ./zookeeper-server-start.sh ../config/zookeeper.properties >> /logs/zookeeper.log 2>&1 &<br />\nkafka: ./kafka-server-start.sh ../config/server.properties >> /logs/zookeeper.log 2>&1 &\n\n查看 IOA_EVENT 数据<br />\n./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic IOA_EVENT --from-beginning\n\nNumber.parseInt(new Date().getTime() / 1000)\n\n1. 更新config_query二进制文件\n2. 更新event_deliver二进制文件\n3. 更新yudian_server二进制文件\n4. 更新 /data/services/pcmgr_enterprise/data/user_config.dat  文件, 修改或增加如下配置\n\n```config\n[event_deliver]\nenabled = 1\ntype = \"kafka\"\nevent_filter = [7002, 7003, 7004, 7006, 7007, 7009, 7014, 7015, 7302, 7028]\ntarget_kafka_address = \"127.0.0.1:9092\"\ntarget_kafka_topic = \"IOA_EVENT\"\nkafka_sasl_mechanism = \"PLAIN\"\nkafka_sasl_version = \"\"\nkafka_sasl_username = \"\"\nkafka_sasl_password = \"\"\n```\n\n5. 更新数据库\n\n```sql\ninsert into system_config (name, value) VALUES  ('kafkaConfig', '`{\"target_kafka_address\":\"127.0.0.1:485\",\"target_kafka_topic\":\"IOA_EVENT\",\"kafka_sasl_mechanism\":\"open\",\"kafka_sasl_username\":\"userName\",\"kafka_sasl_password\":\"PassWord\"}`')\n```\n",
        "body_draft": "",
        "body_html": "<!doctype html><p>kafka 重启<br />\nzookeeper: ./zookeeper-server-start.sh ../config/zookeeper.properties &gt;&gt; /logs/zookeeper.log 2&gt;&amp;1 &amp;<br />\nkafka: ./kafka-server-start.sh ../config/server.properties &gt;&gt; /logs/zookeeper.log 2&gt;&amp;1 &amp;</p><p><br /></p><p>查看 IOA_EVENT 数据<br />\n./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic IOA_EVENT --from-beginning</p><p><br /></p><p>Number.parseInt(new Date().getTime() / 1000)</p><p><br /></p><ol start=\"1\"><li>更新config_query二进制文件</li></ol><ol start=\"2\"><li>更新event_deliver二进制文件</li></ol><ol start=\"3\"><li>更新yudian_server二进制文件</li></ol><ol start=\"4\"><li>更新 /data/services/pcmgr_enterprise/data/user_config.dat  文件, 修改或增加如下配置</li></ol><p><br /></p><pre data-lang=\"config\"><code>[event_deliver]\nenabled = 1\ntype = &quot;kafka&quot;\nevent_filter = [7002, 7003, 7004, 7006, 7007, 7009, 7014, 7015, 7302, 7028]\ntarget_kafka_address = &quot;127.0.0.1:9092&quot;\ntarget_kafka_topic = &quot;IOA_EVENT&quot;\nkafka_sasl_mechanism = &quot;PLAIN&quot;\nkafka_sasl_version = &quot;&quot;\nkafka_sasl_username = &quot;&quot;\nkafka_sasl_password = &quot;&quot;</code></pre><p><br /></p><ol start=\"5\"><li>更新数据库</li></ol><p><br /></p><pre data-lang=\"sql\"><code>insert into system_config (name, value) VALUES  ('kafkaConfig', '`{&quot;target_kafka_address&quot;:&quot;127.0.0.1:485&quot;,&quot;target_kafka_topic&quot;:&quot;IOA_EVENT&quot;,&quot;kafka_sasl_mechanism&quot;:&quot;open&quot;,&quot;kafka_sasl_username&quot;:&quot;userName&quot;,&quot;kafka_sasl_password&quot;:&quot;PassWord&quot;}`')</code></pre>",
        "body_lake": "<!doctype lake><p>kafka 重启<br />\nzookeeper: ./zookeeper-server-start.sh ../config/zookeeper.properties &gt;&gt; /logs/zookeeper.log 2&gt;&amp;1 &amp;<br />\nkafka: ./kafka-server-start.sh ../config/server.properties &gt;&gt; /logs/zookeeper.log 2&gt;&amp;1 &amp;</p><p><br /></p><p>查看 IOA_EVENT 数据<br />\n./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic IOA_EVENT --from-beginning</p><p><br /></p><p>Number.parseInt(new Date().getTime() / 1000)</p><p><br /></p><ol start=\"1\"><li>更新config_query二进制文件</li></ol><ol start=\"2\"><li>更新event_deliver二进制文件</li></ol><ol start=\"3\"><li>更新yudian_server二进制文件</li></ol><ol start=\"4\"><li>更新 /data/services/pcmgr_enterprise/data/user_config.dat  文件, 修改或增加如下配置</li></ol><p><br /></p><card type=\"block\" name=\"codeblock\" value=\"data:%7B%22id%22%3A%22816590a7%22%2C%22mode%22%3A%22config%22%2C%22code%22%3A%22%5Bevent_deliver%5D%5Cnenabled%20%3D%201%5Cntype%20%3D%20%5C%22kafka%5C%22%5Cnevent_filter%20%3D%20%5B7002%2C%207003%2C%207004%2C%207006%2C%207007%2C%207009%2C%207014%2C%207015%2C%207302%2C%207028%5D%5Cntarget_kafka_address%20%3D%20%5C%22127.0.0.1%3A9092%5C%22%5Cntarget_kafka_topic%20%3D%20%5C%22IOA_EVENT%5C%22%5Cnkafka_sasl_mechanism%20%3D%20%5C%22PLAIN%5C%22%5Cnkafka_sasl_version%20%3D%20%5C%22%5C%22%5Cnkafka_sasl_username%20%3D%20%5C%22%5C%22%5Cnkafka_sasl_password%20%3D%20%5C%22%5C%22%22%7D\"></card><p><br /></p><ol start=\"5\"><li>更新数据库</li></ol><p><br /></p><card type=\"block\" name=\"codeblock\" value=\"data:%7B%22id%22%3A%22384f6da4%22%2C%22mode%22%3A%22sql%22%2C%22code%22%3A%22insert%20into%20system_config%20(name%2C%20value)%20VALUES%20%20('kafkaConfig'%2C%20'%60%7B%5C%22target_kafka_address%5C%22%3A%5C%22127.0.0.1%3A485%5C%22%2C%5C%22target_kafka_topic%5C%22%3A%5C%22IOA_EVENT%5C%22%2C%5C%22kafka_sasl_mechanism%5C%22%3A%5C%22open%5C%22%2C%5C%22kafka_sasl_username%5C%22%3A%5C%22userName%5C%22%2C%5C%22kafka_sasl_password%5C%22%3A%5C%22PassWord%5C%22%7D%60')%22%7D\"></card>",
        "body_draft_lake": "",
        "public": 1,
        "status": 1,
        "view_status": 0,
        "read_status": 1,
        "likes_count": 0,
        "comments_count": 0,
        "content_updated_at": "2021-08-05T08:12:49.000Z",
        "deleted_at": null,
        "created_at": "2021-08-05T08:12:49.000Z",
        "updated_at": "2021-08-05T08:17:41.000Z",
        "published_at": "2021-08-05T08:12:49.000Z",
        "first_published_at": "2021-08-05T08:12:49.000Z",
        "word_count": 124,
        "cover": null,
        "description": null,
        "custom_description": null,
        "hits": 0,
        "_serializer": "v2.doc_detail"
    }
}
```