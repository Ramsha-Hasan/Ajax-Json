var pageCounter = 1;


var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById('btn');
btn.addEventListener("click",function()
{
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    /*
    ourRequest.onload = function()
    {
        console.log(ourRequest.responseText);
    };
    */
    
    ourRequest.onload = function()
    {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData[0]);
        renderHTML(ourData);
    };
    ourRequest.send();
    
    pageCounter++;
   
    if(pageCounter > 3)
    {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data)
{
    var htmlString = "";
    for (let index = 0; index < data.length; index++) 
    {
        htmlString += "<p>" + data[index].name + " is a " + data[index].species + " that likes to eat";
        
    for (ii = 0; ii < data[index].foods.likes.length; ii++)
    {
        if (ii == 0) 
        {
          htmlString += data[index].foods.likes[ii];
        } else 
        {
          htmlString += " and " + data[index].foods.likes[ii];
        }
    }
  
      htmlString += ' and dislikes ';
  
    for (ii = 0; ii < data[index].foods.dislikes.length; ii++) 
    {
        if (ii == 0)
        {
          htmlString += data[index].foods.dislikes[ii];
        } else 
        {
          htmlString += " and " + data[index].foods.dislikes[ii];
        }
    }
  
      htmlString += '.</p>';   
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
