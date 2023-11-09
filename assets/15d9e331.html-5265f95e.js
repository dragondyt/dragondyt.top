const e=JSON.parse(`{"key":"v-0a4f90b1","path":"/8612fa7f/ec060e02/Hadoop/15d9e331.html","title":"win10下hadoop学习","lang":"en-US","frontmatter":{"head":[["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.dragondyt.top/rss.xml","title":"RSS"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.dragondyt.top/feed.json","title":"RSS"}],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.dragondyt.top/atom.xml","title":"RSS"}],["link",{"rel":"amphtml","href":"./8612fa7f/ec060e02/Hadoop/15d9e331.amp.html"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"BlogPosting\\",\\"@id\\":\\"https://blog.dragondyt.top/8612fa7f/ec060e02/Hadoop/15d9e331.html\\",\\"mainEntityOfPage\\":\\"https://blog.dragondyt.top/8612fa7f/ec060e02/Hadoop/15d9e331.html\\",\\"headline\\":\\"win10下hadoop学习\\",\\"name\\":\\"win10下hadoop学习\\",\\"datePublished\\":\\"2021-04-23\\",\\"dateModified\\":\\"2021-04-23\\",\\"author\\":{\\"@type\\":\\"Person\\",\\"@id\\":\\"https://dataliberate.com/author/richard-wallis/#Person\\",\\"name\\":\\"Richard Wallis\\",\\"url\\":\\"https://dataliberate.com/author/richard-wallis/\\",\\"image\\":{\\"@type\\":\\"ImageObject\\",\\"@id\\":\\"https://secure.gravatar.com/avatar/bbdd78abba6116d6f5bfa2c992de6592?s=96&d=mm&r=g\\",\\"url\\":\\"https://secure.gravatar.com/avatar/bbdd78abba6116d6f5bfa2c992de6592?s=96&d=mm&r=g\\",\\"height\\":\\"96\\",\\"width\\":\\"96\\"}},\\"publisher\\":{\\"@type\\":\\"Organization\\",\\"@id\\":\\"https://blog.dragondyt.top\\",\\"name\\":\\"Data Liberate\\",\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"@id\\":\\"https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png\\",\\"url\\":\\"https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png\\",\\"width\\":\\"600\\",\\"height\\":\\"60\\"}},\\"image\\":\\"https://cdn.jsdelivr.net/gh/dyt2015/hexo-image/hadoop-consulting-and-support.svg\\",\\"url\\":\\"https://blog.dragondyt.top/8612fa7f/ec060e02/Hadoop/15d9e331.html\\",\\"isPartOf\\":{\\"@type\\":\\"Blog\\",\\"@id\\":\\"https://blog.dragondyt.top\\",\\"name\\":\\"\\",\\"publisher\\":{\\"@type\\":\\"Organization\\",\\"@id\\":\\"https://blog.dragondyt.top\\",\\"name\\":\\"\\"}},\\"commentCount\\":\\"1\\",\\"comment\\":[{\\"@type\\":\\"Comment\\",\\"@id\\":\\"https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/#Comment1\\",\\"dateCreated\\":\\"2019-06-23 17:31:15\\",\\"description\\":\\"I've been looking for a decent metadata scheme for use in a home-brew library system for the past 4 years now. I'm a big user of schema.org. I found this very interesting, especially the part about reconciliation. I assume you're referring to the process of identifying duplicate representations of works. This has also been one of my biggest struggles. I'll still be waiting for schema.org to mature...\\",\\"author\\":{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeff\\",\\"url\\":\\"http://schoenstatt.link\\"}}],\\"about\\":[{\\"@type\\":\\"Thing\\",\\"@id\\":\\"https://dataliberate.com/category/bibframe/\\",\\"name\\":\\"Bibframe\\",\\"sameAs\\":[\\"https://en.wikipedia.org/wiki/BIBFRAME\\",\\"http://www.wikidata.org/entity/Q17050075\\"]},\\"Data Liberate\\"],\\"wordCount\\":\\"488\\",\\"keywords\\":[\\"hadoop\\",\\"win10下hadoop学习\\"]}"]],"title":"win10下hadoop学习","tags":[{"name":"hadoop","path":"/tags/hadoop/"}],"categories":[{"name":"大数据","path":"/categories/ec060e02/"}],"keywords":["hadoop","win10下hadoop学习"],"date":"2021-04-23T21:55:57.000Z","abbrlink":"15d9e331","permalink":"/8612fa7f/ec060e02/Hadoop/15d9e331.html","cover":"https://cdn.jsdelivr.net/gh/dyt2015/hexo-image/hadoop-consulting-and-support.svg","symbolsCount":"9.9k","symbolsTime":"9"},"headers":[{"level":1,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":1,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":1,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":1,"title":"缺失文件","slug":"缺失文件","link":"#缺失文件","children":[]},{"level":1,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":2,"title":"节点未格式化","slug":"节点未格式化","link":"#节点未格式化","children":[]}]},{"level":1,"title":"启动","slug":"启动","link":"#启动","children":[{"level":2,"title":"访问8088","slug":"访问8088","link":"#访问8088","children":[]},{"level":2,"title":"访问9000","slug":"访问9000","link":"#访问9000","children":[]},{"level":2,"title":"访问9870(hadoop新版本默认)","slug":"访问9870-hadoop新版本默认","link":"#访问9870-hadoop新版本默认","children":[]}]},{"level":1,"title":"关闭","slug":"关闭","link":"#关闭","children":[]},{"level":1,"title":"开发时修改权限","slug":"开发时修改权限","link":"#开发时修改权限","children":[]},{"level":1,"title":"测试","slug":"测试","link":"#测试","children":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"代码编写","slug":"代码编写","link":"#代码编写","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]}]},{"level":1,"title":"结语","slug":"结语","link":"#结语","children":[]}]}`);export{e as data};
