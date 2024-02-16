
console.log(Movie_Details);


/* <div class="card mb-3" style="max-width: 964px;">
<div class="container mt-3">
    <div class="row g-0">
        <div class="col-md-4">
          <img src="
          https://m.media-amazon.com/images/M/MV5BNTVjMzdhMGQtYjkzNy00YTUxLTkwMmEtMjEyZTYxOTVlNTM4XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Shadow of the Vampire</h5>
              <p class="card-text">Shadow of the Vampire is a film about the making of a German all time classic silent horror-movie from 1922 called Nosferatu-Eine Symphonie des Grauens (Nosferatu-a Symphony of Horror). The production of Nosferatu had to deal with a lot of strange things (some crew members disappeared, some died). This movie focuses on the difficult relationship between Murnau, the director, and Schreck, the lead actor.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Actors: John Malkovich, Willem Dafoe, Udo Kier </li>
              <li class="list-group-item">IMDB Rating: 6.9/10 </li>
              <li class="list-group-item">Genre: Drama, Horror </li>
              <li class="list-group-item">Language: English, German, Luxembourgish</li>
              <li class="list-group-item">Awards: Nominated for 2 Oscars. 16 wins & 30 nominations total </li>
              <li class="list-group-item">Director: E. Elias Merhige</li>
            </ul>
          </div>
        </div>
</div> */



let parent_body= document.createElement('div');
parent_body.classList="card mb-3" ;
parent_body.style.maxWidth='980px';
document.body.appendChild(parent_body);

let first_child_div=document.createElement('div');
first_child_div.classList="container mt-3";
parent_body.appendChild(first_child_div);

let first_child_firstchild_div=document.createElement('div');
first_child_firstchild_div.classList="row g-0";
first_child_div.appendChild(first_child_firstchild_div);

let first_child_firstchild__firstChild_div=document.createElement('div');
first_child_firstchild__firstChild_div.classList="col-md-4";
first_child_firstchild_div.appendChild(first_child_firstchild__firstChild_div);

let first_child_firstchild__firstChild_div_img=document.createElement('img');
first_child_firstchild__firstChild_div_img.src=Movie_Details.Poster;
first_child_firstchild__firstChild_div.appendChild(first_child_firstchild__firstChild_div_img);

let first_child_firstchild__secondChild_div=document.createElement('div');
first_child_firstchild__secondChild_div.classList="col-md-8";
first_child_firstchild_div.appendChild(first_child_firstchild__secondChild_div);


let div_child_child_secondchild=document.createElement('div');
div_child_child_secondchild.classList='card-body';
let div_child_child_secondchild_title=document.createElement('h5');
div_child_child_secondchild_title.classList='card-title';
div_child_child_secondchild_title.innerHTML=Movie_Details.Title;
let div_child_child_secondchild_para=document.createElement('p');
div_child_child_secondchild_para.classList='card-text';
div_child_child_secondchild_para.innerHTML=Movie_Details.Plot;
div_child_child_secondchild.appendChild(div_child_child_secondchild_title);
div_child_child_secondchild.appendChild(div_child_child_secondchild_para);
first_child_firstchild__secondChild_div.appendChild(div_child_child_secondchild);


let div_child_child_thirdchild=document.createElement('ul');
div_child_child_thirdchild.classList='list-group list-group-flush';
let div_child_child_thirdchild_listitem1=document.createElement('li');
div_child_child_thirdchild_listitem1.classList='list-group-item';
div_child_child_thirdchild_listitem1.innerHTML="Name : " +Movie_Details.Title;
let div_child_child_thirdchild_listitem2=document.createElement('li');
div_child_child_thirdchild_listitem2.classList='list-group-item';
div_child_child_thirdchild_listitem2.innerHTML="Year Of Release: "+Movie_Details.Year;
let div_child_child_thirdchild_listitem3=document.createElement('li');
div_child_child_thirdchild_listitem3.classList='list-group-item';
div_child_child_thirdchild_listitem3.innerHTML="Category : " +Movie_Details.Type;
let div_child_child_thirdchild_listitem4=document.createElement('li');
div_child_child_thirdchild_listitem4.classList='list-group-item';
div_child_child_thirdchild_listitem4.innerHTML="IMDB Rating : " +Movie_Details.imdbRating;
let div_child_child_thirdchild_listitem5=document.createElement('li');
div_child_child_thirdchild_listitem5.classList='list-group-item';
div_child_child_thirdchild_listitem5.innerHTML="Genre : " +Movie_Details.Genre;
let div_child_child_thirdchild_listitem6=document.createElement('li');
div_child_child_thirdchild_listitem6.classList='list-group-item';
div_child_child_thirdchild_listitem6.innerHTML="Director : " +Movie_Details.Director;
let div_child_child_thirdchild_listitem7=document.createElement('li');
div_child_child_thirdchild_listitem7.classList='list-group-item';
div_child_child_thirdchild_listitem7.innerHTML="Actors : " +Movie_Details.Actors;
let div_child_child_thirdchild_listitem8=document.createElement('li');
div_child_child_thirdchild_listitem8.classList='list-group-item';
div_child_child_thirdchild_listitem8.innerHTML="Language : " +Movie_Details.Language;

div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem1);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem2);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem3);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem4);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem5);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem6);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem7);
div_child_child_thirdchild.appendChild(div_child_child_thirdchild_listitem8);
first_child_firstchild__secondChild_div.appendChild(div_child_child_thirdchild);