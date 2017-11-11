var keys = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    'length': 3
}

var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
}

var hashInStorage = JSON.parse(localStorage.getItem('hash') || 'null')
if (hashInStorage) {
    hash = hashInStorage
}

var index = 0;
while (index < keys.length) {
    var rowDiv = document.createElement('div');
    var row = keys[index];

    var index2 = 0;
    while (index2 < row.length) {
        var kbd = document.createElement('kbd');
        kbd.textContent = row[index2]
        var button = document.createElement('button');
        button.id = row[index2];
        button.textContent = '编辑';
        button.onclick = function(event) {
            var key = event.target.id;
            x = prompt('请给我一个网址')
            hash[key] = x;
            localStorage.setItem('hash', JSON.stringify(hash))
        }
        kbd.appendChild(button)
        rowDiv.appendChild(kbd);
        index2 = index2 + 1;
    }

    keyboardWrapper.appendChild(rowDiv);
    index = index + 1;
}

document.onkeypress = function(event) {
    var key = event.key;
    var url = hash[key];
    window.open('http://' + url, '_blank');
}