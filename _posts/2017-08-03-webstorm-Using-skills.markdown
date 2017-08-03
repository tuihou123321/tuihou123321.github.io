---
layout: post
title:  "webstorm 使用技巧"
date:   2017/8/3 16:28:14 
categories: ide
---

##webstorm2017 与sublime3 对比
>webstorm，与sublime都是非常不错的代码编辑工具，但是设计理念完全不一样。
webstorm是一个功能齐备的IDE，重型武器，各种配置项非常完善；
sublime像一把小巧的瑞士军刀，界面简洁，大部分设置操作都是通过快捷键，命令行来实现，扩展性能极强（和chrome设计理念很像，都是依靠丰富的插件来实现更强大的功能）；


**webstorm特色功能：**
1. 语法检查(jsLint,ESLint)，js/css
2. emmet快速代码编写功能
3. 内置debug功能，断点调试
4. 可以直接运行js代码,带控制台面板
4. 结合版本管理功能（git,svn）
5. 内置版本比较功能，每隔一段时间会自动保存，并且可以快速与每个版本进行比较；
5. 自带服务器功能，可直接模拟服务器环境
6. 可直接运行npm命令，快速启动项目
7. 可快速调用代码模板，ctrl+j
8. 函数快速间快速跳转，ctrl+鼠标左击；
9. 快速定位变量申请处，ctrl+b；
10. 自动保存，不用频繁按保存键


**webstorm体验不如sublime的地方：**
1. 快捷键功能没有sublime强大：
>比如sublime常用的快捷功能：

    - alt+f3快速选中所有相同的词（webstorm可以使用ctrl+f来间接实现该功能）；
    - ctrl+j 合拼多行
    - ctrl+shift+y  自动计算
    - ctrl+shift+enter 在上一行插入
    - f12 在默认浏览中打开
    - ctrl+shift+n/j    快速新建html5,js文件



##webstorm皮肤插件推荐
[Material Theme](https://github.com/ChrisRM/material-theme-jetbrains "Material Theme皮肤预览")
更多主题下载：http://www.phpstorm-themes.com/



##webstorm常用快捷键
**定位**
    当前内容搜索 ctrl+f
    全局内容搜索 ctrl+shift+f
    文件名搜索  ctrl+shift+n
    定位到指定代码行  ctrl+G
    定位到变量申明处 ctrl+b
    光标定位到代码块的前/后面 ctrl+[/]
       光标定位到行首/尾  home/end
       光标定位到下   shift+回车

**选择**
    选中单词(多次按扩大选择范围)   ctrl+w
    选择下一个相同的词 alt+j
 

**浏览**
    在默认浏览器中打开  alt+f2(再回车)
    上/下一个标签页  alt+方向（左/右）
    关闭/恢复标签页  ctrl+f4
    alt+ctrl+L  格式化代码查看

**创建**
    新建文件  alt+insert (再选择新建的类型)

**编辑**
    复制一行（复制选中内容）  ctrl+d
    删除一行  ctrl+y
    当前内容替换 ctrl+r
    全局内容替换 ctrl+shift+r
    行上/下移  ctrl+shift+方向上/下
    指定包裹层  ctrl+alt+t
    重命名  shift+f6 (选中文件后再按，会自动把关联的文件名同时修改过来)
   ctrl+r  替换内容
   输出模板 ctrl+j  

**查看**
    切换目录侧边栏 alt+1
    切换收藏侧边栏 alt+2
    折叠/展开选中的代码块  ctrl+'+/-'
    显示/隐藏所以打开的侧边栏  ctrl+shift+f12
    分屏功能   鼠标右键选中标签页
    最近修改过的文件  ctrl+e
    显示当前css选择器或者JS函数的详细信息  ctrl+shift+i

**其他功能**
    收藏此文件  alt+shift+f   
    快速查找并使用编辑所有功能  ctrl+shift+a

**debug**相关
    f8  下一步（不进入函数）
    f7  单步执行
    shift+f7  进入函数内
    shift+f8 跳出
    alt+f9 













