(function () {
    var dhistory = document.getElementById('dhist');
    var dcoll = document.getElementById('dcoll');
    var icon_visited = document.getElementById('icon_visited');
    var icon_list = document.getElementById('icon_list');
    icon_visited.onmouseover = function () {
        dhistory.style.display = "block";
    };
    icon_visited.onmouseout = function () {
        dhistory.style.display = "none";
    };
    dhistory.onmouseover = function () {
        dhistory.style.display = "block";
    };
    dhistory.onmouseout = function () {
        dhistory.style.display = "none";
    };
    icon_list.onmouseover = function () {
        dcoll.style.display = "block";
    };
    icon_list.onmouseout = function () {
        dcoll.style.display = "none";
    };
    dcoll.onmouseover = function () {
        dcoll.style.display = "block";
    };
    dcoll.onmouseout = function () {
        dcoll.style.display = "none";
    };
})();
/*first js end*/
(function () {
    var nav_inner = document.getElementById('nav_inner');
    var lis = nav_inner.getElementsByTagName('li');
    var oDiv = nav_inner.getElementsByTagName('div');
    var nav_sign = document.getElementsByClassName('nav_sign');
    var hidden = document.getElementById('hidden');
    nav_inner.onmouseover = function () {
        hidden.style.display = 'block';
    };
    nav_inner.onmouseout = function () {
        hidden.style.display = 'none';
    };
    function getData(i) {
        var str = '';
        switch (i) {
            case 0:
                str += '<a href="###"><span>' + '重生之名流巨星' + '</span></a>';
                str += '<a href="###"><span>' + '我的奇妙男友' + '</span></a>';
                str += '<a href="###"><span>' + '欢乐颂' + '</span></a>';
                str += '<a href="###"><span>' + '那年青春我们正好' + '</span></a>';
                str += '<a href="###"><span>' + '重生之名流巨星' + '</span></a>';
                str += '<a href="###"><span>' + '我的奇妙男友' + '</span></a>';
                str += '<a href="###"><span>' + '欢乐颂' + '</span></a>';
                str += '<a href="###"><span>' + '那年青春我们正好' + '</span></a>';
                break;
            case 1:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                break;
            case 2:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                str += '<a href="###"><span>' + '韩国综艺' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                str += '<a href="###"><span>' + '韩国综艺' + '</span></a>';
                break;
            case 3:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 4:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 5:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 6:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 7:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 8:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 9:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 10:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 11:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 12:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 13:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 14:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 15:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 16:
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
                str += '<a href="###"><span>' + '极盗者' + '</span></a>';
                str += '<a href="###"><span>' + '恶棍天使' + '</span></a>';
                str += '<a href="###"><span>' + '女汉子真爱公式' + '</span></a>';
                str += '<a href="###"><span>' + '疯狂动物城' + '</span></a>';
            case 17:
                str += '<a href="###"><span>' + '奔跑吧兄弟4' + '</span></a>';
                str += '<a href="###"><span>' + '约吧大明星' + '</span></a>';
                str += '<a href="###"><span>' + '拜托了冰箱第二季' + '</span></a>';
                str += '<a href="###"><span>' + '你正常吗第二季' + '</span></a>';
                break;
            case 18:
                str += '<a href="###"><span style="width: 800px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                break;
            case 19:
                str += '<a href="###"><span style="width: 800px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + '直播' + '</span></a>';
                str += '<a href="###"><span>' + '影评' + '</span></a>';
                str += '<a href="###"><span>' + '韩剧' + '</span></a>';
                str += '<a href="###"><span>' + '美剧' + '</span></a>';
                str += '<a href="###"><span>' + '直播' + '</span></a>';
                str += '<a href="###"><span>' + '影评' + '</span></a>';
                str += '<a href="###"><span>' + '韩剧' + '</span></a>';
                str += '<a href="###"><span>' + '美剧' + '</span></a>';
                break;
            case 20:
                str += '<a href="###"><span style="width: 800px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                str += '<a href="###"><span>' + '贝瓦儿歌' + '</span></a>';
                str += '<a href="###"><span>' + '可爱兔兔' + '</span></a>';
                break;
            case 21:
                str += '<a href="###"><span style="width: 800px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + '直播' + '</span></a>';
                str += '<a href="###"><span>' + '影评' + '</span></a>';
                str += '<a href="###"><span>' + '韩剧' + '</span></a>';
                str += '<a href="###"><span>' + '美剧' + '</span></a>';
                str += '<a href="###"><span>' + '直播' + '</span></a>';
                str += '<a href="###"><span>' + '影评' + '</span></a>';
                str += '<a href="###"><span>' + '韩剧' + '</span></a>';
                str += '<a href="###"><span>' + '美剧' + '</span></a>';
                break;
            case 22:
                str += '<a href="###"><span style="width: 1000px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + '9元开会员' + '</span></a>';
                str += '<a href="###"><span>' + '会员特权' + '</span></a>';
                str += '<a href="###"><span>' + '会员活动' + '</span></a>';
                break;
            default :
                str += '<a href="###"><span style="width: 1000px">' + '' + '</span></a>';
                str += '<a href="###"><span>' + 'PC客户端' + '</span></a>';
                str += '<a href="###"><span>' + '移动客户端' + '</span></a>';
                str += '<a href="###"><span>' + 'TV客户端' + '</span></a>';
        }
        return str;
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].coll = i;
        lis[i].onmouseover = function () {
            var str = getData(this.coll);
            hidden.innerHTML = str;
            nav_sign[this.coll].style.display = 'block';
        }
        lis[i].onmouseout = function () {
            nav_sign[this.coll].style.display = 'none';
        }
    }
})();
/*second js end*/
(function(){
    var big = document.getElementById('big'),
        oLisB = big.getElementsByTagName('li');
    var small = document.getElementById('small'),
        oLis = small.getElementsByTagName('li');
    var title = document.getElementById('title');
    var leftBtn = document.getElementById('leftBtn');
    rightBtn = document.getElementById('rightBtn');
    var AS = document.getElementById('bbs').getElementsByTagName('a');
    console.log(oLis.length)
    console.log(AS.length)
    var interval = 3000, autoTimer = null, step = 0;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step == 13) {
            step = -1;
            small.style.left = '0';
        }
        if (step == 6) {
            small.style.left = '-641px';
        }
        step++;
        setBanner();
        var inner = changeTitle();
        title.innerHTML = inner;
        aChange(step);
    }
    for (var i = 0; i < oLis.length; i++) {
        var oLi = oLis.item(i);
        oLi.index = i;
        oLi.onmouseover = function () {
            clearInterval(autoTimer);
            step = this.index - 1;
            autoMove();
            aChange(step);
        }
        oLi.onmouseout = function () {
            autoTimer = window.setInterval(autoMove, interval);
            aChange(step);
        }
    }
    function setBanner() {
        try {
            for (var i = 0; i < oLisB.length; i++) {
                var cur = oLisB[i];
                if (i === step) {
                    utils.css(cur, 'zIndex', 1);
                    animate(cur, {opacity: 1}, 500, function () {
                        var curSib = utils.siblings(this);
                        for (var k = 0; k < curSib.length; k++) {
                            utils.css(curSib[k], 'opacity', 0);
                        }
                    });
                    continue;
                }
                utils.css(cur, 'zIndex', 0);
            }
            for (i = 0; oLis.length; i++) {
                var curLi = oLis[i];
                i === step ? utils.addClass(curLi, 'select') : utils.removeClass(curLi, 'select');

            }
            /*for(i=0;i<AS.length;i++){
             var curA=AS[i];
             i === step ? utils.addClass(curA, 'on') : utils.removeClass(curA, 'on');
             }*/
        } catch (e) {

        }

    }
    function changeTitle() {
        var str = '';
        switch (step) {
            case 0:
                str += '《疯狂动物城》疯狂送周边<br>5月18日零点全网首播';
                break;
            case 1:
                str += '《信号》烧脑韩剧<br>会员看全集';
                break;
            case 2:
                str += '玲安对话好莱坞<br>小叶吴亦凡驾到';
                break;
            case 3:
                str += '《深井食堂》岳云鹏<br>会员看全集';
                break;
            case 4:
                str += '《重生名流巨星》风景<br>每周四五更新';
                break;
            case 5:
                str += '玲安对话好莱坞<br>小叶吴亦凡驾到';
                break;
            case 6:
                str += '《女生成长动漫》<br>土豪vs忠犬';
                break;
            case 7:
                str += 'X1和他们朋友们<br>2015年5月20日晚八点';
                break;
            case 8:
                str += '《那年青春我们正好》大结局<br>虐心之恋大结局';
                break;
            case 9:
                str += '《网络美女不设防》腾讯独播<br>就在今夜';
                break;
            case 10:
                str += '《跑男4》宋仲基降临<br>萌翻一大片少女';
                break;
            case 11:
                str += '《重生名流巨星》风景<br>每周四五更新';
                break;
            case 12:
                str += '《跑男4》宋仲基降临<br>萌翻一大片少女';
                break;
            case 13:
                str += '《那年青春我们正好》大结局<br>虐心之恋大结局';
                break;
        }
        return str;
    }
    leftBtn.onclick = function () {
        clearInterval(autoTimer);
        var val = animate.getCss(small, 'left');
        val == 0 ? small.style.left = '-641px' : small.style.left = '0';


    }
    rightBtn.onclick = function () {
        clearInterval(autoTimer);
        var val = animate.getCss(small, 'left');
        val == 0 ? small.style.left = '-641px' : small.style.left = '0';
    }
    big.onmouseover = function () {
        clearInterval(autoTimer);
    }
    big.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, interval);
    }
    function aChange(n) {
        for (var i = 0; i < AS.length; i++) {
            if (i === n) {
                AS[i].className = 'on';
            } else {
                AS[i].className = '';
            }
        }
    }
})();
/*banner js end*/
(function(){
    var slidingDoor=document.getElementById('slidingDoor');
    var oLis=slidingDoor.getElementsByTagName('li');
    for(var i=0;i<oLis.length;i++){
        var curLi=oLis[i];
        oLis[i].index=i;
        curLi.onmouseover=function(){
            animate(oLis[this.index],{width:992},300);
            if(this.index==4){
                animate(slidingDoor,{left:-774},300);
                return;
            }
            animate(slidingDoor,{left:(this.index)*-248},300);
        };
        curLi.onmouseout=function(){
            animate(oLis[this.index],{width:248},300);
            animate(slidingDoor,{left:0},300);
        }
    }
})();
/*slidingDoor js end*/
(function(){
    var loginBg=document.getElementById('loginBg');
    var qq=document.getElementById('qq');
    var close=document.getElementById('close');
    qq.onclick=function(){
        loginBg.style.display='block';
    }
    close.onclick=function(){
        loginBg.style.display='none';
    }
})();




