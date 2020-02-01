/*$( document ).ready(function() {


    $( "#rock" ).click(function() {
        initCalc( "rock" )
    });

    $( "#paper" ).click(function() {
        initCalc( "paper" )
    });

    $( "#scissor" ).click(function() {
        initCalc( "scissor" )
    });

});*/

$( document ).ready(function() {

reloadGame()

});


function initCalc(userClicked) {
    var botClicked = botDecision()
    var result = conditionalResult(userClicked, botClicked)
    updateView(userClicked, botClicked, result)
}


function botDecision(){
    var data = ["rock","paper","scissor"]
    var x = Math.floor((Math.random() * 3));
    return data[x]
}


function conditionalResult(userClicked, botClicked) {
    if(userClicked == "rock" && botClicked == "scissor"){
        return ["win","loss"]
    }else if(userClicked == "scissor" && botClicked == "paper"){
        return ["win","loss"]
    }else if(userClicked == "paper" && botClicked == "rock"){
        return ["win","loss"]
    }else if(userClicked == botClicked){
        return ["draw","draw"]
    }else{
        return ["loss","win"]
    }
}


function updateView(userClicked, botClicked, result){
    $( "#box-container" ).empty()

    /*var userCSS = (result == "win") ? "win":"loss"
    var botCSS = (result == "loss") ? "win":"loss"*/

    /*if(result == "win"){
        userCSS = "win"
        botCSS = "loss"
    }else if(result == "loss"){
        userCSS = "loss"
        botCSS = "win"
    }else if (result == "draw") {
        userCSS = "draw"
        botCSS = "draw"
    }*/

    var userSelectedImage = "<div class='box "+result[0]+"'><img src='image/"+userClicked+".jpg'></div>"
    var resultBlock = "<h3>"+result[0]+"</h3>"
    var botSelectedImage = "<div  class='box "+result[1]+"'><img src='image/"+botClicked+".jpg'></div>"


    $( "#box-container" ).append(userSelectedImage)
    $( "#box-container" ).append(resultBlock)
    $( "#box-container" ).append(botSelectedImage)



    $( "#actions" ).append("<button class=\"btn btn-sm btn-primary\" onclick='reloadGame()'>Play Again</button>")
}


function reloadGame() {
    $( "#box-container" ).empty()
    $( "#actions" ).empty()
    $( "#box-container" ).append("" +
        "        <div id=\"rock\" class=\"box\"><img src=\"image/rock.jpg\" onclick=\"initCalc(`rock`)\"></div>\n" +
        "        <div id=\"paper\" class=\"box\"><img src=\"image/paper.jpg\" onclick=\"initCalc(`paper`)\"></div>\n" +
        "        <div id=\"scissor\" class=\"box\"><img src=\"image/scissor.jpg\" onclick=\"initCalc(`scissor`)\"></div>" +
        "")
}