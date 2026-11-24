import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "主角",
				artist: "马里奥",
				url: "/assets/music/斗破苍穹-主角-马里奥(2).mp3",
				cover: "/assets/music/cover/斗破苍穹.png",
				lrc: "",
			},
			{
				name: "希望的碎片",
				artist: "二次元小美",
				url: "/assets/music/捷德奥特曼-キボウノカケラ+(希望的碎片)-二次元小美.mp3",
				cover: "/assets/music/cover/希望的碎片.webp",
				lrc: "",
			},
			{
				name: "不凡",
				artist: "王铮亮",
				url: "/assets/music/不凡-王铮亮.mp3",
				cover: "/assets/music/cover/不凡.webp",
				lrc: "",
			},
			{
				name: "答案",
				artist: "杨坤 / 郭采洁",
				url: "/assets/music/答案-杨坤&郭采洁.mp3",
				cover: "/assets/music/cover/答案.webp",
				lrc: "",
			},
			{
				name: "空城",
				artist: "杨坤",
				url: "/assets/music/空城-杨坤.mp3",
				cover: "/assets/music/cover/空城.webp",
				lrc: "",
			},
			{
				name: "没有什么不同",
				artist: "曲婉婷",
				url: "/assets/music/没有什么不同-曲婉婷.mp3",
				cover: "/assets/music/cover/我们没有什么不同.png",
				lrc: "",
			},
			{
				name: "少年泪",
				artist: "王梓钰",
				url: "/assets/music/王梓钰 - 少年泪.mp3",
				cover: "/assets/music/cover/少年泪.webp",
				lrc: "",
			},
			{
				name: "小半",
				artist: "陈粒",
				url: "/assets/music/小半-陈粒.mp3",
				cover: "/assets/music/cover/小半.webp",
				lrc: "",
			},
			{
				name: "雨过后的风景",
				artist: "Dizzy / Dizzo",
				url: "/assets/music/雨过后的风景-Dizzy+Dizzo(1).mp3",
				cover: "/assets/music/cover/雨过后的风景.webp",
				lrc: "",
			},
			{
				name: "Over Quartzer",
				artist: "末吉秀太 / ISSA",
				url: "/assets/music/Over++Quartzer+-末吉秀太&ISSA.mp3",
				cover: "/assets/music/cover/over.webp",
				lrc: "",
			},
		],
	},
};
