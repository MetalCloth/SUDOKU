var numselect=null;
var tiles=null;
window.onload=function(){
    setgame();
}
const win=0;
var lastSelected=null;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
var count=[
    4,3,3,4,3,5,5,4,4
]

function setgame(){
    //<div id="1" class="nigg numbers">23</div>
    for(let i=1;i<=9;i++){
        let num=document.createElement("div");
        num.id=i;
        num.className="nigg";
        num.innerText=i;
        num.addEventListener("click",function(){
            
            if(numselect!=null){
                numselect.classList.remove("sambar");
                
                
            }
            numselect=this;
            
            hightlight();
        
            dehigh();
            numselect.classList.add("sambar");
          
        });
        num.classList.add("numbers");
        
        document.getElementById("digits").appendChild(num);
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let num=document.createElement("div");
            num.id=i.toString()+"-"+j.toString();
            if(board[i][j]!="-"){
                num.innerText=board[i][j];
            }
            num.addEventListener("click",selectontiles);
            if(i==0){
                num.classList.add("firstrow");
            }
            if(j==0){
                num.classList.add("firstcolumn");
            }
            if(i==8){
                num.classList.add("lastrow");
            }
            if(j==8){
                num.classList.add("lastcolumn");
            }
            num.classList.add("big");
            
            if(i==2 || i==5 ){
                num.classList.add("horizontal");
            }
            if(j==2 || j==5){
                num.classList.add("vertical");
            }
            
            document.getElementById("blocks").append(num);
        }
    }
}
function checkifvalid(){
    return 0;
}
function selectontiles(){
    if(numselect){
        if(this.innerText==""){
            hightlight();
            this.innerText=numselect.id;
            hightlight();
            correctness(this);
        }
    }
    if(!numselect){
        let m=this.id;
        let cum=this.id.split("-");
        let r=parseInt(cum[0]);
        let c=parseInt(cum[1]);
        
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
            let x=document.getElementById(`${i.toString()}-${j.toString()}`);
            if(x.innerText==board[r][c]){
            x.style.backgroundColor="#7CB9E8";
            } 
        }
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
            let x=document.getElementById(`${i.toString()}-${j.toString()}`);
            if(x.innerText!=board[r][c]){
                x.style.backgroundColor="white";
            }
            }
        }
        }   
    }
   
}
function correctness(m){
    //numselect.id;
    
    let cum=m.id.split("-");
    let r=parseInt(cum[0]);
    let c=parseInt(cum[1]);
    if(m.innerText==solution[r][c]){
        count[m.innerText-'1']++;
        if(count[m.innerText-'1']==9){
            let element=document.getElementById(`${m.innerText}`);
            element.classList.add("hide");
            win++;
            if(win==9){
                displaywin();
            }
            numselect=null;
        }
        console.log(count);
        m.style.color="#3457D5";
        m.backgroundColor="white";

    }
    else{
        m.style.color="#FF033E";
        m.backgroundColor="white";
    
        removeNumberAfterDelay(m);
    }
    
}
function removeNumberAfterDelay(m) {
     setTimeout(() => {
        m.textContent = ""; 
        dehigh();
    }, 1300);
}
function displaywin(){
    YOU
}
function hightlight(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
        let x=document.getElementById(`${i.toString()}-${j.toString()}`);
        if(x.innerText==numselect.innerText){
        x.style.backgroundColor="#73C2FB";
        } 
    }
    
}
}

function dehigh(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
        let x=document.getElementById(`${i.toString()}-${j.toString()}`);
        if(x.innerText!=numselect.innerText){
            x.style.backgroundColor="white";
        }
    }
}
}
