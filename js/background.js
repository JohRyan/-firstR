/*
2023.11.22
소멘텀 메인에 뜨는 배경
*/

const images= [
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"
    ,"9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"
    ,"16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg"
];


const selectImage = images[Math.floor(Math.random()*images.length)];
const befordImage = selectImage;
const bgImage = document.createElement("img");
//console.log(bgImage);
bgImage.src=`img/${selectImage}`;
//console.log(bgImage);
document.body.appendChild(bgImage);

const entries = performance.getEntriesByType("navigation")[0];
if(entries.type === "reload"){
    console.log('새로고침');
}
