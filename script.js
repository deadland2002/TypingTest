var tempval = "";
var completed = 0;
var timestart = false;
var starttime=0;
var endtime=0;
var completedbool = false;
var res;
var words = [];
var limit = 0;

var allwords = [
    "Though",    "assume",    "the",    "latter",    "jewel",    "noisy",    "millimeter",    "The",    
    "first",    "blockish",    "account",    "is",    "its",    "own",
    "way",    "soap",    "digital",    "the",
    "appeal",    "assumed",    "bardic",    "move",    "tile",    "can",    "hardly",    "considered",
    "vaneless",    "shampoo",    "without",    "also",    "being",    "shoulder",    "welcome",    "bite",
    "pine",    "comes",    "with",    "the",    "thought",    "that",    "the",    "smelly",
    "tongue",    "handicap",    "Passbooks",    "are",    "labrid",    "copies",    "It",    "undeniable",
    "fact",    "really",    "the",    "whistle",    "office",    "becomes",    "drossy",    "close",
    "partridge",    "can",    "hardly",    "considered",    "sapid",    "node",    "without",    "also",
    "being",    "spleen",    "The",    "literature",    "would",    "have",    "believe",    "that",
    "deject",    "software",    "not",    "but",    "phone",    "One",    "cannot",    "separate",    "mosques",    "from",
    "blinding",    "sushis",    "congo",    "sees",    "wash",    "gripple",    "refrigerator",    "One",    "cannot",
    "separate",    "sparrows",    "from",    "prideful",    "customers",    "Some",    "air",
    "headlines",    "are",    "thought",    "simply",    "sounds",    "sphynx",    "insides",  "mark", "know",  
    "that",    "authors",    "often",    "misinterpret",    "the",    "angora",    
    "muted",    "lycra",    "when",    "actuality",    "feels",    "more",    "like",    "unfanned",    "ambulance",    
    "Unfortunately",    "that",    "wrong",    "the",    "contrary",    "the",    "alleies",    "could",    "said",    
    "resemble",    "driest",    "shows",    "offence",    "the",    "flax",    "assumed",    "bitless",    "whiskey",    
    "The",    "first",    "rakish",    "disadvantage",    "is",    "its",    "own",    "way",    "fan",    "This",    
    "not",    "discredit",    "the",    "idea",    "that",    "the",    "mattock",    "son",    "becomes",    "emptied",    
    "greece",    "ant",    "the",    "organ",    "spain",    "One",    "cannot",    "separate",    "indices",    "from",    
    "unlaid",    "clouds",    "Extending",    "this",    "logic",    "their",    "hippopotamus",    "was",    "this",    "moment",    
    "steamtight",    "glue",    "The",    "literature",    "would",    "have",    "believe",    "that",    "brumous",    "zoo", 
    "not",    "but",    "shear",    "more",    
    "specific",    "slime",    "can",    "hardly",    "considered",    "unscarred",    "exchange",    "without",    "also",    "being",   
    "catsup",    "Those",    "slips",    "are",    "nothing",    
    "more",    "than",    "actresses",    "Some",    "posit",    "the",    "prescribed",    "nitrogen",    "less",    "than",    "crafty",    "One",    "cannot",  
    "separate",    "ideas",    
    "from",    "hircine",    "pimples",    "undercloth",    "stubborn",    "carp",    "However",    "before",    "vinyls",    "transports",    "were",    "only",  
    "satins",    "talk",    "the",    
    "fruit",    "assumed",    "gaudy",    "tomato",    "paltry",    "wine",    "slave",    "the",    "mind",    "Few",    "can",    "name",    "wifeless",    "shirt",    "that",    "satvik",    
    "damning",    "vermicelli",    "Their",    "success",    "was",    "this",    "moment",    "crumbly",    "jaguar",    "The",    "onshore",    "word",    "reveals",    "itself",    "trinal",    
    "garlic",    "those",    "who",    "look",    "footworn",    "tin",    "twist",    "the",    "mind",    "Unfortunately",    "that",    "wrong",    "the",    "contrary",    "patch",    "sees",    
    "propane",    "beamish",    "plier",    "Bouffant",    "holes",    "show",    "how",    "motorcycles",    "can",    "nations",    "day",    "the",    "resolution",    "assumed",    "mobbish",    
    "indonesia",    "flower",    "the",    "litter",    "assumed",    "crescive",    "net",    "The",    "first",    "gemel",    "leopard",    "is",    "its",    "own",    "way",    "rate",    "This",    
    "could",    "be",    "perhaps",    "the",    "first",    "repand",    "pink",    "is",    "its",    "own",    "way",    "hyacinth",    "Otters",    "are",    "outlaw",    "possibilities",    
    "sublimed",    "apparel",    "without",    "subwaies",    "truly",    "year",    "scratchless",    "toasts",    "ancient",    "times",    "their",    "specialist",
    ]

async function fetchwords(limit){
    do{
        words.push(allwords[Math.floor(Math.random()*allwords.length)]);
    }while(words.length<limit);
    showwords();
}


function initiate(e){
    const element = e;
    console.log(e);
    const inp = p = element.parentElement.children[0];
    var value = inp.value;
    if(value>=10){
        fetchwords(value)
        limit = value;
    }else{
        alert("value must be greater than 10")
    }
}



document.addEventListener("keydown",(e)=>{keypress(e)})

function showwords(){
    const worddiv = document.getElementById("word-ul");
    const bullets = document.getElementById("bullet");

    worddiv.innerHTML = "";
    bullets.innerHTML = "";
    
    words.forEach((single)=>{
        if(single.length==0){
            completed++;
            return;
        }
        worddiv.innerHTML += "<li class='words active-words'>" + single + "</li>";
        bullets.innerHTML += "<span class='dots active-bullet'>" + "</span>";
    })
}

async function checkval(temp){
    const worddiv = document.getElementById("word-ul");
    var li = document.querySelectorAll(".active-words");
    var dots = document.querySelectorAll(".active-bullet");


    for(var i=0 ; i<li.length ; i++){

        var word = li[i].innerHTML;
        
        if(temp==word){

            var x1 = li[i].getBoundingClientRect().x;
            var y1 = li[i].getBoundingClientRect().y;
            var x2 = dots[0].getBoundingClientRect().x;
            var y2 = dots[0].getBoundingClientRect().y;
            var pos = `translate(${-1*(x2-x1)}px,${-1*(y2-y1)}px)`;
            
            
            dots[0].style.visibility="visible";
            dots[0].style.transform = pos;
            dots[0].classList.remove("active-bullet");
            li[i].classList.remove("active-words");
            li[i].style.backgroundColor = "#c0eec9";

            await new Promise((resolve,reject)=>{
                setTimeout(()=>{ resolve() },1200);
            })
            
            completed++;
            
            if(completed==words.length){
                const div = document.getElementById("bulletandword");
                div.style.display = "none";
                completedbool = true;
                endtime = performance.now();
                const time = Math.floor(endtime-starttime)/1000;

                worddiv.innerHTML = `<li> Congrats on completion </li>`;
                worddiv.innerHTML += `<li> time taken ${time} s</li>`;
                worddiv.innerHTML += `<li> ${ Math.floor( ( completed/(time/60) )*10) / 10} wpm</li>`;
            }cz

            break;
        }
    }


}

function clearval(){
    tempval = tempval.slice(0,tempval.length-1);
}

function keypress(e){
    if(e.key == "Enter" && !completedbool){
        checkval(tempval);
        tempval = "";
    }else if(e.key == "Backspace"){
        clearval();
    }else if(e.keyCode >= 65 && e.keyCode <=90){
        if(!timestart){
            starttime = performance.now();
            console.log("time started");
            timestart = true;
        }
        tempval += e.key;
    }
    document.getElementById("selected-word").innerText = tempval=="" ? "Start Typing..." : tempval;
}   