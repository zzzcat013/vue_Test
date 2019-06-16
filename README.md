# simple

## 这是一个用git 管理的 vue 范例
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##  远程分支
### 新建远程分支


```新建一个本地分支：

$ git checkout -b dbg_lichen_star
查看一下现在的分支状态:

$ git branch
* dbg_lichen_star
  master
  release
星号(*)表示当前所在分支。现在的状态是成功创建的新的分支并且已经切换到新分支上。

把新建的本地分支push到远程服务器，远程分支与本地分支同名（当然可以随意起名）：

$ git push origin dbg_lichen_star:dbg_lichen_star
使用git branch -a查看所有分支，会看到remotes/origin/dbg_lichen_star这个远程分支，说明新建远程分支成功。

删除远程分支
我比较喜欢的简单方式，推送一个空分支到远程分支，其实就相当于删除远程分支：

$ git push origin :dbg_lichen_star
也可以使用：

$ git push origin --delete dbg_lichen_star
这两种方式都可以删除指定的远程分支```
```

## git 管理
### git command
```
git remote add origin https://github.com/zzzcat013/vue_Test.git

git push -u origin master

git br -a

git co dev

git push -u origin dev

git config --global user.email "6405614+zzzcat013@users.noreply.github.com"

git commit --amend --reset-author

git push

git push -u origin dev  -f 

git pull -f --all
```

## Git 同步远程分支
### git branch -r       #查看远程所有分支
    
    git branch           #查看本地所有分支
    
    git branch -a       #查看本地及远程的所有分支，如下图
    
    git fetch   #将某个远程主机的更新，全部取回本地：
    
    git branch -a  #查看远程分支
    
    git branch  #查看本地分支：
    
    git checkout 分支 #切换分支：
    
    git push origin -d 分支名  #删除远程分支: 
    
     git branch -d 分支名  #删除本地分支
    
    git remote show origin  #查看远程分支和本地分支的对应关系
    
    git remote prune origin #删除远程已经删除过的分支
    
    git push origin -d  #删除远程分支
    
    git remote -v # 查看远程的服务器
    

