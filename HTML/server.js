const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// 设置存储目录
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'D:/Mybbs/source/_posts');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 使用原始文件名
    }
});

// 初始化multer
const upload = multer({ storage: storage });

// 处理文件上传的路由
app.post('/upload', upload.single('markdownFile'), (req, res) => {
    res.send('文件上传成功！');
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/upload', upload.single('markdownFile'), (req, res) => {
    console.log(req.file); // 输出上传的文件信息
    res.send('文件上传成功！');
});

