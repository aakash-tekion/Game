let prev_click = null;
let guess_path = './game_images/guess.png';
let open_img_count = 0;
let chance = 3;
let path = [
    './game_images/a.jpeg',
    './game_images/b.jpeg',
    './game_images/c.jpeg',
    './game_images/d.jpeg',
    './game_images/e.jpeg',
    './game_images/f.jpeg',
    './game_images/g.jpeg',
    './game_images/h.jpeg',
    './game_images/a.jpeg',
    './game_images/b.jpeg',
    './game_images/c.jpeg',
    './game_images/d.jpeg',
    './game_images/e.jpeg',
    './game_images/f.jpeg',
    './game_images/g.jpeg',
    './game_images/h.jpeg'
];
let allRows = document.querySelectorAll('.row');
let img_arr = document.getElementsByTagName('img');
let refresh_btn = document.querySelector('#refresh-btn');
let allCards = document.querySelectorAll(".card-inner")

let even = 0,card_idx = 0;

for(let img of img_arr){
    if(even%2 == 0){
        let idx = Math.floor(Math.random()*path.length);
        img.src = path[idx];
        
        let temp = path[idx].split('/');
        img.dataset.name = temp[temp.length-1];
        allCards[card_idx].dataset.name = `${temp[temp.length-1]}`;
        img.dataset.image_url = path[idx];
        path.splice(idx,1);
        card_idx++;
    }
    else{
        img.src = './game_images/guess.png';
    }
    even++;
   
    
    
}

even = 0;
setTimeout(()=>{
    allCards.forEach(ele => {
        ele.classList.add('flip');
    })
        
},3000)
allCards.forEach(ele => {
    ele.addEventListener('click',function(event){
        console.log(ele);
        ele.classList.remove('flip');
        if(prev_click === null){
            prev_click = ele.getAttribute('data-name');
            
            ++open_img_count;
            
        }
        else{
                        
            if(prev_click === ele.getAttribute('data-name') ){
                            
                prev_click = null;
                            
                ++open_img_count;
            }
            else{
                if(chance>0){
                    
                    alert(`Wrong click ${chance} remaining try again!`);
                    chance-=1
                    ele.classList.remove('flip');
                    setTimeout(()=>{
                        ele.classList.add('flip');
                    },1500);
                    
                    
                }     
                else{
                    alert('You lost')
                    allCards.forEach( ele => {
                        
                        ele.classList.remove('flip');
                        

                    });
                    setTimeout(()=>{
                        window.location.reload();
                        chance=3;
                    },3000)
                    open_img_count = 0;
                    
                }
                
                
            }
        }
        if(open_img_count == 16){
                    alert('You hav won');
                    window.location.reload();
                    open_img_count = 0;
                   }
    })


})
refresh_btn.addEventListener('click',()=>{
    window.location.reload();
})
