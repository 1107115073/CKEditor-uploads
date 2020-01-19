/*
 Copyright (c) 2019, Weison. All rights reserved. 
*/
(function () {
	CKEDITOR.plugins.add('uploads', {
		icons: 'uploads',
		init: function (editor) {
			// 创建指令
			editor.addCommand('uploads', new CKEDITOR.dialogCommand('uploads'));

			// 插件按钮
			editor.ui.addButton('uploads', {
				label: '上传文件',
				command: 'uploads',
				toolbar: 'insert',
				icon: this.path + 'icons/uploads.png'
			});

			// 插件窗口
			CKEDITOR.dialog.add('uploads', this.path + 'dialogs/uploads.js');
		}
	});
})();

