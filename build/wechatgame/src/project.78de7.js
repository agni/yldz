window.__require=function e(t,c,n){function o(a,r){if(!c[a]){if(!t[a]){var s=a.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!r&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+a+"'")}}var u=c[a]={exports:{}};t[a][0].call(u.exports,function(e){return o(t[a][1][e]||e)},u,u.exports,e,t,c,n)}return c[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<n.length;a++)o(n[a]);return o}({aotu:[function(e,t,c){"use strict";cc._RF.push(t,"770799JJ4NJrZvpH8h8BTLv","aotu"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.director.preloadScene("welcome")},start:function(){var e=3;this.schedule(function(){e<1&&cc.director.loadScene("welcome"),e-=1},1)}}),cc._RF.pop()},{}],bianjie:[function(e,t,c){"use strict";cc._RF.push(t,"ee5cbAulMRCrYvQq0865aI6","bianjie"),cc.Class({extends:cc.Component,properties:{hengbianjie_up:{default:null,type:cc.Node},hengbianjie_down:{default:null,type:cc.Node},shubianjie_left:{default:null,type:cc.Node},shubianjie_right:{default:null,type:cc.Node}},onLoad:function(){var e=cc.view.getVisibleSize();this.hengbianjie_up.setPosition(cc.v2(0,e.height/2+15)),this.hengbianjie_down.setPosition(cc.v2(0,-e.height/2-15)),this.shubianjie_left.setPosition(cc.v2(-(e.width/2+15),0)),this.shubianjie_right.setPosition(cc.v2(e.width/2+15,0))},start:function(){}}),cc._RF.pop()},{}],common:[function(e,t,c){"use strict";cc._RF.push(t,"3d6c3H7gKFBK6G9ODlIVyML","common");t.exports={Speed_X:0,Speed_Y:0,is_Success:0,haoshi:0,playTime:0,num_door:0,num_yinli:0,lastest_door:0,is_pengzhuang:0,center_x:[],center_y:[],actions:"",avatarUrl:"",ppppp:0},cc._RF.pop()},{}],door:[function(e,t,c){"use strict";cc._RF.push(t,"6247ezi/zdEwa9KBSxjOfi8","door");t.exports={guanqia:[{name_guanqia:"round 1 \u5f00\u59cb",player_location:[-320,0],sun_location:[368,0],playTime:10,num_yinli:1,array_bolck:[]},{name_guanqia:"round 2 \u6b63\u65b9\u5f62",player_location:[-240,240],sun_location:[320,-240],playTime:15,num_yinli:2,array_bolck:[{x:0,y:-75,where:0},{x:0,y:75,where:0},{x:-75,y:0,where:90},{x:75,y:0,where:90}]},{name_guanqia:"round 3 \u6124\u6012",player_location:[0,200],sun_location:[0,-218],playTime:15,num_yinli:2,array_bolck:[{x:-244,y:131,where:32},{x:-161,y:81,where:32},{x:226,y:121,where:-32},{x:157,y:77,where:-32},{x:-72,y:-145,where:-32},{x:60,y:-145,where:32}]},{name_guanqia:"round 4 \u5b57\u6bcd T",player_location:[-100,150],sun_location:[100,150],playTime:15,num_yinli:2,array_bolck:[{x:0,y:-89,where:90},{x:0,y:138,where:90},{x:0,y:66,where:90},{x:80,y:227,where:0},{x:240,y:227,where:0},{x:-238,y:227,where:0},{x:-78,y:227,where:0}]},{name_guanqia:"round 5 \u03c0",player_location:[-363,195],sun_location:[198,-200],playTime:15,num_yinli:2,array_bolck:[{x:-400,y:259,where:0},{x:-248,y:259,where:0},{x:-96,y:259,where:0},{x:54,y:259,where:0},{x:204,y:259,where:0},{x:349,y:259,where:0},{x:416,y:259,where:0},{x:-400,y:146,where:0},{x:-243,y:146,where:0},{x:41,y:146,where:0},{x:408,y:146,where:0},{x:348,y:146,where:0},{x:-167,y:65,where:90},{x:-33,y:65,where:90},{x:117.8,y:70.7,where:90},{x:273,y:70.7,where:90},{x:273,y:-89,where:90},{x:273,y:-174,where:90},{x:118,y:-89,where:90},{x:118,y:-174,where:90},{x:-134,y:-189,where:120},{x:-72,y:-81,where:120},{x:-205.1,y:-81,where:120},{x:-261,y:-179,where:120}]},{name_guanqia:"round 6 \u5173\u5361",player_location:[-214,-169],sun_location:[240,-138],playTime:25,num_yinli:4,array_bolck:[{x:-80,y:185,where:-90},{x:-80,y:-73,where:-90},{x:-80,y:-172,where:-90},{x:88,y:172,where:-90},{x:88,y:102,where:-90},{x:88,y:-172,where:-90}]},{name_guanqia:"round 7 \u4e00\u6761\u9c7c",player_location:[-175,-20],sun_location:[0,-20],playTime:60,num_yinli:7,array_bolck:[{x:-232,y:54,where:-34},{x:-156,y:105,where:-34},{x:-66,y:166,where:-34},{x:-228,y:-107,where:34},{x:-153,y:-157,where:34},{x:-88.3,y:74,where:90},{x:-88.3,y:-125,where:90},{x:-20.8,y:105,where:34},{x:54.1,y:54.5,where:34},{x:180,y:56,where:-34},{x:-73,y:-211,where:34},{x:-20,y:-156.3,where:-34},{x:53,y:-107,where:-34},{x:180,y:-106,where:34}]},{name_guanqia:"round 8 \u53e6\u4e00\u6761\u9c7c",player_location:[0,-20],sun_location:[-175,-20],playTime:60,num_yinli:7,array_bolck:[{x:-232,y:54,where:-34},{x:-156,y:105,where:-34},{x:-66,y:166,where:-34},{x:-228,y:-107,where:34},{x:-153,y:-157,where:34},{x:-88.3,y:74,where:90},{x:-88.3,y:-125,where:90},{x:-20.8,y:105,where:34},{x:54.1,y:54.5,where:34},{x:180,y:56,where:-34},{x:-73,y:-211,where:34},{x:-20,y:-156.3,where:-34},{x:53,y:-107,where:-34},{x:180,y:-106,where:34}]},{name_guanqia:"round 9 \u4e24\u5ba4\u4e00\u5385",player_location:[-281,176],sun_location:[-281,-160],playTime:30,num_yinli:5,array_bolck:[{x:0,y:187,where:90},{x:0,y:-168,where:90},{x:0,y:0,where:0},{x:-160.7000161,y:0,where:0},{x:-321.4000482,y:0,where:0},{x:-482.1000964,y:0,where:0}]},{name_guanqia:"round 10 \u7b80\u5355\u5417?",player_location:[-287,0],sun_location:[300,0],playTime:10,num_yinli:1,array_bolck:[{x:-211,y:179,where:45},{x:-47,y:15,where:45},{x:99,y:-131,where:45},{x:160,y:-192,where:45}]},{name_guanqia:"round 11 Money",player_location:[-45,-53],sun_location:[77,-185],playTime:25,num_yinli:4,array_bolck:[{x:-40,y:96,where:60},{x:40,y:96,where:-60},{x:0,y:-50,where:90},{x:0,y:-178.6,where:90},{x:0,y:0,where:0},{x:0,y:-98,where:0}]},{name_guanqia:"round 12 \u5b57\u6bcd W",player_location:[-298,84],sun_location:[317,84],playTime:25,num_yinli:5,array_bolck:[{x:-170,y:188,where:90},{x:-170,y:27,where:90},{x:0,y:0,where:90},{x:0,y:-156,where:90},{x:170,y:188,where:90},{x:170,y:27,where:90}]},{name_guanqia:"round 13 \u5c0f\u4eba\u513f",player_location:[0,-148],sun_location:[0,167],playTime:25,num_yinli:4,array_bolck:[{x:0,y:40,where:90},{x:-100,y:50,where:0},{x:100,y:50,where:0},{x:-41,y:-105,where:-60},{x:41,y:-105,where:60}]},{name_guanqia:"round 14 Letter H",player_location:[0,-100],sun_location:[0,100],playTime:25,num_yinli:4,array_bolck:[{x:0,y:0,where:0},{x:-125,y:125,where:90},{x:-125,y:0,where:90},{x:-125,y:-100,where:90},{x:125,y:125,where:90},{x:125,y:0,where:90},{x:125,y:-100,where:90}]},{name_guanqia:"round 15  \u7ba1\u9053",player_location:[-216,181],sun_location:[212,-152],playTime:30,num_yinli:4,array_bolck:[{x:-212,y:240,where:0},{x:-212,y:-221,where:0},{x:-61,y:40,where:0},{x:56,y:-37,where:0},{x:209,y:240,where:0},{x:209,y:-221,where:0},{x:-287,y:165,where:90},{x:-136,y:165,where:90},{x:132,y:165,where:90},{x:286,y:165,where:90},{x:-287,y:8,where:90},{x:286,y:8,where:90},{x:-287,y:-146,where:90},{x:-136,y:-146,where:90},{x:132,y:-146,where:90},{x:286,y:-146,where:90}]},{name_guanqia:"round 16  \u534a\u4e2aZ",player_location:[-260,173],sun_location:[190,-108],playTime:25,num_yinli:4,array_bolck:[{x:-236,y:231,where:0},{x:-79,y:231,where:0},{x:76,y:231,where:0},{x:225,y:231,where:0},{x:-236,y:120,where:0},{x:-79,y:120,where:0},{x:74,y:120,where:0},{x:-236,y:-223,where:0},{x:-82,y:-223,where:0},{x:72,y:-223,where:0},{x:224,y:-223,where:0},{x:-319,y:158,where:90},{x:-319,y:1,where:90},{x:-319,y:-149,where:90},{x:300,y:158,where:90},{x:300,y:7,where:90},{x:300,y:-148,where:90},{x:83,y:79,where:-30},{x:-48,y:4,where:-30},{x:235,y:40,where:-30},{x:100,y:-38,where:-30},{x:5,y:-93,where:-30}]},{name_guanqia:"round 17  \u62fe\u9636\u800c\u4e0a",player_location:[119,-224],sun_location:[-265,198],playTime:25,num_yinli:4,array_bolck:[{x:-64,y:183,where:0},{x:337,y:149,where:0},{x:-261,y:113,where:0},{x:113,y:104,where:0},{x:-46,y:23,where:0},{x:-360,y:-17,where:0},{x:281,y:-14,where:0},{x:-380,y:-115,where:0},{x:160,y:-115,where:0},{x:-133,y:-195,where:0},{x:296,y:-224,where:0},{x:-116,y:-107,where:0}]}]},cc._RF.pop()},{}],gameover:[function(e,t,c){"use strict";cc._RF.push(t,"36d32eLIPVPgKEb3p+tJYNb","gameover");var n=e("common");e("door");cc.Class({extends:cc.Component,properties:{label_tittle:{default:null,type:cc.Label},label_time:{default:null,type:cc.Label},label_leijitime:{default:null,type:cc.Label},backBtn:{default:null,type:cc.Node},continueBtn:{default:null,type:cc.Node},success:{default:null,type:cc.Node},defeat:{default:null,type:cc.Node},success_btn:{default:null,type:cc.Node},defeat_btn:{default:null,type:cc.Node},rank_btn:{default:null,type:cc.Node}},wxupdate:function(){var e=n.num_door;window.wx.postMessage({messageType:3,MAIN_MENU_NUM:"x1",score:e})},onLoad:function(){cc.director.preloadScene("main"),cc.director.preloadScene("success"),cc.director.preloadScene("welcome"),cc.director.preloadScene("rank"),this.label_tittle=cc.find("Canvas/tittle"),this.label_time=cc.find("Canvas/time"),this.label_leijitime=cc.find("Canvas/leijitime");var e=cc.scaleTo(.8,.9),t=cc.scaleTo(.8,1),c=cc.sequence(e,t),o=cc.repeatForever(c);if(this.rank_btn.on("touchstart",function(){window.wx.postMessage({messageType:1,MAIN_MENU_NUM:"x1"}),cc.director.loadScene("rank")}),this.backBtn.on("touchstart",function(){cc.director.loadScene("welcome")}),this.continueBtn.on("touchstart",function(){n.num_door<n.lastest_door?cc.director.loadScene("main"):(n.num_door=0,wx.setStorageSync("time",0),cc.director.loadScene("success"))}),this.success_btn.on("touchstart",function(){cc.log("\u8f6c\u53d1"),wx.shareAppMessage({title:"@\u6211 \u6211\u5df2\u7ecf\u8fbe\u5230\u7b2c"+n.num_door+"\u5173\u4e86\uff0c\u4f60\u6562\u6311\u6218\u6211\u5417\uff1f",imageUrl:"https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",success:function(e){console.log("\u8f6c\u53d1\u6210\u529f!!!"),wx.showToast({title:"\u8f6c\u53d1\u6210\u529f",icon:"success"})},fail:function(e){console.log("\u8f6c\u53d1\u5931\u8d25"),wx.showToast({title:"\u8f6c\u53d1\u5931\u8d25",icon:"none"})}})}),this.defeat_btn.on("touchstart",function(){cc.log("\u8f6c\u53d1");var e=n.num_door+1;wx.shareAppMessage({title:"@\u6211 \u6211\u5361\u5728\u7b2c"+e+"\u5173\u4e86\uff0c\u5feb\u6765\u5e2e\u5e2e\u6211\u5427",imageUrl:"https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",success:function(e){console.log("\u8f6c\u53d1\u6210\u529f!!!"),wx.showToast({title:"\u8f6c\u53d1\u6210\u529f",icon:"success"}),n.num_door++,this.wxupdate()},fail:function(e){console.log("\u8f6c\u53d1\u5931\u8d25"),wx.showToast({title:"\u8f6c\u53d1\u5931\u8d25",icon:"none"})}})}),0==n.is_Success){this.success.active=!1,this.defeat.active=!0,this.success_btn.active=!1,this.defeat_btn.active=!1,this.defeat_btn.runAction(o),this.label_tittle.getComponent(cc.Label).string="\u5931\u8d25",this.label_time.getComponent(cc.Label).string=n.haoshi+" s";var i=parseInt(wx.getStorageSync("time"))+n.haoshi;this.label_leijitime.getComponent(cc.Label).string=+i+" s",wx.setStorageSync("time",i)}else{this.success.active=!0,this.defeat.active=!1,this.success_btn.active=!0,this.defeat_btn.active=!1,this.success_btn.runAction(o),this.label_tittle.getComponent(cc.Label).string="\u6210\u529f",this.label_time.getComponent(cc.Label).string=n.haoshi+" s",n.num_door++,this.wxupdate();var a=parseInt(wx.getStorageSync("time"))+n.haoshi;this.label_leijitime.getComponent(cc.Label).string=a+" s",wx.setStorageSync("time",a),n.num_door>=parseInt(wx.getStorageSync("level"))?wx.setStorageSync("level",n.num_door):0==n.ppppp&&(n.num_door=parseInt(wx.getStorageSync("level")))}}}),cc._RF.pop()},{common:"common",door:"door"}],heidong:[function(e,t,c){"use strict";cc._RF.push(t,"0d629CAPwNN760sHFyzK942","heidong");var n=e("common");cc.Class({extends:cc.Component,properties:{angle:0,audio:{default:null,type:cc.AudioClip}},onLoad:function(){cc.director.getCollisionManager().enabled=!0,cc.director.getPhysicsManager().enabled=!0,cc.director.getPhysicsManager().gravity=cc.v2(),cc.director.preloadScene("gameover"),cc.director.preloadScene("success")},onBeginContact:function(e,t,c){n.is_Success=1,this.current=cc.audioEngine.play(this.audio,!1,.2),n.num_door<n.lastest_door?cc.director.loadScene("gameover"):(n.num_door=0,cc.director.loadScene("success"))},start:function(){},update:function(e){this.angle=this.angle-45,this.node.setRotation(this.angle*Math.PI/180)}}),cc._RF.pop()},{common:"common"}],main:[function(e,t,c){"use strict";cc._RF.push(t,"9c1b1GZMOhBN5Cpn/gKPIV3","main");var n=e("common"),o=e("door");cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},sun:{default:null,type:cc.Node},titleboard:{default:null,type:cc.Node},mianbanboard:{default:null,type:cc.Node},restart:{default:null,type:cc.Node},back:{default:null,type:cc.Node},zhengE:{default:null,type:cc.Prefab},timeLabe:{default:null,type:cc.Label},yinliLabe:{default:null,type:cc.Label},nameLabe:{default:null,type:cc.Label},block:{default:null,type:cc.Prefab},block1:{default:null,type:cc.Prefab},block2:{default:null,type:cc.Prefab},block3:{default:null,type:cc.Prefab},block4:{default:null,type:cc.Prefab},block5:{default:null,type:cc.Prefab},block6:{default:null,type:cc.Prefab},temp:0},createnum:function(){return parseInt(6*Math.random()+1,10)},initgame:function(){n.num_door>=n.lastest_door&&cc.director.loadScene("success"),n.center_x=[],n.center_y=[],n.Speed_X=0,n.Speed_Y=0,n.is_Success=0,n.haoshi=0,n.playTime=o.guanqia[n.num_door].playTime,n.num_yinli=o.guanqia[n.num_door].num_yinli,this.temp=o.guanqia[n.num_door].num_yinli;var e=o.guanqia[n.num_door].array_bolck.length;this.player.setPosition(cc.v2(o.guanqia[n.num_door].player_location[0],o.guanqia[n.num_door].player_location[1])),this.sun.setPosition(cc.v2(o.guanqia[n.num_door].sun_location[0],o.guanqia[n.num_door].sun_location[1]));for(var t=0;t<e;t++){var c=o.guanqia[n.num_door].array_bolck[t].x,i=o.guanqia[n.num_door].array_bolck[t].y;switch(this.createnum()){case 1:this.Newblock=cc.instantiate(this.block1);break;case 2:this.Newblock=cc.instantiate(this.block2);break;case 3:this.Newblock=cc.instantiate(this.block3);break;case 4:this.Newblock=cc.instantiate(this.block4);break;case 5:this.Newblock=cc.instantiate(this.block5);break;case 6:this.Newblock=cc.instantiate(this.block6);break;default:this.Newblock=cc.instantiate(this.block)}this.node.addChild(this.Newblock),this.Newblock.setPosition(cc.v2(c,i)),this.Newblock.setRotation(o.guanqia[n.num_door].array_bolck[t].where)}},mean_array:function(e,t){for(var c=0,n=0;n<e.length;n++)c+=e[n];return(c+t)/(e.length+1)},setJumpAction:function(e,t,c,n){var o=cc.v2(e,t).sub(cc.v2(c,n)).mag()/150,i=cc.moveTo(o,cc.v2(c,n)).easing(cc.easeQuadraticActionIn()),a=cc.moveTo(o,cc.v2(c+c-e,n+n-t)).easing(cc.easeQuadraticActionOut()),r=cc.moveTo(o,cc.v2(e,t)).easing(cc.easeQuadraticActionOut());return cc.repeatForever(cc.sequence(i,a,i,r))},onLoad:function(){this.timeLabe=cc.find("Canvas/mianban/timebiao/time"),this.yinliLabe=cc.find("Canvas/mianban/zhengE/yinli"),this.nameLabe=cc.find("Canvas/titleboard/name"),cc.director.preloadScene("gameover"),cc.director.preloadScene("success"),cc.director.preloadScene("welcome"),this.initgame();var e=cc.view.getVisibleSize();this.mianbanboard.setPosition(cc.v2(0,-e.height/2-58)),this.yinliLabe.getComponent(cc.Label).string=": "+n.num_yinli+" \u4e2a",this.titleboard.setPosition(cc.v2(0,e.height/2+45)),this.nameLabe.getComponent(cc.Label).string=o.guanqia[n.num_door].name_guanqia,this.timeLabe.getComponent(cc.Label).string=": "+n.playTime+" s",this.mianbanboard_Action=cc.moveTo(1,cc.v2(0,-e.height/2)).easing(cc.easeCubicActionOut()),this.mianbanboard.runAction(this.mianbanboard_Action),this.titleboard_Action=cc.moveTo(1,cc.v2(0,e.height/2)).easing(cc.easeCubicActionOut()),this.titleboard.runAction(this.titleboard_Action),this.node.on("touchstart",function(e){if(n.num_yinli>0){var t=e.getCurrentTarget().convertToNodeSpaceAR(e.getLocation());if(!this.sun.getBoundingBoxToWorld().contains(e.getLocation())&&!this.titleboard.getBoundingBoxToWorld().contains(e.getLocation())&&!this.mianbanboard.getBoundingBoxToWorld().contains(e.getLocation())){var c=cc.instantiate(this.zhengE);this.node.addChild(c),c.setPosition(cc.v2(t.x,t.y)),n.center_x.push(t.x),n.center_y.push(t.y),n.num_yinli--,this.yinliLabe.getComponent(cc.Label).string=": "+n.num_yinli+" \u4e2a"}}},this),this.ctx=this.node.getChildByName("tu").getComponent(cc.Graphics),this.ctx.clear(),this.restart.on("touchstart",function(){cc.director.loadScene("main")}),this.back.on("touchstart",function(){cc.director.loadScene("welcome")}),this.begin_x=this.player.x,this.begin_y=this.player.y},start:function(){this.schedule(function(){n.playTime--,n.haoshi++,this.timeLabe.getComponent(cc.Label).string=": "+n.playTime+" s",n.playTime<1&&(n.is_Success=0,cc.eventManager.removeListener(n.listener),cc.director.loadScene("gameover"),this.ctx.clear())},1)},update:function(e){if(n.center_x.length>0){var t=this.mean_array(n.center_x,this.player.x),c=this.mean_array(n.center_y,this.player.y);cc.director.getPhysicsManager().gravity=cc.v2((t-this.player.x)/2,(c-this.player.y)/2)}this.ctx.moveTo(this.begin_x,this.begin_y),this.ctx.lineTo(this.player.x,this.player.y),this.begin_x=this.player.x,this.begin_y=this.player.y,this.ctx.stroke()}}),cc._RF.pop()},{common:"common",door:"door"}],player:[function(e,t,c){"use strict";cc._RF.push(t,"c0c91B9kEJAm6NH0dmoTIv6","player");e("common");cc.Class({extends:cc.Component,properties:{audio:{default:null,type:cc.AudioClip}},onBeginContact:function(e,t,c){this.current=cc.audioEngine.play(this.audio,!1,.2)},onEndContact:function(e,t,c){},onPreSolve:function(e,t,c){},onPostSolve:function(e,t,c){},onLoad:function(){},start:function(){},update:function(e){}}),cc._RF.pop()},{common:"common"}],rankcaozuo:[function(e,t,c){"use strict";cc._RF.push(t,"d4c50X+Y1JAIJK0NMR6FrII","rankcaozuo");var n=e("common");cc.Class({extends:cc.Component,properties:{backBtn:{default:null,type:cc.Node},continueBtn:{default:null,type:cc.Node}},onLoad:function(){cc.director.preloadScene("main"),cc.director.preloadScene("welcome"),cc.director.preloadScene("success"),this.backBtn.on("touchstart",function(){cc.director.loadScene("welcome")}),this.continueBtn.on("touchstart",function(){n.num_door<n.lastest_door?cc.director.loadScene("main"):cc.director.loadScene("success")})},start:function(){}}),cc._RF.pop()},{common:"common"}],rank:[function(e,t,c){"use strict";cc._RF.push(t,"ff367nC0jdGQ70otFG79rwa","rank"),cc.Class({extends:cc.Component,properties:{display:cc.Sprite},start:function(){this.tex=new cc.Texture2D},_updateSubDomainCanvas:function(){if(this.tex){var e=wx.getOpenDataContext().canvas;this.tex.initWithElement(e),this.tex.handleLoadedTexture(),this.display.spriteFrame=new cc.SpriteFrame(this.tex)}},update:function(){this._updateSubDomainCanvas()}}),cc._RF.pop()},{}],success_fire:[function(e,t,c){"use strict";cc._RF.push(t,"131e5dc2GJK/ZnMVosVBuiD","success_fire");var n=e("common");cc.Class({extends:cc.Component,properties:{backBtn:{default:null,type:cc.Node},coldstar:{default:null,type:cc.Node},angel:0},onLoad:function(){cc.director.preloadScene("welcome"),this.node.on("touchstart",function(){n.ppppp=1,cc.director.loadScene("welcome")})},start:function(){},update:function(e){this.angel=this.angel+60,this.coldstar.setRotation(this.angel*Math.PI/180)}}),cc._RF.pop()},{common:"common"}],teach:[function(e,t,c){"use strict";cc._RF.push(t,"799f8kihq1LMb4SwGcllMOf","teach");var n=e("common");e("door");cc.Class({extends:cc.Component,properties:{dialog_daojishi:{default:null,type:cc.Node},dialog_yinliqiu:{default:null,type:cc.Node},dialog_back:{default:null,type:cc.Node},dialog_location:{default:null,type:cc.Node},dialog_restart:{default:null,type:cc.Node},player:{default:null,type:cc.Node},sun:{default:null,type:cc.Node},zhengE:{default:null,type:cc.Prefab},skip:{default:null,type:cc.Node},gotogame:{default:null,type:cc.Node},titleboard:{default:null,type:cc.Node},mianbanboard:{default:null,type:cc.Node}},mean_array:function(e,t){for(var c=0,n=0;n<e.length;n++)c+=e[n];return(c+t)/(e.length+1)},onLoad:function(){cc.director.preloadScene("main"),cc.director.getCollisionManager().enabled=!0,cc.director.getPhysicsManager().enabled=!0,cc.director.getPhysicsManager().gravity=cc.v2(),this.btn=0,n.center_x=[],n.center_y=[],this.gotogame.active=!1,this.dialog_daojishi.active=!1,this.dialog_yinliqiu.active=!1,this.dialog_restart.active=!1,this.dialog_back.active=!1,this.dialog_location.active=!1,this.sun.active=!1,this.node.on("touchstart",function(e){switch(this.btn){case 0:this.dialog_daojishi.active=!0,this.btn++;break;case 1:this.dialog_daojishi.active=!1,this.dialog_yinliqiu.active=!0,this.btn++;break;case 2:this.dialog_yinliqiu.active=!1,this.dialog_restart.active=!0,this.btn++;break;case 3:this.dialog_restart.active=!1,this.dialog_back.active=!0,this.btn++;break;case 4:this.dialog_back.active=!1,this.dialog_location.active=!0,this.btn++;break;case 5:this.gotogame.active=!0,this.dialog_location.active=!1;var t=e.getCurrentTarget().convertToNodeSpaceAR(e.getLocation());if(!this.sun.getBoundingBoxToWorld().contains(e.getLocation())&&!this.titleboard.getBoundingBoxToWorld().contains(e.getLocation())&&!this.mianbanboard.getBoundingBoxToWorld().contains(e.getLocation())){var c=cc.instantiate(this.zhengE);this.node.addChild(c),c.setPosition(cc.v2(t.x,t.y)),n.center_x.push(t.x),n.center_y.push(t.y);break}}},this),this.skip.on("touchstart",function(){cc.director.loadScene("main")}),this.gotogame.on("touchstart",function(){cc.director.loadScene("main")}),this.ctx=this.node.getChildByName("tu").getComponent(cc.Graphics),this.ctx.clear(),this.begin_x=this.player.x,this.begin_y=this.player.y},start:function(){},update:function(e){if(n.center_x.length>0){var t=this.mean_array(n.center_x,this.player.x),c=this.mean_array(n.center_y,this.player.y);cc.director.getPhysicsManager().gravity=cc.v2(t-this.player.x,c-this.player.y)}this.ctx.moveTo(this.begin_x,this.begin_y),this.ctx.lineTo(this.player.x,this.player.y),this.begin_x=this.player.x,this.begin_y=this.player.y,this.ctx.stroke()}}),cc._RF.pop()},{common:"common",door:"door"}],welcome:[function(e,t,c){"use strict";cc._RF.push(t,"98ee4MSwktMzK+Tflm5Q997","welcome");var n=e("common"),o=e("door");cc.Class({extends:cc.Component,properties:{startBtn:{default:null,type:cc.Node},rank_btn:{default:null,type:cc.Node},audio:{default:null,type:cc.AudioClip}},onLoad:function(){var e=0;try{wx.getStorageSync("level")?n.num_door=0:(wx.setStorageSync("time",0),wx.setStorageSync("level",0),e=1,n.num_door=0)}catch(e){}cc.director.preloadScene("main"),cc.director.preloadScene("rank"),cc.director.preloadScene("teach"),cc.audioEngine.stopAll(),this.current=cc.audioEngine.play(this.audio,!0,.2),n.lastest_door=o.guanqia.length,this.GameClubButton=wx.createGameClubButton({icon:"green",style:{left:0,top:100,width:40,height:40}}),wx.showShareMenu(),wx.onShareAppMessage(function(e){return{title:"@\u6211 \u8fd9\u4e2a\u5c0f\u6e38\u620f\u771f\u7684\u597d\u706b\uff01",imageUrl:"https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",success:function(e){console.log("\u8f6c\u53d1\u6210\u529f!!!"),wx.showToast({title:"\u8f6c\u53d1\u6210\u529f",icon:"success"})},fail:function(e){console.log("\u8f6c\u53d1\u5931\u8d25!!!"),wx.showToast({title:"\u8f6c\u53d1\u5931\u8d25",icon:"none"})}}});var t=cc.scaleTo(.8,.9),c=cc.scaleTo(.8,1),i=cc.sequence(t,c),a=cc.repeatForever(i);this.startBtn.runAction(a),this.startBtn.on("touchstart",function(){1==e?cc.director.loadScene("teach"):cc.director.loadScene("main")}),this.rank_btn.on("touchstart",function(){window.wx.postMessage({messageType:1,MAIN_MENU_NUM:"x1"}),cc.director.loadScene("rank")})},start:function(){},onDestroy:function(){this.GameClubButton.destroy()}}),cc._RF.pop()},{common:"common",door:"door"}],zhengE:[function(e,t,c){"use strict";cc._RF.push(t,"b3c2alvWnlHnZgaAQSeI93v","zhengE");e("common");cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node}},onLoad:function(){this.player=cc.find("Canvas/xiaoqiu")},start:function(){},whereinarray:function(e,t){for(var c=0;c<e.length;c++)if(e[c]===t)return c;return-1},update:function(e){}}),cc._RF.pop()},{common:"common"}]},{},["aotu","bianjie","common","door","gameover","heidong","main","player","rank","rankcaozuo","success_fire","teach","welcome","zhengE"]);