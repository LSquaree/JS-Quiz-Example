// var questioncontainer=document.querySelector('.quescontainer');
var submitbtn=document.getElementsByClassName('submit')[0];
var scorebox=document.querySelector('.scorebox');
var scoreboxspan=document.querySelector('.scorebox span');
var restartbtn=document.getElementById('restart');
var quitbtn=document.getElementById('quit');
submitbtn.addEventListener('click',function(){
    var score=0;
    var q1=document.querySelector('input[name="q1"]:checked').value;
    var q2=document.querySelector('input[name="q2"]:checked').value;
    var q3=document.querySelector('input[name="q3"]:checked').value;
    var q4=document.querySelector('input[name="q4"]:checked').value;
    var q5=document.querySelector('input[name="q5"]:checked').value;
    var q6=document.querySelector('input[name="q6"]:checked').value;
    var q7=document.querySelector('input[name="q7"]:checked').value;
    var q8=document.querySelector('input[name="q8"]:checked').value;
    var q9=document.querySelector('input[name="q9"]:checked').value;
    var q10=document.querySelector('input[name="q10"]:checked').value;
    // console.log("q1 value is ",q1,q2)
    var correctanswerarr=['a','a','a','a','a','b','b','b','b','b']
    var customanswerarr=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    // for(let i=1;i<11;i++){
    //     customanswerarr.push('q'+i);
    // }
    // console.log(customanswerarr)
    for(let i=0;i<correctanswerarr.length;i++){
        var correctid=(i+1)+correctanswerarr[i];
        // document.getElementById(correctid).parentElement.style.border="2px solid green";
        document.getElementById(correctid).parentElement.style.background="#91e67a";


    }
    for(let i=0;i<correctanswerarr.length;i++){
        if(correctanswerarr[i]==customanswerarr[i])
            score++;
        else{
            // console.log('not equal is ',"q"+(i+1));
            var notequal=eval("q"+(i+1));
            var notequalid=(i+1)+notequal;
            // console.log(notequalid);
            // console.log(typeof notequalid)
            // var wrongbox=document.getElementById("'"+notequalid+"'");
            // console.log(document.getElementById(notequalid).parentElement);
            // document.getElementById(notequalid).parentElement.style.border="2px solid red"
            document.getElementById(notequalid).parentElement.style.background="#f78d86";
           

            // console.log(wrongbox)
            // wrongbox.style.border="1px solid red";
            // console.log((i+1)+notequal);

            // console.log(document.querySelector('input[name="'+notequal+'"]'))
        }
    }
    // console.log("score is ",score);
    // console.log(scoreboxspan)
    // questioncontainer.style.display='none';
    scorebox.style.display='flex';
    scoreboxspan.innerHTML=score;
})
restartbtn.addEventListener('click',function(){
    scorebox.style.display='none';
    // document.querySelector('input[name="q1"]')=null;
    // document.querySelector('input[name="q2"]')=null;
    // document.querySelector('input[name="q3"]')=null;
    // document.querySelector('input[name="q4"]')=null;
    // document.querySelector('input[name="q5"]')=null;
    // document.querySelector('input[name="q6"]')=null;
    // document.querySelector('input[name="q7"]')=null;
    // document.querySelector('input[name="q8"]')=null;
    // document.querySelector('input[name="q9"]')=null;
    // document.querySelector('input[name="q10"]')=null;
})
quitbtn.addEventListener('click',function(){
    scorebox.style.display='none';
})