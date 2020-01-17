# CKEditor-uploads

CKeditor 4.x 批量图片上传插件
CKeditor 4.x Batch Picture Upload Plug-in.

## 下载

```base
git clone https://github.com/yplian/CKEditor-uploads.git
```

## Demo

demo文件下有简单案例，配合使用说明查看。

### 使用说明

1、将plugins/uploads文件放在自己项目的plugins目录下。
2、在index.html中，如下添加uploads配置对象。

```js
CKEDITOR.replace('editor1', {
      uploads: function () {
         return {
            url: 'http://127.0.0.1:5500/test',
            // 自定义的请求头
            header: {
                  token: '123456'
            },
            // 自定义的请求体
            body: {
                  size: 10
            },
            /* 为保证确认后正确回显
             * 服务器上传请求返回值默认为{code:000,url:'http://***'},默认值为url
             * 如果返回体为{code:000,data:{url:'http://***'}},请设置图片路径为 resUrl:'data.url'
             * 错误返回{code:401,error:'权限不足.'}
            */
            resUrl: 'url',
            // 是否开启多文件上传，默认false,不开启
            multiple: false,
            // 回显图片/链接 默认回显图片 true
            isImg: true
         }
      }
});
```

3、在ckeditor的配置文档中引入插件，默认`config.js`中

```js
// 启用插件
config.extraPlugins = 'uploads';
```

### 配置说明

html中配置说明：

#### url

图片长传的服务器地址，不填时会共享`config.js`使用`config.filebrowserUploadUrl`的地址。

#### header

请求头需要添加的信息

#### body

请求体需要添加的信息

#### 例子

如例子配置，请求体显示

![demo](/source/demo.png)
