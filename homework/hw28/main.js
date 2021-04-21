const sleep = (delay) => new Promise((resolve)=>{
    setTimeout(resolve,delay);
});


window.addEventListener("load",async()=>{
    console.log("Начали");

    await sleep(2000);

    console.log("Закончили")
});
