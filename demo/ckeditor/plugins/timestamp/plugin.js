// 添加插件 CKEDITOR.plugins.add
CKEDITOR.plugins.add('timestamp', {
    icons: 'timestamp',
    init: function (editor) {
        //Plugin logic goes here.

        // 定义一个指令绑定相应的插件
        editor.addCommand('insertTimestamp', {
            exec: function (editor) {
                var now = new Date();
                editor.insertHtml('The current date and time is: <em>' + now.toString() + '</em>');
            }
        });

        // 在工具栏定义绑定按钮
        editor.ui.addButton('Timestamp', {
            label: 'Insert Timestamp', // 按钮的文本部分（如果可见）及其工具提示
            command: 'insertTimestamp', // 激活按钮后要执行的命令。上面那个函数
            toolbar: 'insert' // 将在其中添加按钮的工具栏组
        });
    }
});
