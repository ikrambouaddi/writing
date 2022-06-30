const write ='My viewers on twitch are the best !! <3 ; i love you ikram';

let index =0;


function writeText(){
document.body.innerHTML =write.slice(0,index)
index++;
if(index> write.length ){
    index =0;
}
}

setInterval(writeText,200)