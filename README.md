# reactWheels

--save -S 一个保存为项目运行时的依赖 比如axios 
--save-dev -D 一个保存为项目编译阶段的依赖比如webpack

yarn add webpack --dev 
yarn add jquery  (空置不写)

# 执行命令
    新建项目 gitclone

    npm init -y

    yarn add webpack@4.29.6 webpack-cli@3.2.3 --dev

    <!-- 安装第一个loader -->
    yarn add awesome-typescript-loader --dev  

    yarn add typescript --dev

#   npx webpack  运行正常

    yarn add webpack-dev-server --dev
        webpack-dev-server的作用，是把编译结果放到内存，没有生成文件
            http://localhost:8080/wheels.js

#    npx webpack-dev-server  运行正常

    yarn add html-webpack-plugin --dev 
    

# 上传到新的仓库
    git remote add wheels ***git地址
    git push -u wheels master
    

    添加react仓库
    yarn add react react-dom

    处理报错
    yarn add @types/react --dev
    yarn add @types/react-dom --dev
    
    依赖版本可能需要统一到16.8.2

    跨平台适配
    yarn add cross-env --dev

    安装测试工具
    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

    安装ts-jest
    yarn add ts-jest --dev

    处理报错
    yarn add @types/jest --dev
    yarn add @types/react-test-renderer --dev 