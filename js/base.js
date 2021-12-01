window.addEventListener("load", function() {

    //关于首页简历介绍区域
    var firstP = document.querySelector('#first-page')
    var secondP = document.querySelector('#second-page')
    var dottedF = document.querySelector('.f-dotted');
    var dottedS = document.querySelector('.s-dotted');
    var photoDemo = document.querySelector('.photoDemo')
        //第一张简历
    secondP.addEventListener('click', function() {
            firstP.className = 'second-down'
            secondP.className = 'first-up'
        })
        //第二张简历
    firstP.addEventListener('click', function() {
        firstP.className = 'first-up'
        secondP.className = 'second-down'
    })


    //关于游戏项目介绍区域
    var gameDemo = document.querySelector('.gameDemo')
    var gameone = document.querySelector('.first-game')
    var gametow = document.querySelector('.second-game')
    var gamethree = document.querySelector('.third-game')
    var deone = document.querySelector('.de-game-one')
    var detow = document.querySelector('.de-game-tow')
    var dethree = document.querySelector('.de-game-three')
        //星星图片的设置
    var img = document.querySelector('.startone')
    var startOne = document.querySelector('.startOne')
    var startTow = document.querySelector('.startTow')
    var startThree = document.querySelector('.startThree')

    //右点击隐藏游戏界面（会回到第一个游戏项目的介绍）
    gameDemo.addEventListener('contextmenu', function(e) {
            e.preventDefault()
            gameDemo.style.display = 'none'
            deone.style.display = 'block'
            detow.style.display = 'none'
            dethree.style.display = 'none'
        })
        //第一个游戏项目显示
    gameone.addEventListener('click', function() {
        deone.style.display = 'block'
        detow.style.display = 'none'
        dethree.style.display = 'none'

    })

    //第二个游戏项目的显示
    var w = true
    gametow.addEventListener('click', function() {
        deone.style.display = 'none'
        detow.style.display = 'block'
        dethree.style.display = 'none'
        if (w === true) {
            for (var i = 0; i < 2; i++) {
                var img = document.createElement('img')
                img.src = './img/start.png'
                img.className = 'startTest'
                startTow.appendChild(img)
            }
        }
        w = false
    })

    //第三个游戏项目的显示
    var t = true
    gamethree.addEventListener('click', function() {
        deone.style.display = 'none'
        detow.style.display = 'none'
        dethree.style.display = 'block'
        if (t === true) {
            for (var i = 0; i < 2; i++) {
                var img = document.createElement('img')
                img.src = './img/start.png'
                img.className = 'startTest'
                startThree.appendChild(img)
            }
        }
        t = false
    })


    //点击第一个圆点,出现游戏项目介绍简介
    var f = true
    dottedF.addEventListener('click', function() {
            gameDemo.style.display = 'block'
            if (f === true) {
                for (var i = 0; i < 3; i++) {
                    var img = document.createElement('img')
                    img.src = './img/start.png'
                    img.className = 'startTest'
                    startOne.appendChild(img)

                }
            }
            f = false
        })
        //点击第二个圆点,出现兴趣爱好项目简介
    dottedS.addEventListener('click', function() {
        photoDemo.style.visibility = 'visible'
        pauseAnimation(0)
    })

    //图片轮播图区域
    var ul = document.querySelector('.focus')
    var img = ul.querySelector('img')
    var ol = document.querySelector('.circle')
    var arrowr = document.querySelector('.arrow-r')
    var focusWidth = img.offsetWidth;

    //右点击隐藏兴趣爱好界面
    photoDemo.addEventListener('contextmenu', function(e) {
        e.preventDefault()
        photoDemo.style.visibility = 'hidden'
        pauseAnimation(1)
    })

    //点击圆点切换图片
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        ol.appendChild(li)
        li.addEventListener('click', function click() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'current'

            var index = this.getAttribute('index')
            num = index
            circle = index

            animate(ul, -index * focusWidth)
        })
    }

    ul.addEventListener('mouseenter', function() {
        // clearInterval(timer)
        // timer = null

    })
    ul.addEventListener('mouseout', function() {
        // timer = setInterval(function() {
        //     arrowr.click()
        // }, 5000);

    })

    //设置第一张图片对应第一实心圆点
    ol.children[0].className = 'current'
        //深拷贝第一张图片
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    var num = 0
    var circle = 0

    //图片自动播放设置
    arrowr.addEventListener('click', function() {
        if (num == ol.children.length) {

            ul.style.left = 0
            num = 0
            circle = 0
        }
        num++
        animate(ul, -num * focusWidth)
        circle++
        if (circle == 5) {
            circle = 0
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    })


    // var timer
    // var time = function() {
    //     timer = setInterval(function() {
    //         arrowr.click()
    //     }, 3000);
    // }

    let pauseAnimation = (state) => {  
        if (timer && state) {    
            clearInterval(timer);
            ol.children[0].className = 'current'
            for (var i = 1; i < ol.children.length - 1; i++) {
                ol.children[i].className = ''
            }
            ul.style.left = 0 + 'px'
            num = 0
            circle = 0    
        }  
        else {    
            timer = setInterval(() => {      
                arrowr.click()    
            }, 3000);  
        }
    }

    let timer = null

})