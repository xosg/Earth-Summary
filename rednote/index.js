// npm install @nut-tree-fork/nut-js --https-proxy http://localhost:7890
// npm install @nut-tree-fork/nut-js --https-proxy http://localhost:7890


// yarn config set proxy "http://127.0.0.1:7890"
// yarn config set https-proxy "http://127.0.0.1:7890"

// let setTimeout = function (f, time) {
//     window.setTimeout(f, time + Math.random() * 1 * 1000)
// }


// declare enum Button {
//     LEFT = 0,
//     MIDDLE = 1,
//     RIGHT = 2
// }


const {
    mouse,
    keyboard,
    Key,
    straightTo,
    clipboard
} = require("@nut-tree-fork/nut-js");


async function cycle(url) {


    // await new Promise(r => setTimeout(r, 2000));
    // await mouse.getPosition().then(position => {
    //     console.log(position);
    // });
    // return


    // 打开小红书创作平台 https://creator.xiaohongshu.com/publish
    // 导入链接 按钮
    await mouse.move(straightTo({ x: 493, y: 678 }));

    await new Promise(r => setTimeout(r, 500));

    await mouse.click(0); // Left click

    await new Promise(r => setTimeout(r, 2000));

    // 中间的链接输入框
    await mouse.move(straightTo({ x: 842, y: 530 }));
    await new Promise(r => setTimeout(r, 500));
    await mouse.click(0);
    await new Promise(r => setTimeout(r, 500));
    // await keyboard.type(url);
    await clipboard.setContent(url);
    await keyboard.pressKey(Key.LeftControl, Key.V); // For Windows and Linux
    await keyboard.releaseKey(Key.LeftControl, Key.V); // For Windows and Linux
    // 此时，url已经被粘贴到输入框中
    
    await new Promise(r => setTimeout(r, 800));

    // 一键排版 按钮
    await mouse.move(straightTo({ x: 1017, y: 620 }));

    await new Promise(r => setTimeout(r, 500));

    await mouse.click(0); // Left click

    await new Promise(r => setTimeout(r, 30_000));

    // 下一步 按钮
    await mouse.move(straightTo({ x: 312, y: 958 }));
    await new Promise(r => setTimeout(r, 1_000));
    await mouse.click(0); // Left click


    await new Promise(r => setTimeout(r, 10_000));
    // 发布 按钮
    await mouse.move(straightTo({ x: 312, y: 963 }));
    await new Promise(r => setTimeout(r, 500));
    await mouse.click(0); // Left click

    // 发布完后会5秒自动跳转到下方链接：
    // https://creator.xiaohongshu.com/publish/publish?source=official&published=true
    await new Promise(r => setTimeout(r, 10_000));
    // 此时3个标签页：上传视频（选中）、上传图文、写长文
    // 写长文 按钮
    await mouse.move(straightTo({ x: 499, y: 207 }));
    await new Promise(r => setTimeout(r, 800));
    await mouse.click(0);
    await new Promise(r => setTimeout(r, 1000));
    // 此时跳转到 写长文 页面，出现两个按钮，新的创作、导入链接





}

async function run() {

    // keyboard.config.autoDelayMs = 100;
    await new Promise(r => setTimeout(r, 2000));
    await clipboard.setContent('hello world');
    await keyboard.pressKey(Key.LeftControl, Key.V); // For Windows and Linux
    await keyboard.releaseKey(Key.LeftControl, Key.V); // For Windows and Linux

    return



    const urls = require('./url.json')
    console.log(urls.length)
    // return
    await new Promise(r => setTimeout(r, 2000));

    for (let url of urls) {
        await cycle(url);
        console.log(url)
    }

}



run()