/*
 Copyright (c) 2019, Weison. All rights reserved. 
*/
(function() {
	CKEDITOR.dialog.add('uploads', function(editor) {

		// 视图对象
		var bi =
			'data:image/png;base64,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';
		var vbg = 'center url(\'' + bi + '\') no-repeat';
		var uicv = '<div id="uicv" style="width: 680px; height: 286px; overflow-y: scroll; background: ' + vbg +
			'; display: flex; display: -ms-flexbox; display: -webkit-flex; flex-wrap: wrap; align-content: flex-start;"></div>';

		// 上传状态
		var ups = {};

		function isUp() {
			return Object.keys(ups).length > 0;
		}

		// 请求方法
		var url = editor.config.filebrowserUploadUrl;

		function http(obj) {
			if (!url) {
				return alert('未配置上传URL');
			}
			// 创建标识
			ups[obj.file.name] = true;
			// 创建进度
			obj.progress = progress();
			obj.div.appendChild(obj.progress);
			obj.progress.onclick = function() {
				!obj.src && http(obj);
			}
			// Ajax 请求
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var ret = JSON.parse(xhr.responseText || '{}');
					if (ret.uploaded === 1) {
						obj.src = ret.url;
						obj.progress.setAttribute('style', percentage(100, true));
					} else {
						delete obj.src;
						var msg = (ret.error || {}).message;
						obj.progress.title = (msg ? msg + '，' : '') + '点击重新上传';
						obj.progress.setAttribute('style', percentage(100, false));
					}
					console.log(ret);
				}
			}
			// 完成删除
			xhr.onloadend = function(e) {
				delete ups[obj.file.name];
			};
			// 进度更新
			xhr.onprogress = function(e) {
				if (e.lengthComputable) {
					obj.progress.setAttribute('style', percentage(e.loaded / e.total * 100, true))
				}
			};
			// 错误提示
			xhr.onerror = function(e) {
				obj.progress.setAttribute('style', percentage(100, false));
				obj.progress.title = '点击重新上传';
			};
			// 提交请求
			xhr.open("POST", url, true);
			var fd = new FormData();
			fd.append('upload', obj.file);
			fd.append('type', 'Images');
			fd.append('responseType', 'json');
			xhr.send(fd);
		}

		// 选择对象
		function choice() {
			return window.uic || (function() {
				var ne = document.createElement('input');
				ne.setAttribute('type', 'file');
				ne.setAttribute('multiple', 'multiple');
				ne.setAttribute('accept', 'image/*');
				ne.style.display = 'none';
				document.body.appendChild(ne);
				return window.uic = ne;
			})();
		}

		// 窗口标签
		var ves;

		function vessel() {
			return ves || (ves = document.querySelector("#uicv"));
		}

		// 取未上传
		function unupload() {
			var upd = [];
			var uio = (window.uio || []);
			for (var i = 0; i < uio.length; i++) {
				!uio[i].src && upd.push(uio[i]);
			}
			return upd;
		}

		// 取已上传
		function uploaded() {
			var upd = [];
			var uio = (window.uio || []);
			for (var i = 0; i < uio.length; i++) {
				uio[i].src && upd.push(uio[i]);
			}
			return upd;
		}

		// 事件处理
		choice().onchange = function() {
			var fs = window.uic.files;
			// 空触发
			if (fs.length == 0) {
				return clean();
			}
			// 构造对象
			var uio = window.uio || (window.uio = []);
			for (var i = 0; i < fs.length; i++) {
				var o = {};
				o.file = fs[i];
				// 构造包装
				o.div = document.createElement('div');
				o.div.setAttribute('style',
					'width: 120px; height: 120px; border: 1px solid #ccc; border-radius: 3px; margin: 0 10px 10px 0; background: #fff; text-align: center; line-height: 119px; position: relative;'
				);
				// 构造图片
				o.img = document.createElement('img');
				o.img.setAttribute('style', 'border-radius: 3px; max-width: 100%; max-height: 100%; vertical-align: middle;');
				// 图片预览
				preview(fs[i], o.img);
				o.div.appendChild(o.img);
				vessel().appendChild(o.div);
				uio.push(o);
			}
			// 变换背景
			backdrop();
		};

		// 文件预览
		function preview(file, img) {
			var fr = new FileReader();
			fr.readAsDataURL(file);
			fr.onload = function() {
				img.src = fr.result;
			}
		}

		// 构建进度条
		function progress() {
			var el = document.createElement('div');
			el.title = '正在上传...';
			el.setAttribute('style', percentage(10, true));
			return el;
		}

		// 进度样式
		function percentage(ratio, state) {
			var cr = ratio < 10 ? 10 : ratio;
			var lg = 'linear-gradient(#FFF ' + (100 - cr) + '%, #' + (state ? '1ABC9C' : 'F44') + ' ' + cr + '%);';
			return 'position: absolute;bottom: 1px;right: 1px;height: 4px;width: 4px;padding: 4px;border: 1px solid #CDCDCD;border-radius: 100%; text-align: center;' +
				'background: -webkit-' + lg + 'background: -o-' + lg + 'background: -moz-' + lg + 'background: ' + lg;
		}

		// 清空选中
		function clean() {
			choice().value = ''
			while ((window.uio || []).length > 0) {
				var a = window.uio.pop();
				vessel().removeChild(a.div);
			}
			// 变换背景
			backdrop();
		}

		// 容器背景
		function backdrop() {
			vessel().style.background = (window.uio || []).length > 0 ? '' : vbg;
		}

		// 窗口对象
		return {
			title: '图片上传',
			width: 600,
			height: 300,
			resizable: CKEDITOR.DIALOG_RESIZE_NONE,
			contents: [{
				id: 'upc',
				elements: [{
					type: 'html',
					html: uicv
				}]
			}],
			buttons: [{
				type: 'button',
				label: '选择',
				title: '选择本地图片',
				onClick: function() {
					// 正在上传
					if (isUp()) {
						return alert("图片正在上传中...");
					}
					// 已经上传
					if (uploaded().length > 0 && !confirm("要丢弃已上传图片吗？")) {
						return false;
					}
					// 清空重选
					clean();
					choice().click();
				}
			}, {
				type: 'button',
				label: '上传',
				title: '上传本地图片',
				onClick: function() {
					var uio = (window.uio || []);
					// 空提示
					if (uio.length == 0) {
						return alert("请先选择图片");
					};
					// 正在上传
					if (isUp()) {
						return alert("图片正在上传中...");
					}
					// 上传图片
					uio = unupload();
					for (var i = 0; i < uio.length; i++) {
						http(uio[i]);
					}
				}
			}, {
				type: 'button',
				label: '确认',
				title: '确认选中图片',
				onClick: function() {
					// 有未上传
					if (unupload().length > 0 && !confirm("有未上传图片，继续吗？")) {
						return false;
					}
					// 插入文档
					var upd = uploaded();
					for (var i = 0; i < upd.length; i++) {
						editor.insertElement(CKEDITOR.dom.element.createFromHtml('<p><img src="' + upd[i].src + '" /></p>'));
					}
					// 清空关闭
					upd.length > 0 && clean();
					CKEDITOR.dialog.getCurrent().hide();
				}
			}],
			onCancel: function() {
				// 正在上传
				if (isUp() && !confirm("图片正在上传,是否关闭？")) {
					return false;
				}
				// 已经上传
				if (uploaded().length > 0 && !confirm("要丢弃已上传图片吗？")) {
					return false;
				}
				// 清空数据
				clean();
			}
		};
	});
})();
