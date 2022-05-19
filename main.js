var images =
["encanto_1.jpg", "encanto_2.jpg" , "encanto_3.jpg" , "encanto_4.jpg" , "encanto_5.jpg"];

var names = ["Álbum de Família","Mirabel Madrigal","Isabela Madrigal","Bruno Madrigal","Luisa Madrigal"];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 4
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("familyMemberImage").src = updateImage;
    document.getElementById("familyMemberName").innerHTML = updateName;
}