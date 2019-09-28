# CKEditor-uploads
CKeditor 4.x 批量图片上传插件。<br/>
CKeditor 4.x Batch Picture Upload Plug-in.
## 使用流程
1. 下载CKEditor 4.x
   - 请到官网去下载，这是官网的链接 https://ckeditor.com/ckeditor-4/download/
2. 配置插件
  - 将 uploads 插件复制到 CKEditor 目录下的 plugins 目录。
  - 在 CKEditor 目录的 config.js 中启动插件。
  - 在 CKEditor 目录的 config.js 中配置图片上传URL。
## 参考配置
``` js
CKEDITOR.editorConfig = function(config) {

  // 启用插件
  config.extraPlugins = 'uploads';
  
  // 上传URL，该 URL 规范遵循 CKEditor 图片上传规范
  config.filebrowserBrowseUrl = 'http://127.0.0.1:8110/system/upload';
  config.filebrowserUploadUrl = 'http://127.0.0.1:8110/system/upload';
  
  // CKEditor图片上传接口返回格式
  /*
  成功返回:
  {
    "fileName": "8S[TBUTHJ5EXE}2F5LBE1]D.png",
    "uploaded": 1,
    "url": "https://ckeditor.com/apps/ckfinder/userfiles/images/8S%5BTBUTHJ5EXE%7D2F5LBE1%5DD.png"
  }	
  失败返回：
  {
    "uploaded": 0,
    "error": {
      "message": "失败原因"
    }
  }
  */
  
};
```
