//Test for BW, explanation in ./views/bw.ejs
var AIK = [
        {
            namn: "Hammarby",
            SM: 1,
            P: 3
        },
        {
            namn: "IFK Norrköpin",
            SM: 1,
            P: 1
        },
        {
            namn: "Djurgården",
            SM: 1,
            P: 1
        },
        {
            namn: "Örebro",
            SM: 1,
            P: 1
        },
        {
            namn: "Östersund",
            SM: 1,
            P: 1
        },
        {
            namn: "Kalmar FF",
            SM: 0,
            P: 0
        },
        {
            namn: "Häcken",
            SM: 1,
            P: 1
        },
        {
            namn: "Gif Sundsvall",
            SM: 0,
            P: 0
        },
        {
            namn: "Malmö FF",
            SM: 1,
            P: 1
        },
        {
            namn: "IFK Göteborg",
            SM: 1,
            P: 1
        },
        {
            namn: "Elfsborg",
            SM: 1,
            P: 1
        },
        {
            namn: "Trelleborg",
            SM: 1,
            P: 1
        },
        {
            namn: "BP",
            SM: 0,
            P: 0
        },
        {
            namn :"Dalkurd",
            SM: 1,
            P: 3
        },
        {
            namn :"Sirius",
            SM: 2,
            P: 6
        }]
var tabellArray = document.querySelectorAll('td');
var teamTD = document.querySelectorAll('.teaMTD');



function uppdateraTeam(){
    team = document.getElementById('teamChooser').value;
}

function render(){
    var x = document.querySelectorAll('.tr');
        for(var i = 0; i < x.length; i++){
            var y = x[i];
            if(x[i].children[1].innerHTML === team){
                y.classList.add('hidden');
            }
            else y.classList.remove('hidden');
        }
}

function color(){
    
}


