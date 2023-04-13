let msg=document.querySelector(".msg");
let guess=document.querySelector("input");
let btn=document.querySelector(".btn");
let play=false;
let newWords,randWords;

let sWords=['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];

let createNewWords = () => {  
    let ranNum=Math.floor(Math.random()*sWords.length);
    let newTempSwords=sWords[ranNum];
    return newTempSwords;
}

const scrambleWords=(arr)=>
{
    for(let i=arr.length-1;i>=0;i--)
    {
        let temp=arr[i];
        let j=Math.floor(Math.random()*(i+1));

        arr[i]=arr[j];
        arr[j]=temp;

    }

    console.log(arr);
    return arr;
}


btn.addEventListener('click',()=>{
    if(!play)
    {
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split(""));
        let finalWord=randWords.join("");
        msg.innerHTML=`Guess the word: ${finalWord}`;

    }
    else
    {
        let tempWord=guess.value;
        if(tempWord===newWords)
        {
            play=false;
            msg.innerHTML=`Awesome It's Correct.It is ${newWords}`;
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else 
        {
            msg.innerHTML=`Sorry Boss It's not Correct.It is ${randWords.join("")}`;
        }
    }
});