/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Basic sample plugin inserting abbreviation elements into the CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_sample_1.html
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add('abbr', {

	// Register the icons.
	icons: 'abbr',

	// The plugin initialization logic goes inside this method.
	init: function (editor) {

		// Define an editor command that opens our dialog window.
		editor.addCommand('abbr', new CKEDITOR.dialogCommand('abbrDialog'));


		// Create a toolbar button that executes the above command.
		editor.ui.addButton('Abbr', {

			// The text part of the button (if available) and the tooltip.
			label: 'Insert Abbreviation',

			// The command to execute on click.
			command: 'abbr',

			// The button placement in the toolbar (toolbar group name).
			toolbar: 'insert'
		});

		// 避免上下文插件不可用时出错
		if (editor.contextMenu) {
			editor.addMenuGroup('abbrGroup'); // 新增按钮组，区别标准上下文菜单
			editor.addMenuItem('abbrItem', {
				label: 'Edit Abbreviation', // 显示信息
				icon: this.path + 'icons/abbr.png', // 图片
				command: 'abbr', // 指令
				group: 'abbrGroup' // 添加的组
			});
			// 监听其元素是否为 abbr
			editor.contextMenu.addListener(function (element) {
				if (element.getAscendant('abbr', true)) {
					return { abbrItem: CKEDITOR.TRISTATE_OFF }; // 未处于选定状态
				}
			});
		}

		// Register our dialog file -- this.path is the plugin folder path.
		CKEDITOR.dialog.add('abbrDialog', this.path + 'dialogs/abbr.js');

	}
});
