// write js code here corresponding to favourites.html

var fvrt = JSON.parse(localStorage.getItem("favourites"))
// console.log(matc)
displayData(fvrt);

function displayData(data){
    data.forEach(function(elem){
       
         
        var row1 = document.createElement("tr");

        var col1 = document.createElement("td");
        col1.innerText=elem.matchs
        
        console.log(col1)
        var col2 = document.createElement("td")
        col2.innerText=elem.team1

        var col3 = document.createElement("td")
        col3.innerText=elem.team2

        var col4 = document.createElement("td")
        col4.innerText=elem.date

        var col5 = document.createElement("td")
        col5.innerText=elem.ven

        var col6 =document.createElement("td")
        col6.innerText="Delete"
        col6.style.cursor="pointer"
        col6.style.color="red"
        col6.style.fontWeight="bold"
        col6.addEventListener("click",function(){
            // event.target.parentNode.remove()
            deleteitem(elem);
        })

        row1.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row1)
    })
    function deleteitem(elem,index){
        fvrt.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(fvrt))
        window.location.reload()
    }

}