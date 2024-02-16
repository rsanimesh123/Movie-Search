let remove_item_array=[];

let retString = localStorage.getItem("MovieList") ;
let movieListarray = JSON.parse(retString);
if(movieListarray.length>0){
    document.getElementsByTagName('footer')[0].innerHTML="End of Your Treasure Collections List "
}
let dataArray=[];
myMovieList();
 async function myMovieList(){
    let counter=1;
    for (let i=0;i<movieListarray.length;i++){
       
        let url=`http://www.omdbapi.com/?i=${movieListarray[i]}&apikey=7816c89c&r=json`;
        let response=await fetch(url);
        let data =await response.json();
        dataArray.push( data);

    }
    
   
     let child_count=0;
     for(let i=0;i<dataArray.length;i++){
        if(counter==1|| counter==4){
            
            let div= document.createElement('div');
            div.classList='row';
            document.getElementById('parent-body').appendChild(div);
            child_count+=1;
            counter=1;
        }
        let div_child=document.createElement('div');
        div_child.classList='col-4';
        document.getElementById('parent-body').children[child_count-1].appendChild(div_child);
        
        let div_child_child=document.createElement('div');
        div_child_child.classList="card";
        div_child_child.style='width:18rem;';
        
        div_child.appendChild(div_child_child);
        
        let div_child_child_firstchild =document.createElement('img');
        div_child_child_firstchild.classList='card-img-top';
        
        div_child_child_firstchild.src=dataArray[i].Poster;
        div_child_child.appendChild(div_child_child_firstchild);
                    
 
 
        let div_child_child_secondchild=document.createElement('div');
        div_child_child_secondchild.classList='card-body';
        let div_child_child_secondchild_title=document.createElement('h5');
        div_child_child_secondchild_title.classList='card-title';
        div_child_child_secondchild_title.innerHTML=dataArray[i].Title;
        let div_child_child_secondchild_para=document.createElement('p');
        div_child_child_secondchild_para.classList='card-text';
        div_child_child_secondchild_para.innerHTML=dataArray[i].Plot;
        div_child_child_secondchild.appendChild(div_child_child_secondchild_title);
        div_child_child_secondchild.appendChild(div_child_child_secondchild_para);
        div_child_child.appendChild(div_child_child_secondchild);
 
 
        let div_child_child_thirdchild=document.createElement('ul');
        div_child_child_thirdchild.classList='list-group list-group-flush';
        let div_child_child_thirdchild_listitem1=document.createElement('li');
        div_child_child_thirdchild_listitem1.classList='list-group-item';
        div_child_child_thirdchild_listitem1.innerHTML="Name : " +dataArray[i].Title;
        let div_child_child_thirdchild_listitem2=document.createElement('li');
        div_child_child_thirdchild_listitem2.classList='list-group-item';
        div_child_child_thirdchild_listitem2.innerHTML="Year Of Release: "+dataArray[i].Year;
        let div_child_child_thirdchild_listitem3=document.createElement('li');
        div_child_child_thirdchild_listitem3.classList='list-group-item';
        div_child_child_thirdchild_listitem3.innerHTML="Category : " +dataArray[i].Type;
        let div_child_child_thirdchild_listitem4=document.createElement('li');
        div_child_child_thirdchild_listitem4.classList='list-group-item';
        div_child_child_thirdchild_listitem4.innerHTML="IMDB Rating : " +dataArray[i].imdbRating;
        let div_child_child_thirdchild_listitem5=document.createElement('li');
        div_child_child_thirdchild_listitem5.classList='list-group-item';
        div_child_child_thirdchild_listitem5.innerHTML="Genre : " +dataArray[i].Genre;
        let div_child_child_thirdchild_listitem6=document.createElement('li');
        div_child_child_thirdchild_listitem6.classList='list-group-item';
        div_child_child_thirdchild_listitem6.innerHTML="Director : " +dataArray[i].Director;
        let div_child_child_thirdchild_listitem7=document.createElement('li');
        div_child_child_thirdchild_listitem7.classList='list-group-item';
        div_child_child_thirdchild_listitem7.innerHTML="Actors : " +dataArray[i].Actors;
        let div_child_child_thirdchild_listitem8=document.createElement('li');
        div_child_child_thirdchild_listitem8.classList='list-group-item';
        div_child_child_thirdchild_listitem8.innerHTML="Language : " +dataArray[i].Language;
       
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem1);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem2);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem3);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem4);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem5);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem6);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem7);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem8);
        div_child_child.appendChild(div_child_child_thirdchild);
 
       
        let div_child_child_fourthchild=document.createElement('card-body');
        div_child_child_fourthchild.classList='card-body';
        let div_child_child_fourthchild_a=document.createElement('a');
        div_child_child_fourthchild_a.classList='card-link';
        div_child_child_fourthchild_a.innerHTML=dataArray[i].imdbID;
        div_child_child_fourthchild_a.hidden='hidden';
        let div_child_child_fourthchild_btn=document.createElement('button');
        div_child_child_fourthchild_btn.classList='btn btn-dark ms-5';
        div_child_child_fourthchild_btn.innerHTML='Remove Item';
        div_child_child_fourthchild_btn.addEventListener('click',RemoveItem);
        div_child_child_fourthchild.appendChild(div_child_child_fourthchild_a);
        div_child_child_fourthchild.appendChild(div_child_child_fourthchild_btn);
        div_child_child.appendChild(div_child_child_fourthchild);
        
        
        counter++;
     
    }



}


function RemoveItem(e){
    
      let element_to_remove=e.target.parentElement.children[0].innerHTML;
      
      movieListarray= movieListarray.filter((element)=>{ return element_to_remove!=element});
     
      let string = JSON.stringify(movieListarray);
      
      localStorage.setItem("MovieList", string);
      e.target.parentElement.parentElement.remove();
      remove_item_array.push(element_to_remove);
      let remove_list=JSON.stringify(remove_item_array);
      localStorage.setItem("RemoveList", remove_list);

      
      
}
