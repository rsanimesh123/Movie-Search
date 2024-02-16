

let MovieList=[];
let apicallArray=[];
let apicall;

let string='';
 function suggested(e){
    let MovieTitleArray=[];
    string=e.target.value+e.key;
    let uri=`http://www.omdbapi.com/?s=${string}&apikey=7816c89c&r=json`;
     apicall=fetch(uri);
     apicallArray.push(apicall);
     
     Promise.all(apicallArray).then((data)=>{
        console.log(data.pop());
       let last_response=data.pop();
            return last_response.json();
     }).then((moviedata)=>{
       
       MovieTitleArray=moviedata.Search.map(function(data){
            return data.Title; });
            MovieTitleArray.forEach((element) => {
               
                let opt=document.createElement('option');
                opt.value=element;
                document.getElementById('datalistOptions').appendChild(opt)
               });

       
            
     }).catch((err)=>{
        console.log(err);
     });

    
}
window.onclick=
   function toactivatebtn(e){
    let a_element=document.getElementsByTagName('a');
   
    let remove_item = JSON.parse(localStorage.getItem("RemoveList")) ;
    if(remove_item){ for(let j=2;j<a_element.length;j++){
        if(remove_item.includes(a_element[j].innerHTML)){
          a_element[j].style.textDecoration='none';
          a_element[j].disabled=false;
          
        } 
      }}
   
    
}


async function Search(){
  
    document.getElementById('parent-body').innerHTML='';
    let counter=1;
    let search_input_value=document.getElementsByName('moviename')[0].value;
    let url=`http://www.omdbapi.com/?s=${search_input_value}&apikey=7816c89c&r=json`;
     let response=await fetch(url);
     let data= await response.json();
     let child_count=0;
     for(let i=0;i<data.Search.length;i++){
        let imdb=await fetch(`http://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=7816c89c&r=json&plot=short`);
        let imdb_data=await imdb.json();
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
        
        div_child_child_firstchild.src=data.Search[i].Poster;
        div_child_child.appendChild(div_child_child_firstchild);
                    
 
 
        let div_child_child_secondchild=document.createElement('div');
        div_child_child_secondchild.classList='card-body';
        let div_child_child_secondchild_title=document.createElement('h5');
        div_child_child_secondchild_title.classList='card-title';
        div_child_child_secondchild_title.innerHTML=data.Search[i].Title;
        div_child_child_secondchild.appendChild(div_child_child_secondchild_title);
        div_child_child.appendChild(div_child_child_secondchild);
 
 
        let div_child_child_thirdchild=document.createElement('ul');
        div_child_child_thirdchild.classList='list-group list-group-flush';
        let div_child_child_thirdchild_listitem1=document.createElement('li');
        div_child_child_thirdchild_listitem1.classList='list-group-item';
        div_child_child_thirdchild_listitem1.innerHTML="Name : " +imdb_data.Title;
        let div_child_child_thirdchild_listitem2=document.createElement('li');
        div_child_child_thirdchild_listitem2.classList='list-group-item';
        div_child_child_thirdchild_listitem2.innerHTML="Year Of Release: "+imdb_data.Year;
        let div_child_child_thirdchild_listitem3=document.createElement('li');
        div_child_child_thirdchild_listitem3.classList='list-group-item';
        div_child_child_thirdchild_listitem3.innerHTML="Category : " +imdb_data.Type;
        let div_child_child_thirdchild_listitem4=document.createElement('li');
        div_child_child_thirdchild_listitem4.classList='list-group-item';
        div_child_child_thirdchild_listitem4.innerHTML="IMDB Rating : " +imdb_data.imdbRating;
       
        let div_child_child_thirdchild_listitem8=document.createElement('li');
        div_child_child_thirdchild_listitem8.classList='list-group-item';
        div_child_child_thirdchild_listitem8.innerHTML="Language : " +imdb_data.Language;
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem1);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem2);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem3);
        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem4);

        div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem8);
        div_child_child.appendChild(div_child_child_thirdchild);
 
 
        let div_child_child_fourthchild=document.createElement('div');
        div_child_child_fourthchild.classList='card-body';
        let div_child_child_fourthchild_a=document.createElement('a');
        div_child_child_fourthchild_a.classList='card-link';
        div_child_child_fourthchild_a.innerHTML=imdb_data.imdbID;
        div_child_child_fourthchild_a.hidden='hidden';
        div_child_child_fourthchild.appendChild(div_child_child_fourthchild_a);
        div_child_child.appendChild(div_child_child_fourthchild);

        let div_child_child_fifthchild=document.createElement('div');
        div_child_child_fifthchild.classList='card-body';
        let div_child_child_fifthchild_movie_detail_btn=document.createElement('a');
        div_child_child_fifthchild_movie_detail_btn.classList='card-link btn btn-dark';
        div_child_child_fifthchild_movie_detail_btn.innerHTML='Details';
       
        div_child_child_fifthchild_movie_detail_btn.id=imdb_data.imdbID;
        div_child_child_fifthchild_movie_detail_btn.addEventListener('click',moviedetails);
         let div_child_child_fifthchild_btn=document.createElement('button');
          div_child_child_fifthchild_btn.classList='btn btn-dark ms-5';
          div_child_child_fifthchild_btn.innerHTML='My Favorite';
          div_child_child_fifthchild_btn.addEventListener('click',addMovie);
         
          div_child_child_fifthchild.appendChild ( div_child_child_fifthchild_movie_detail_btn);
         div_child_child_fifthchild.appendChild(div_child_child_fifthchild_btn);
        
        div_child_child.appendChild(div_child_child_fifthchild);
        
        counter++;
     
    }

    document.getElementsByTagName('footer')[0].innerHTML="Watch Out End of The Line !!"

}

function moviedetails(e){
  let url=`http://www.omdbapi.com/?i=${e.target.id}&apikey=7816c89c&r=json&plot=full`;
  let result=fetch(url);
  result.then((data)=>{
    return data.json();
  }).then((response)=>{
    
    window.open('movieDetails.html', '_blank'); 

   
     localStorage.setItem("MovieDetails", JSON.stringify(response));
    // console.log(response);
  }).catch((err)=>{
    console.log(err);
  });
  
  
}



 function addMovie(e){ 
       e.target.style.textDecoration='line-through';
       e.target.disabled=true;
       let movietitle=e.target.parentElement.parentElement.children[3].children[0].innerHTML;
       let retString = localStorage.getItem("MovieList") ;
       if(retString){ MovieList= [...JSON.parse(retString)];}
      
       if(MovieList.includes(movietitle)){
        alert('OOPS!! Forgot Already Added :)');
       
        return ;
       }
         if(MovieList.length>0){ 
            MovieList.push(movietitle);
            let string = JSON.stringify(MovieList);

            localStorage.setItem("MovieList", string);
         }else{
            MovieList.push(movietitle);
         
            let string = JSON.stringify(MovieList);

            localStorage.setItem("MovieList", string);
         }
      
     

       
}


