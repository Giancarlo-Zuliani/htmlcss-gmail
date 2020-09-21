

var unreadMail = document.querySelectorAll('.mail').length;
var unread = document.querySelector('#unread');
//scrive nel documento il numeor di mail non lette
unread.textContent = unreadMail


//funzione per cambiare stile alle mail selezionate tramite checkbox
function check(x){
  let selected = document.querySelectorAll('.mail');
  selected[x].classList.toggle('selected')
}

//funzione per eliminare le mail dalla lista e aggiorna il counter della mail non lette
function trashMyMail(){
  let selected = document.querySelectorAll('input[type=checkbox]:checked');
  for(i=0;i<selected.length;i++){
    selected[i].parentElement.classList.toggle('deleting')
  }
  setTimeout(function(){
    for(i=0;i<selected.length;i++){
      selected[i].parentElement.remove();
    }
     unreadMail = document.querySelectorAll('.mail')
     unread.textContent= unreadMail.length;
  },450)
}




//nodes stelle favorites
var star = document.querySelectorAll('.fav')


//questa funzione cambia il tipo di stella e la colora
for(i=0;i<star.length;i++){
  star[i].addEventListener('click', function(){
    this.classList.toggle('yellow');
    let x = this.innerHTML;
     if(x == '☆' ){
       this.innerHTML = '&#9733;'
          }
      else{
        this.innerHTML = '&#9734;'
      }
  })
}
