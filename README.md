# webpack2.0-sample-demo
It's my first webpack2.0 demo

greet sample 是按照简书上一篇介绍Webpack入门的文章一步一步走下来的，但是原文是1.x,本sample安装的是2.3.2,因此出入较大，遇到很多坑，求助stackoverflow大神才慢慢解决，另外附上1.x与2.x的差异对比文档：
https://webpack.js.org/guides/migrating/#bannerplugin-breaking-change

在完成此demo的过程中，与原文主要有差异的地方是：
1. -loader不能被省略
2. 不需要另外配置json-loader, 已默认包含
3. 配置plugins的方式与1.x不相同
