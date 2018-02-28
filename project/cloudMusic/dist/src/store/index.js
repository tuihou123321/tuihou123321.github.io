"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require("vuex");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2018/1/22.
 */
_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
    state: {
        a: 1,
        playerBarJson: {
            currentArrIndex: 0, //当前播放的索引
            widthProgress: "10%", //当前播放的进度条
            currentTime: 0, //当前播放的时间
            playing: false,
            currentProgressArr: {
                songName: "",
                singerName: "",
                songImg: "",
                songSrc: ""
            },
            barLists: [] //选中的播放列表
        }
    },
    getters: {},
    //同步方法
    mutations: {
        timeupdate: function timeupdate(state, currentTime) {
            state.playerBarJson.currentTime = currentTime;
        },
        widthProgress: function widthProgress(state, _widthProgress) {
            state.playerBarJson.widthProgress = _widthProgress;
        },
        //从列表页点击 添加歌曲到播放列表
        addMusic: function addMusic(state, payload) {
            function isExistFun(item) {
                var isExist = false; //默认歌曲不重复
                var len = state.playerBarJson.barLists.length;
                for (var i = 0; i < len; i++) {
                    if (state.playerBarJson.barLists[i].id == item.id) {
                        //重复，不添加到歌曲库
                        state.playerBarJson.currentArrIndex = i;
                        isExist = true;
                    }
                }
                return isExist;
            }
            //没有重复,直接添加到最后，索引也跳转
            if (!isExistFun(payload)) {
                state.playerBarJson.barLists.push(payload);
                state.playerBarJson.currentArrIndex = state.playerBarJson.barLists.length > 0 ? state.playerBarJson.barLists.length - 1 : 0;
            }
            //重复了，不添加，索引跳转到当前选中的部分，已在函数中处理
            //...
            //重新开始播放新音乐
            this.commit("playMusic", payload);
        },
        startIcon: function startIcon(state) {
            state.playerBarJson.playing = true;
        },
        playMusic: function playMusic(state, payload) {
            state.playerBarJson.currentProgressArr.songName = payload.name;
            state.playerBarJson.currentProgressArr.singerName = payload.ar[0].name;
            state.playerBarJson.currentProgressArr.songImg = "../static/banner1.jpg";
            state.a++;
            if (state.a % 2 == 1) {
                state.playerBarJson.currentProgressArr.songSrc = "../static/music/music1.mp3";
            } else {
                state.playerBarJson.currentProgressArr.songSrc = "../static/music/music2.mp3";
            }
            state.playerBarJson.playing = true;
        },

        //添加所有歌曲到列表
        playMusicAll: function playMusicAll(state, payload) {
            //先删除相同的数组
            state.playerBarJson.barLists.forEach(function (value, index) {
                payload.forEach(function (value2, index2) {
                    if (value == value2) {
                        payload.splice(index2, 1);
                    }
                });
            });
            //把最后处理过的数组合拼进去；
            state.playerBarJson.barLists = state.playerBarJson.barLists.concat(payload);
        },
        //从列表中删除歌曲
        removeList: function removeList(state, payload) {
            state.playerBarJson.barLists.splice(payload.index, 1);
        },
        //清空歌曲库
        clearAll: function clearAll(state) {
            state.playerBarJson.barLists = [];
            state.playerBarJson.currentProgressArr = {};
            state.playerBarJson.playing = false;
        },
        next: function next(state) {
            if (state.playerBarJson.currentArrIndex < state.playerBarJson.barLists.length - 1) {
                ++state.playerBarJson.currentArrIndex;
            } else {
                state.playerBarJson.currentArrIndex = 0;
            }
            this.commit("playMusic", state.playerBarJson.barLists[state.playerBarJson.currentArrIndex]);
        },
        toggleStatus: function toggleStatus(state) {
            state.playerBarJson.playing = !state.playerBarJson.playing;
        }
    },
    actions: {}
});

exports.default = store;
//# sourceMappingURL=index.js.map