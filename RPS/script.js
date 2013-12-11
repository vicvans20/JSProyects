$(document).ready(function() {

	// your code here
	/*FUNCTION*/
	var pcShow=function(num){
        switch(num){
        case 1: return "#p2rock"; 
        case 2: return "#p2paper";
        case 3: return "#p2scissor";
        }  
	};
	var test=function(num,pc){
        /*rock-->1
        paper-->2
        scissor-->3*/
        if (num===pc){
            return "Is a tie!";
        }
        else if (num===1){
            if(pc===3){
                return "Rocks wins!";
            }
            else {
                return "Paper wins!";
            }
        }
        else if (num===2){
            if(pc===1){
                return "Paper wins!";
            }
            else{
                return "Scissors wins!";
            }
        }
        else if (num===3){
            if(pc===2){
                return "Scissors wins";
            }
            else{
                return "Rock wins!";
            }
        }
    };
    /*JQUERY!*/
    $(".option").mouseenter(function(){
		$(this).fadeTo("slow",1);
	});
	$(".option").mouseleave(function(){
		$(this).fadeTo("slow",0.5);
	});
	/*Giving the var a value*/
	
	$('#rock').click(function(){
        var $selection=1;
        /*Randomly select one option from 1--3*/
        var $pcselect=Math.floor(Math.random()*3+1);
        /*Get the id of the option selected*/
        var $pcicon=pcShow($pcselect);
        /*Make the comparation*/
        var answer=test($selection,$pcselect);
        /*SHOW THE PC OPTION*/
        $($pcicon).fadeTo("slow",1);
        /*Gotta check that later*/
         $('.item').remove();
         /**/
        $('#message').append('<div class="item">'+answer+'</div>');
        $($pcicon).fadeTo("slow",0.5);
	});
	$('#paper').click(function(){
        var $selection=2;
        var $pcselect=Math.floor(Math.random()*3+1);
        var $pcicon=pcShow($pcselect);
        var answer=test($selection,$pcselect);
        $($pcicon).fadeTo("slow",1);
        $('.item').remove();
         /**/
        $('#message').append('<div class="item">'+answer+'</div>');
        $($pcicon).fadeTo("slow",0.5);
	});
	$('#scissor').click(function(){
        var $selection=3;
        var $pcselect=Math.floor(Math.random()*3+1);
        var $pcicon=pcShow($pcselect);
        var answer=test($selection,$pcselect);
        $($pcicon).fadeTo("slow",1);
        $('.item').remove();
         /**/
        $('#message').append('<div class="item">'+answer+'</div>');
        $($pcicon).fadeTo("slow",0.5);
	});
});