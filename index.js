let prev_arrow = document.querySelector(".arrow-prev");
let next_arrow = document.querySelector(".arrow-next");
let counter = document.querySelector(".counter");
let main_img = document.querySelector(".main-slider img");
let thums = document.querySelectorAll(".thum");

let imgpaths=Array.from(thums,thum=>thum.querySelector("img").src);
current_idx=0;

function gotoimg(idx){
    current_idx=idx%imgpaths.length;
    main_img.src=imgpaths[current_idx];
    counter.textContent=`${current_idx+1} / ${imgpaths.length}`;
    thums.forEach((thum,i)=>{
        thum.classList.toggle('active',i===current_idx);
    })
}

prev_arrow.addEventListener('click',()=>{
    gotoimg(current_idx-1);
});

next_arrow.addEventListener('click',()=>{
    gotoimg(current_idx+1);
});

thums.forEach((thum,i)=>{
    thum.addEventListener('click',()=>{
        gotoimg(i);
    });
});

