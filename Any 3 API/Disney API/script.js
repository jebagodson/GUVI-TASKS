const apiUrl = 'https://api.disneyapi.dev/characters';
const container = document.getElementById('charecter');


const headingDiv = document.createElement('div')
  headingDiv.className = 'headingDiv';

  const heading = document.createElement('h3');
  heading.classList.add('h3','text-center');
  heading.innerText = 'Disney Characters';

  const row =document.createElement('div');
  row.className = 'row';

  container.append(headingDiv,row)
  headingDiv.appendChild(heading);

async function fetchCharecter() {


  // Fetch the data from the API
  const response = await fetch(apiUrl);
  const charData = await response.json();
  const data = charData.data;
  console.log(data);


  data.forEach((characters,index) => {
    
  
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card',
    'col-lg-3','text-center','mt-3')
    cardContainer.setAttribute('id','card-container')
     
    const image = document.createElement('img');
    image.classList.add('rounded','img-size','mb-2','mt-2')
    image.src = characters.imageUrl
  
    const cardText = document.createElement('div');
    cardText.classList.add('cardText',);
  
    const name = document.createElement('p');
    name.classList.add('bold','font-weight-bold');
    name.innerText = 'Name : ' + characters.name ;
  
    const tvShow = document.createElement('p');
    tvShow.classList.add('bold','font-weight-bold')
    tvShow.innerText = 'Tv-Show : ' + characters.tvShows || 'Undefined';
  
    cardContainer.append(image,cardText)
    cardText.append(name,tvShow)
    row.appendChild(cardContainer);
  });




}
fetchCharecter()
