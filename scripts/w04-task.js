/* LESSON 3 - Programming Tasks */

/* Profile Object  */
                
let myProfile = {
    name: "Chibuike Collins Okolie",
    photo: "images/firefox2.png",
    favoriteFoods: [
         'Grounut Soup and Eba',
         'Plantain', 
         'Jollof Rice and Chicken', 
         'Fufu and Egusi'
        ],
    hobbies: [
            'Football',
            'Solving Mathematics',
            'Coding',
            'Table Tennis'
          ],
    placesLived: []

};

  
// /* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
         {
           place: 'Lagos, LAG',
           length: '21 years'
         },
         {
           place: 'Benin city, BNC',
           length: '2 years'
         }
       );


// /* DOM Manipulation - Output */

// /* Name */

document.querySelector('#name').textContent = myProfile.name;


// /* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;

// /* Favorite Foods List*/


myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

// /* Hobbies List */


myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});


// /* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});


