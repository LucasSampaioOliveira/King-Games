(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 









  // Create All Boxs By Js 
var gameContainerEnd = document.querySelector('.game .container .hide-end'),
loopBoxs,
loopBoxWrapper;
for (loopBoxs = 0; loopBoxs < 10; loopBoxs++) {
var rowsJs = document.createElement('div'),
    boxsWrapper,
    boxsJs,
    bgCover,
    wrapperImg,
    viewImg;
rowsJs.className = 'row';
gameContainerEnd.appendChild(rowsJs);
for (loopBoxWrapper = 0; loopBoxWrapper < 10; loopBoxWrapper++) {
    boxsWrapper = document.createElement('div');
    boxsJs = document.createElement('div');
    bgCover = document.createElement('div');
    wrapperImg = document.createElement('div');
    viewImg = document.createElement('img');
    rowsJs.appendChild(boxsWrapper);
    boxsWrapper.className = 'box-wrapper col-md-1 col-xs-1';
    boxsWrapper.appendChild(boxsJs);
    boxsJs.className = 'box click';
    rowsJs.children[0].classList.add('col-md-offset-1', 'col-xs-offset-1');
    boxsJs.appendChild(bgCover);
    bgCover.className = 'bg-cover';
    boxsJs.appendChild(wrapperImg);
    wrapperImg.className = 'img';
    wrapperImg.appendChild(viewImg);
}
}

var // All Variable
loading = document.querySelector('.loading'),
loadingProgress = document.querySelector('.loading .progress-bar'),
funcPlusProg,
btnAbout = document.querySelector('.controls .opt-color-full .btn-about'),
overlayAbout = document.querySelector('.overlay-about'),
about = document.querySelector('.overlay-about .about'),
btnHideAbout = document.querySelector('.full-screen .about .hide-about'),
imgAbout = document.querySelectorAll('.full-screen .about .img'),
imgAboutCount,
fullScreen = document.querySelector('.full-screen'),
btnFullScreen = document.querySelector('.btn-full-screen'),
containerColorOpt = document.querySelector('.controls .opt-color-full'),
inpOptColor = document.querySelector('.controls .opt-color-full .color-option .color-opt'),
btnResetColor = document.querySelector('.controls .opt-color-full .reset-color'),
options = document.querySelector('.options'),
hideOptions = document.querySelector('.hide-options'),
msgHideOptions = document.querySelector('.options .press-esc'),
startGame = document.querySelector('.options .start'),
msgStartGame = document.querySelector('.options .controls .msg-play'),
btnStopTime = document.querySelector('.controls .stop-time'),
rowBoxs = document.querySelectorAll('.game .row'),
boxs = document.querySelectorAll('.game .row .click'),
boxsmq = document.querySelectorAll('.game .row .box'),
md,
scoreEle = document.querySelector('.options .result .score span'),
score = parseFloat(scoreEle.innerHTML),
allScore = 0,
// Vars History 
historyGame = document.querySelector('.controls .history'),
historyTitle = document.querySelector('.controls .history .title'),
historyTitleNotifi = document.querySelector('.controls .history .title span'),
listHistory = document.querySelector('.controls .history ul'),
clearAllHistory = document.querySelector('.controls .history ul .clear-all'),
containerListItem = document.querySelector('.controls .history ul .container-list'),
emptyHistory = document.querySelector('.controls .history ul .msg-empty-history'),
historyItemLocal = JSON.parse(localStorage.getItem('historyItemLocal')) || [],
saveAutoHistory,
statusHistory,
setIndexHistory,
// Login
btnLogin = document.querySelector('.options .container .login'),
btnCloseLogin = document.querySelector('.wrapper-login .view-question-user .close-login'),
wrapperLogin = document.querySelector('.wrapper-login'),
formLogin = document.querySelector('.wrapper-login .view-question-user'),
nameUser = document.querySelector('.view-question-user .name input'),
photoUser = document.querySelector('.view-question-user .image input'),
photoUserSrc = '',
wraViewPhotoUser = document.querySelector('.view-image'),
viewPhotoUser = document.querySelector('.view-image img'),
removePhotoUser = document.querySelector('.view-image span'),
setDataUser,
setUserName,
setUserPhoto,
brandName = document.querySelector('.options .container .brand-name'),
// Confirm 
btnConfirmLogin = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .confirm'),
btnCancelLogin = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .cancel'),
inputViewConfirm = document.querySelector('.wrapper-login .view-question-user .wrapper-confirm .show-msg input'),
// End Var History
timeView = document.querySelector('.options .time > span'),
time = document.querySelector('.options .time > span span.min-sec'),
timeMs = document.querySelector('.options .time > span sup.ms'),
game = document.querySelector('.game'),
gameContainer = document.querySelector('.game .container'),
gameOverlay = document.querySelector('.game .overlay-start'),
gameOverEle = document.querySelector('.game .game-over'),
msgWinLoss = document.querySelector('.game .game-over .winLoss'),
viewResult = document.querySelector('.view-result span'),
viewTimeOut = document.querySelector('.time-out span'),
tryAgain = document.querySelector('.game .game-over .again'),
footer = document.querySelector('.footer'),
timeDown,
timeDownStart,
mins,
seconds,
mSeconds,
intervalCountDown,
endCountDown,
gameOver,
levelGame = document.querySelector('.options .level select'),
x,
imgs = [],
loopImgs;


// Get Src Imgs By Loop
for (loopImgs = 0; loopImgs < 51; loopImgs++) {
if (loopImgs <= 9) {
    imgs[loopImgs] = 'https://khaled-mindness.netlify.app/imgs/imgsRandom/' + '0' + loopImgs + '.JPG';
} else {
    imgs[loopImgs] = 'https://khaled-mindness.netlify.app/imgs/imgsRandom/' + loopImgs + '.JPG';
}
}
imgs.shift();
/*****************************************************************************************/
// Start Function Hook

function setTimeDownOnchangeLevel() {
'use strict';
switch (levelGame.value) {
case 'Easy':
    timeDown = 6 * 10 * 10;
    break;
case 'Middle':
    timeDown = 3 * 60 * 10;
    break;
case 'Hard':
    timeDown = 5 * 60 * 10;
    break;
case 'Very Hard':
    timeDown = 10 * 60 * 10;
    break;
}
timeDownStart = timeDown;
}
/************************************Loading*****************************************************/
// Function Progress Bar In Load
function progressLoad() {
'use strict';
funcPlusProg = setInterval(function () {
    var widthProg = window.parseInt(loadingProgress.style.width),
        textProg = window.parseInt(loadingProgress.innerHTML);
    widthProg += 1;
    textProg += 1;
    loadingProgress.innerHTML = textProg + '%';
    loadingProgress.style.width = widthProg + '%';
    if (widthProg === 89) {
        clearInterval(funcPlusProg);
    }
}, 1000);
}
/*****************************************************************************************/
function hideLoader() {
'use strict';
clearInterval(funcPlusProg);
loadingProgress.style.width = '100%';
loadingProgress.innerHTML = '100%';
setTimeout(function () {
    loading.children[2].classList.add('hideLoad');
    loading.children[3].classList.add('hideLoad');
}, 1200);
setTimeout(function () {
    loading.children[0].classList.add('hideLoad');
    loading.children[1].classList.add('hideLoad');
}, 1800);
setTimeout(function () {
    loading.parentNode.removeChild(loading);
    document.body.style.overflow = 'visible';
}, 3300);
}
/*****************************************************************************************/
// Functions About Me 
function showAbout() {
'use strict';
btnAbout.classList.remove('animate-view');
overlayAbout.classList.add('on');
}
function fixedAboutShow(e) {
'use strict';
e.stopPropagation();
overlayAbout.classList.add('on');
}
function hideAbout(e) {
'use strict';
e.stopPropagation();
overlayAbout.classList.remove('on');
for (imgAboutCount = 0; imgAboutCount < imgAbout.length; imgAboutCount++) {
    imgAbout[imgAboutCount].classList.remove('open');
}
}
function exitFullScreenGlobal() {
'use strict';
btnFullScreen.innerHTML = 'Full Screen';
fullScreen.classList.remove('on');
footer.style.display = 'block';
containerColorOpt.classList.remove('full');
if (document.exitFullscreen) {
    document.exitFullscreen();
} else if (document.msExitFullscreen) {
    document.msExitFullscreen();
} else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
}
}
function openFullScreen(ele) {
'use strict';
btnFullScreen.innerHTML = 'Exit Full Screen';
fullScreen.classList.add('on');
footer.style.display = 'none';
containerColorOpt.classList.add('full');
if (ele.requestFullscreen) {
    ele.requestFullscreen();
} else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
} else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
} else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
}
}
function toggleFullScreenGlobal(ele) {
'use strict';
if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    openFullScreen(ele);
} else {
    exitFullScreenGlobal();
}
}

var newFuncToggleScale = function (e) { 'use strict'; toggleFullScreenGlobal(this); e.stopPropagation(); };
for (imgAboutCount = 0; imgAboutCount < imgAbout.length; imgAboutCount++) {
imgAbout[imgAboutCount].onclick = newFuncToggleScale;
}
/*****************************************************************************************/
// Start Function Full Screen
window.onkeyup = function (e) {
'use strict';
if (e.keyCode === 27) {
    exitFullScreenGlobal();
}
};
btnFullScreen.onclick = function () {
'use strict';
toggleFullScreenGlobal(fullScreen);
};
/*****************************************************************************************/
// Start Function Color Option
function saveColorOpt() {
'use strict';
localStorage.setItem('colorOpt', inpOptColor.value);
}
function getColorOpt() {
'use strict';
var oldColorSave = localStorage.getItem('colorOpt') || '#F50057';
inpOptColor.value = oldColorSave;
document.documentElement.style.setProperty('--main_color', inpOptColor.value);
}
getColorOpt();
function changeColorOpt() {
'use strict';
document.documentElement.style.setProperty('--main_color', inpOptColor.value);
saveColorOpt();
}
function resetColor() {
'use strict';
inpOptColor.value = '#f50057';
document.documentElement.style.setProperty('--main_color', '#F50057');
saveColorOpt();
}
/*****************************************************************************************/
// Function Hide Options By Click Button Hide
function funcHideOptions() {
'use strict';
options.classList.remove('off');
time.classList.remove('off');
startGame.classList.remove('off');
hideOptions.textContent = 'Hide';
hideOptions.classList.remove('view');
game.classList.remove('off');
msgHideOptions.classList.remove('on');
}
function funcShowOptions() {
'use strict';
options.classList.add('off');
time.classList.add('off');
startGame.classList.add('off');
hideOptions.textContent = 'Show';
hideOptions.classList.add('view');
game.classList.add('off');
setTimeout(function () {
    msgHideOptions.classList.remove('on');
}, 2500);
}
/*****************************************************************************************/
function funcToggleOptions() {
'use strict';
if (options.classList.contains('off')) {
    funcHideOptions();
} else {
    msgHideOptions.classList.add('on');
    funcShowOptions();
}
}
/*****************************************************************************************/
// Function Random Imgs
function randomImgs(arrImgs) {
'use strict';
arrImgs = [].concat(arrImgs);
var i,
    randarr = [];
while (arrImgs.length) {
    i = Math.floor(Math.random() * arrImgs.length);
    randarr.push(arrImgs[i]);
    arrImgs.splice(i, 1);
}
return randarr;
}
/*****************************************************************************************/
// Function Print or Run Random Imgs 
var arrImgs,
newarrImgs;
function addRandomImgs(numArr) {
'use strict';
arrImgs = imgs.slice(0, numArr);
arrImgs = arrImgs.concat(arrImgs);
newarrImgs = randomImgs(arrImgs);
for (x = 0; x < numArr * 2; x = x + 1) {
    boxs[x].children[1].children[0].setAttribute('src', newarrImgs[x]);
}
}
/*****************************************************************************************/
// Function Click On Imgs
var e = 0;
function visibileImg($this, numSc, delayGoker) {
'use strict';
if ($this.classList.contains('click')) {
    e++;
    $this.classList.add('visibile');
    $this.classList.remove('click');
    var boxsVisibile = document.querySelectorAll('.game .row .box.visibile'),
        firstVisibile = boxsVisibile[0],
        fristSrc = firstVisibile.children[1].children[0].getAttribute('src'),
        lastVisibile,
        lastSrc,
        creMarkGoker;
    
    if ($this.classList.contains('goker')) {
        e = 0;
        $this.parentNode.style.zIndex = '9999';
        creMarkGoker = document.createElement('div');
        creMarkGoker.className = 'mark-goker';
        creMarkGoker.innerHTML = '*';
        $this.children[1].appendChild(creMarkGoker);
        $this.classList.add('visibile-fixed');
        $this.classList.add('visibile-mark');
        $this.classList.remove('goker');
        allScore += 0.5;
        score += 25;
        scoreEle.innerHTML = score;
        for (x = 0; x < boxs.length; x++) {
            boxs[x].classList.add('visibile');
            boxs[x].classList.remove('click');
        }
        setTimeout(function () {
            for (x = 0; x < boxs.length; x++) {
                boxs[x].classList.remove('visibile');
                if (boxs[x].classList.contains('visibile-fixed')) {
                    boxs[x].classList.remove('click');
                } else {
                    boxs[x].classList.add('click');
                }
            }
        }, delayGoker);
    }
    if (e >= 2) {
        lastVisibile = boxsVisibile[1];
        lastSrc = lastVisibile.children[1].children[0].getAttribute('src');
        if (fristSrc === lastSrc) {
            e = 0;
            firstVisibile.classList.remove('visibile');
            lastVisibile.classList.remove('visibile');
            firstVisibile.classList.add('visibile-fixed');
            lastVisibile.classList.add('visibile-fixed');
            setTimeout(function () {
                firstVisibile.classList.add('off');
                lastVisibile.classList.add('off');
            }, 350);
            score += 25;
            scoreEle.innerHTML = score;
            allScore++;
            if (allScore === numSc / 2) {
                setTimeout(function () {
                    gameOver();
                }, 500);
            }
        } else {
            e = 0;
            setTimeout(function () {
                firstVisibile.classList.remove('visibile');
                lastVisibile.classList.remove('visibile');
                firstVisibile.classList.add('click');
                lastVisibile.classList.add('click');
            }, 300);
            score -= 5;
            scoreEle.innerHTML = score;
        }
    }
}
}
/*****************************************************************************************/
// Function Remove Class Visibile and visibile-fixed When Game Over
function removeVisibileImgs() {
'use strict';
var f;
for (f = 0; f < boxs.length; f++) {
    boxs[f].classList.remove('visibile');
    boxs[f].classList.remove('visibile-fixed');
    boxs[f].classList.remove('off');
    boxs[f].classList.add('click');
}
}
/*****************************************************************************************/
// Function Set Height Boxs
function setHeightBoxs() {
'use strict';
var re;
for (re = 0; re < boxsmq.length; re++) {
    boxsmq[re].style.height = boxsmq[re].offsetWidth + 'px';
}
}
setHeightBoxs();
/*****************************************************************************************/
// Function Create Mins And Seconds
function creatTime(yourTimeWithSeconds) {
'use strict';
mins = Math.floor((yourTimeWithSeconds / 60) / 10);
seconds = Math.floor((yourTimeWithSeconds / 10) % 60);
mSeconds = Math.floor(yourTimeWithSeconds % 10);
if (mins < 10) { mins = '0' + mins; }
if (seconds < 10) { seconds = '0' + seconds; }
if (mSeconds < 10) { mSeconds = '0' + mSeconds; }
}
/*****************************************************************************************/
// Function Run End Game or End Time 
function gameOver() {
'use strict';
var newTimeOut = timeDownStart - timeDown,
    objHistory,
    f;
/****************************/
creatTime(newTimeOut);
time.innerHTML = 'Finsh Time';
timeMs.innerHTML = '';
timeMs.style.display = 'none';
endCountDown();
setTimeout(function () {
    for (f = 0; f < boxs.length; f++) {
        boxs[f].classList.remove('click');
        boxs[f].classList.remove('off');
        boxs[f].classList.add('visibile-fixed');
    }
}, 1000);
setTimeout(function () {
    gameContainerEnd.classList.add('hidden-game');
}, 2000);
setTimeout(function () {
    gameContainer.classList.add('end-game');
    setTimeout(function () {
        gameOverEle.classList.add('show-game-over');
    }, 100);
    startGame.style.zIndex = '25';
    btnStopTime.style.zIndex = '-1';
    removeVisibileImgs();
}, 2500);
btnStopTime.classList.add('on');
btnStopTime.classList.remove('view-color');
btnStopTime.classList.add('hide-game-over');
btnStopTime.innerHTML = 'Pause';
viewResult.innerHTML = score;
viewTimeOut.innerHTML = mins + ':' + seconds;
if (newTimeOut < timeDownStart) {
    if (score <= 0) {
        statusHistory = 'Lose';
        msgWinLoss.innerHTML = 'You Lose';
        msgWinLoss.style.color = '#f00';
        viewResult.style.color = '#f00';
    } else {
        statusHistory = 'Win';
        msgWinLoss.innerHTML = 'You Win';
        msgWinLoss.style.color = '#67e333';
        viewResult.style.color = '#67e333';
    }
    viewTimeOut.style.color = '#67e333';
} else {
    statusHistory = 'Lose';
    msgWinLoss.innerHTML = 'You Lose';
    msgWinLoss.style.color = '#f00';
    viewResult.style.color = '#f00';
    viewTimeOut.style.color = '#f00';
}
/* LocalStorage */
objHistory = {
    statusUser: statusHistory,
    scoreUser: score,
    levelUser: levelGame.value,
    timeUser: mins + ':' + seconds
};
historyItemLocal.push(objHistory);
saveAutoHistory(historyItemLocal, containerListItem);
localStorage.setItem('historyItemLocal', JSON.stringify(historyItemLocal));
historyTitleNotifi.style.display = 'block';
}
function saveAutoHistory(arrs, wrapper) {
'use strict';
wrapper.innerHTML = arrs.map(function (arr) {
    if (statusHistory === 'Win') {
        statusHistory = 'Win';
    } else {
        statusHistory = 'Lose';
    }
    emptyHistory.style.display = 'none';
    setUserName();
    setUserPhoto();
    brandName.children[0].innerHTML = nameUser.dataset.name;
    brandName.children[1].src = viewPhotoUser.src;
    return '<li class="' + arr.statusUser + '"> <div class="index-history"> ' + nameUser.dataset.name + ' <img src="' + viewPhotoUser.src + '"></div> <div class="view-history"> <div> <div><span>Status</span><span>' + arr.statusUser + '</span></div> <div><span>Level</span><span>' + arr.levelUser + '</span></div> </div> <div> <div><span>Score</span><span>' + arr.scoreUser + '</span></div> <div><span>Time</span><span>' + arr.timeUser + '</span></div> </div> </div> </li>';
}).join('');
historyTitleNotifi.innerHTML = containerListItem.children.length;
if (containerListItem.children.length >= 1) {
    historyTitleNotifi.style.display = 'block';
}
}
saveAutoHistory(historyItemLocal, containerListItem);
/*****************************************************************************************/
// All Functions History
function toggleListHistory(e) {
'use strict';
e.stopPropagation();
msgStartGame.classList.remove('on');
listHistory.classList.toggle('on');
historyTitleNotifi.style.display = 'none';
}
function viewListHistory(e) {
'use strict';
e.stopPropagation();
listHistory.classList.add('on');
}
function funcClearAllHistory() {
'use strict';
listHistory.classList.remove('on');
setTimeout(function () {
    historyTitleNotifi.style.display = 'none';
    containerListItem.innerHTML = ' ';
    emptyHistory.style.display = 'block';
    historyItemLocal.splice(0, historyItemLocal.length);
    localStorage.removeItem('historyItemLocal');
}, 300);
}
function clearAllHisByClickClear(e) {
'use strict';
e.stopPropagation();
funcClearAllHistory();
}
/*****************************************************************************************/
function viewPhoto($this) {
'use strict';
if ($this.files && $this.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
        photoUserSrc = e.target.result;
        viewPhotoUser.src = photoUserSrc;
    };
    reader.readAsDataURL($this.files[0]);
}
}
/*****************************************************************************************/
btnLogin.onclick = function () {
'use strict';
wrapperLogin.classList.add('on');
};
btnCloseLogin.onclick = function () {
'use strict';
wrapperLogin.classList.remove('on');
};
photoUser.onchange = function () {
'use strict';
viewPhoto(this);
};
wraViewPhotoUser.onmouseover = function () {
'use strict';
if (viewPhotoUser.getAttribute('src') === 'https://s3.postimg.org/p3h6dr7lv/user.png') {
    this.classList.remove('change');
} else {
    this.classList.add('change');
}
};
removePhotoUser.onclick = function () {
'use strict';
localStorage.setItem('userphoto', 'https://s3.postimg.org/p3h6dr7lv/user.png');
viewPhotoUser.src = localStorage.getItem('userphoto');
wraViewPhotoUser.classList.remove('change');
photoUser.value = '';
};
function setUserName() {
'use strict';
var newName = localStorage.getItem('username') || 'username';
nameUser.dataset.name = newName;
brandName.children[0].innerHTML = nameUser.dataset.name;
}
setUserName();
function setUserPhoto() {
'use strict';
var newPhoto = localStorage.getItem('userphoto') || 'https://s3.postimg.org/p3h6dr7lv/user.png';
viewPhotoUser.src = newPhoto;
brandName.children[1].src = viewPhotoUser.src;
}
setUserPhoto();
function chainConfirm() {
'use strict';
nameUser.dataset.name = nameUser.value;
localStorage.setItem('username', nameUser.dataset.name);
localStorage.setItem('userphoto', viewPhotoUser.src);
wrapperLogin.classList.remove('on');
funcClearAllHistory();
brandName.children[0].innerHTML = nameUser.dataset.name;
brandName.children[1].src = viewPhotoUser.src;
}
setDataUser = function (e) {
'use strict';
e.preventDefault();
var nameVal = nameUser.value;
nameVal.trim();
if (nameVal === '') { return; }
if (/^\s+$/.test(nameVal)) { return; }
if (localStorage.getItem('checked') === 'false') {
    this.classList.add('sub');
} else {
    chainConfirm();
    this.reset();
}
};
inputViewConfirm.onchange = function () {
'use strict';
localStorage.setItem('checked', this.checked);
};
if (localStorage.getItem('checked') === 'true') {
inputViewConfirm.checked = true;
} else {
inputViewConfirm.checked = false;
}
localStorage.setItem('checked', inputViewConfirm.checked);

btnConfirmLogin.onclick = function () {
'use strict';
formLogin.classList.remove('sub');
chainConfirm();
formLogin.reset();
};
btnCancelLogin.onclick = function () {
'use strict';
formLogin.classList.remove('sub');
};
formLogin.addEventListener('submit', setDataUser);
/*****************************************************************************************/
// Function Time Down
function countDown() {
'use strict';
intervalCountDown = setInterval(function () {
    creatTime(timeDown);
    time.innerHTML = mins + ':' + seconds;
    timeMs.innerHTML = mSeconds;
    if (timeDown !== 0) {
        timeDown--;
    } else { gameOver(); }
}, 100);
}
/*****************************************************************************************/
// Function End Time Down
function endCountDown() {
'use strict';
clearInterval(intervalCountDown);
}
// Function Reset Score 
function resetScore() {
'use strict';
allScore = 0;
score = 0;
scoreEle.innerHTML = score;
}
/*****************************************************************************************/
// Function Run On Change Level Game
function resetBoxs() {
'use strict';
for (x = 0; x < rowBoxs.length; x++) {
    rowBoxs[x].style.display = 'none';
}
rowBoxs[0].style.display = 'block';
rowBoxs[1].style.display = 'block';
}
function resetMarginBoxsMd() {
'use strict';
for (md = 0; md < rowBoxs.length; md++) {
    rowBoxs[md].children[0].classList.remove('media-easy');
    rowBoxs[md].children[5].classList.remove('media-easy');
}
}
/*****************************************************************************************/
function funcLoopChangeLevel(numBoxs, numDelayGoker) {
'use strict';
var newFuncAddVisibile = function () { visibileImg(this, numBoxs, numDelayGoker); },
    imgGoker = document.querySelectorAll('img[src="http://khaled-test-smart.bitballoon.com/imgs/imgsRandom/20.JPG"]'),
    gok;
for (x = 0; x < boxs.length; x++) {
    boxs[x].onclick = newFuncAddVisibile;
    boxs[x].classList.remove('goker');
    if (boxs[x].children[1].children.length === 2) {
        boxs[x].children[1].removeChild(boxs[x].children[1].children[1]);
    }
}
setTimeDownOnchangeLevel();
timeMs.style.display = 'inline';
time.innerHTML = '00:00';
timeMs.innerHTML = '00';
endCountDown();
startGame.style.zIndex = '25';
btnStopTime.style.zIndex = '-1';
btnStopTime.classList.add('on');
btnStopTime.classList.remove('view-color');
btnStopTime.innerHTML = 'Pause';
gameOverlay.style.display = 'block';
hideOptions.classList.remove('viewport');
removeVisibileImgs();
resetScore();
setHeightBoxs();
// Set Class In Imgs Goker 
for (gok = 0; gok < imgGoker.length; gok++) {
    imgGoker[gok].parentNode.parentNode.classList.add('goker');
}
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Easy Game
function showEasy() {
'use strict';
resetBoxs();
addRandomImgs(10);
game.classList.remove('very-hard');
funcLoopChangeLevel(20, 2000);
levelGame.value = 'Easy';
for (md = 0; md < rowBoxs.length; md++) {
    rowBoxs[md].children[0].classList.add('media-easy');
    rowBoxs[md].children[5].classList.add('media-easy');
}
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Middle Game
function showMiddle() {
'use strict';
resetBoxs();
rowBoxs[2].style.display = 'block';
rowBoxs[3].style.display = 'block';
addRandomImgs(20);
game.classList.remove('very-hard');
funcLoopChangeLevel(40, 6000);
levelGame.value = 'Middle';
resetMarginBoxsMd();
}
/*****************************************************************************************/
// Function Run On Change Level Game Is Hard Game
function showHard() {
'use strict';
resetBoxs();
rowBoxs[2].style.display = 'block';
rowBoxs[3].style.display = 'block';
rowBoxs[4].style.display = 'block';
rowBoxs[5].style.display = 'block';
addRandomImgs(30);
game.classList.add('very-hard');
funcLoopChangeLevel(60, 10000);
levelGame.value = 'Hard';
resetMarginBoxsMd();
}
function showVeryHard() {
'use strict';
for (x = 0; x < rowBoxs.length; x++) {
    rowBoxs[x].style.display = 'block';
}
addRandomImgs(50);
game.classList.add('very-hard');
funcLoopChangeLevel(100, 15000);
levelGame.value = 'Very Hard';
resetMarginBoxsMd();
}
/*****************************************************************************************/
// Run Function Change Level
function selectOptionLevel(ele) {
'use strict';
switch (ele) {
case 'Easy':
    showEasy();
    break;
case 'Middle':
    showMiddle();
    break;
case 'Hard':
    showHard();
    break;
case 'Very Hard':
    showVeryHard();
    break;
}
localStorage.setItem('level', levelGame.value);
}
/*****************************************************************************************/
// Function Try Again Game
function gameAgain() {
'use strict';
var re,
    levelNow = levelGame.value;
gameOverEle.classList.remove('show-game-over');
setTimeout(function () {
    for (re = 0; re < boxsmq.length; re++) {
        boxsmq[re].style.height = '60px';
    }
    gameContainer.classList.remove('end-game');
    setHeightBoxs();
    setTimeout(function () {
        gameContainerEnd.classList.remove('hidden-game');
    }, 100);
}, 700);
funcShowOptions();
selectOptionLevel(levelNow);
countDown();
resetScore();
removeVisibileImgs();
gameOverlay.style.display = 'none';
hideOptions.classList.add('viewport');
startGame.style.zIndex = '-1';
btnStopTime.style.zIndex = '25';
btnStopTime.innerHTML = 'Pause';
btnStopTime.classList.remove('hide-game-over');
setTimeout(function () {
    timeView.classList.add('on');
}, 200);
setTimeout(function () {
    timeView.classList.remove('on');
}, 2000);
}
function pauseTime() {
'use strict';
if (btnStopTime.classList.contains('on')) {
    btnStopTime.classList.remove('on');
    btnStopTime.classList.add('view-color');
    endCountDown();
    btnStopTime.innerHTML = 'Play';
    gameOverlay.style.display = 'block';
} else {
    btnStopTime.classList.add('on');
    btnStopTime.classList.remove('view-color');
    btnStopTime.innerHTML = 'Pause';
    countDown();
    gameOverlay.style.display = 'none';
}
}
/*****************************************************************************************/
function funcStartGame() {
'use strict';
if (startGame.classList.contains('on')) {
    gameAgain();
}
}
function showMsgPlay(e) {
'use strict';
var body = document.body,
    animateScroll;
listHistory.classList.remove('on');
e.stopPropagation();
if (body.scrollTop > 130) {
    animateScroll = setInterval(function () {
        body.scrollTop -= 40;
        if (body.scrollTop === 0) {
            clearInterval(animateScroll);
        }
    }, 10);
}
msgStartGame.classList.add('on');
msgStartGame.classList.add('animate');
setTimeout(function () {
    msgStartGame.classList.remove('animate');
}, 600);
}
/*****************************************************************************************/
// Run Functions Here
window.onclick = function (e) {
'use strict';
e.stopPropagation();
msgStartGame.classList.remove('on');
listHistory.classList.remove('on');
setHeightBoxs();
};
window.onload = function () {
'use strict';
hideLoader();
var oldLevel = localStorage.getItem('level') || 'Middle';
selectOptionLevel(oldLevel);
};
progressLoad();
window.onkeydown = function (e) {
'use strict';
if (e.keyCode === 27) {
    funcHideOptions();
}
};
window.onresize = function () {
'use strict';
setHeightBoxs();
};
window.onbeforeunload = function () {
'use strict';
if (score !== 0) {
    return 'Do you want to leave this site';
}
};
btnAbout.addEventListener('click', showAbout);
overlayAbout.addEventListener('click', hideAbout);
about.addEventListener('click', fixedAboutShow);
btnHideAbout.addEventListener('click', hideAbout);
tryAgain.addEventListener('click', gameAgain);
levelGame.addEventListener('change', function () {
'use strict';
var lvlNow = this.value;
selectOptionLevel(lvlNow);
});
inpOptColor.addEventListener('change', changeColorOpt);
inpOptColor.addEventListener('mousemove', changeColorOpt);
btnResetColor.addEventListener('click', resetColor);
hideOptions.addEventListener('click', funcToggleOptions);
startGame.addEventListener('click', funcStartGame);
btnStopTime.addEventListener('click', pauseTime);
gameOverlay.onclick = function (e) {
'use strict';
showMsgPlay(e);
setHeightBoxs();
};

// Active Function History
historyTitle.addEventListener('click', toggleListHistory);
listHistory.addEventListener('click', viewListHistory);
clearAllHistory.addEventListener('click', clearAllHisByClickClear);
/*****************************************************************************************/



/*
body :  https://d33wubrfki0l68.cloudfront.net/imgs/2c27e2a8ba5324aec818d04a47f37eef6868ce2f/bg-body.jpg

arrow : 
https://d33wubrfki0l68.cloudfront.net/imgs/8adba5ac6c580bde349489be1ffcd75791fe8bbe/arrow-select.png

bg-img : 
https://d33wubrfki0l68.cloudfront.net/imgs/dbe0d97a90a292eda3e44707f5b59bc46b09fff5/bg-img.jpg

https://s3.postimg.org/6y47zp83n/icon_upload.png
https://s3.postimg.org/nn5nvm4oz/logo_rm.png
https://s3.postimg.org/p3h6dr7lv/user.png



*/