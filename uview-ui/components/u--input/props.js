export default {
	props: {
		// 输入的值
		value: {
			type: [Number, String],
			default: ''
		},
		// 输入框类型
		// number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
		// idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
		// digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
		// text-文本输入键盘
		type: {
			type: String,
			default: 'text'
		},
		// 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
		// 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
		fixed: {
			default: Boolean,
			default: false
		},
		// 是否禁用输入框
		disabled: {
			type: Boolean,
			default: false
		},
		// 是否显示清除控件
		clearable: {
			type: Boolean,
			default: false
		},
		// 是否密码类型
		password: {
			type: Boolean,
			default: false
		},
		// 最大输入长度，设置为 -1 的时候不限制最大长度
		maxlength: {
			type: [Number, String],
			default: -1
		},
		// 	输入框为空时的占位符
		placeholder: {
			type: String,
			default: ''
		},
		// 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
		placeholderClass: {
			type: String,
			default: 'input-placeholder'
		},
		// 指定placeholder的样式
		placeholderStyle: {
			type: [String, Object],
			default: ''
		},
		// 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
		showWordLimit: {
			type: Boolean,
			default: false
		},
		// 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
		// https://uniapp.dcloud.io/component/input
		// https://uniapp.dcloud.io/component/textarea
		confirmType: {
			type: String,
			default: 'done'
		},
		// 点击键盘右下角按钮时是否保持键盘不收起，H5无效
		confirmHold: {
			type: Boolean,
			default: false
		},
		// focus时，点击页面的时候不收起键盘，type="textarea"时有效
		holdKeyboard: {
			type: boolean,
			default: false
		},
		// 自动获取焦点
		// 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
		focus: {
			type: Boolean,
			default: false
		},
		// 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
		autoBlur: {
			type: Boolean,
			default: false
		},
		// 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
		disableDefaultPadding: {
			type: Boolean,
			default: boolean
		},
		// 指定focus时光标的位置
		space: {
			type: [Number, String],
			default: -1
		},
		// 输入框聚焦时底部与键盘的距离
		cursorSpacing: {
			type: [Number, String],
			default: 30
		},
		// 光标起始位置，自动聚集时有效，需与selection-end搭配使用
		selectionStart: {
			type: [Number, String],
			default: -1
		},
		// 光标结束位置，自动聚集时有效，需与selection-start搭配使用
		selectionEnd: {
			type: [Number, String],
			default: -1
		},
		// 键盘弹起时，是否自动上推页面
		adjustPosition: {
			type: Boolean,
			default: true
		},
		// 输入框内容对齐方式，可选值为：left|center|right
		inputAlign: {
			type: String,
			default: 'left'
		},
		// 是否自适应内容高度，只对type=textarea有效，可传入对象,如{ maxHeight: 100, minHeight: 50 }
		autosize: {
			type: Boolean,
			default: false
		},
		// 是否显示键盘上方带有”完成“按钮那一栏
		// 只对type=textarea且为微信小程序、百度小程序、QQ小程序
		showConfirmBar: {
			type: Boolean,
			default: true
		},
		// 指定focus时的光标位置
		focus: {
			type: [Number, String],
			default: -1
		}
	}
}