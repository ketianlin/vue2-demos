// async 关键字使用
async function p1(){
    return 'p1';
}

async function p2(){
    return 'p2';
}

async function p3(){
    return 'p3';
}

async function run(){
    let r1 = await p1();
    let r2 = await p2();
    let r3 = await p3();

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log('async,await方式，执行3个方法完毕');
}

run();