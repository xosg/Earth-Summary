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


    await new Promise(r => setTimeout(r, 1500));
    // 浏览器地址栏
    await mouse.move(straightTo({ x: 926, y: 53 }));
    await new Promise(r => setTimeout(r, 500));
    await mouse.click(0);
    await clipboard.setContent('https://creator.xiaohongshu.com/publish/publish?source=official&from=menu&target=article');
    // input the address
    await keyboard.pressKey(Key.LeftControl, Key.V); // For Windows and Linux
    await keyboard.releaseKey(Key.LeftControl, Key.V); // For Windows and Linux
    // Enter
    await keyboard.pressKey(Key.Enter); // Press Enter
    await keyboard.releaseKey(Key.Enter);
    // wait for page to load
    await new Promise(r => setTimeout(r, 6_000));

    // 导入链接 button
    await mouse.move(straightTo({ x: 493, y: 678 }));
    await new Promise(r => setTimeout(r, 500));
    await mouse.click(0); 
    await new Promise(r => setTimeout(r, 2000));

    // the new textarea in the middle of the page
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
    // 等待排版。。。
    await new Promise(r => setTimeout(r, 33_000));

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
    await new Promise(r => setTimeout(r, 8_000));
    // 此时3个标签页：上传视频（选中）、上传图文、写长文
    // 写长文 按钮
    // await mouse.move(straightTo({ x: 499, y: 207 }));
    // await new Promise(r => setTimeout(r, 800));
    // await mouse.click(0);
    // await new Promise(r => setTimeout(r, 1000));
    // 此时跳转到 写长文 页面，出现两个按钮，新的创作、导入链接





}

async function run() {



    // await new Promise(r => setTimeout(r, 2000));
    // await mouse.getPosition().then(position => {
    //     console.log(position);
    // });
    // return

    // Win + Space: switch to Eng

    // keyboard.config.autoDelayMs = 100;

    
    
    
    const urls = require('./url.json')
    console.log(urls.length)

    // initial time for me to switch to browser page
    await new Promise(r => setTimeout(r, 2000));

    for (let url of urls) {
        await cycle(url);
        console.log(url)
    }

}



run()