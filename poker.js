function Poker(){
	poker={}
	poker.player1=[]
	poker.player2=[]
	poker.cardforp1=cardforp1
	poker.cardforp2=cardforp2
	poker.wins=[]
	poker.whowins=whowins
	poker.clear=clear
	return poker
}
var cardforp1=function cardforp1(){
	for(var i=0;i<5;i++){
		this.player1.push((Math.floor(Math.random() * 13)+1))
		this.player1=sort(this.player1)
	}
}
var cardforp2=function cardforp2(){
	for(var i=0;i<5;i++){
		this.player2.push((Math.floor(Math.random() * 13)+1))
		this.player2=sort(this.player2)
	}
}
var whowins=function whowins(){
	var test=false
		if(this.player1[0]===10 && flush(this.player1)){
			 this.wins.push("player1")
			 return "player 1 won with 	ROYAL FLUSH"
		}
		else{
			test=false
		}
		if(this.player2[0]===10 && flush(this.player2)){
			 this.wins.push("player2")
			 return "player 2 won with 	ROYAL FLUSH"

		}
		else{
			test=false
		}
		if(this.player1[0]===7 && flush(this.player1)){
			 this.wins.push("player1")
			 return "player 1 won with 	STRAIGHT FLUSH"
		}
		else{
			test=false
		}
		if(this.player2[0]===7 && flush(this.player2) ){
			 this.wins.push("player2")
			 return "player 2 won with 	STRAIGHT FLUSH"
		}
		else{
			test=false
		}	
		if(pair(this.player1)===4){
			 this.wins.push("player1")
			 return "player 1 won with FOUR OF KIND"

		}
		else{
			test=false
		}
		if(pair(this.player2) ===4){
			 this.wins.push("player2")
			 return "player 2 won with FOUR OF KIND"
		}
		else{
			test=false
		}
		if(typeof( this.player2[0])==="number" && typeof( this.player2[1])==="number" && threeOfKIND (this.player2).length===3  ){
			 this.wins.push("player2")
			 return "player 2 won with 	FULL HOUSE"
		}
		else{
			test=false
		}
		if(typeof( this.player1[0])==="number" && typeof( this.player1[1])==="number" && threeOfKIND (this.player1).length===3  ){
			 this.wins.push("player1")
			 return "player 1 won with 	FULL HOUSE"
		}
		else{
			test=false
		}
		if( orignalFlush (this.player2)&&this.player2[4]===this.player2[3]+3  ){
			 this.wins.push("player2")
			 return "player 2 won with 	FLUSH"
		}
		else{
			test=false
		}
		if(orignalFlush(this.player1)&&this.player1[4]===this.player1[3]+3 ){
			 this.wins.push("player1")
			 return "player 1 won with 	FLUSH"
		}
		else{
			test=false
		}
		if(flush(this.player2) ){
			 this.wins.push("player2")
			 return "player 2 won with STRAIGHT"
		}
		else{
			test=false
		}
		if(flush(this.player1)){
			 this.wins.push("player1")
			 return "player 1 won with STRAIGHT"
		}
		else{
			test=false
		}
		if(threeOfKIND(this.player2).length===1 ){
			this.wins.push("player2")
			return "player 2 won with THREE OF A KIND"
	   }
	   else{
		   test=false
	   }
		if(threeOfKIND(this.player1).length===1  ){
			 this.wins.push("player1")
			 return "player 1 won with THREE OF A KIND"
		}
		else{
			test=false
		}
		if(doublepair(this.player1).length===2 ){
			 this.wins.push("player1")
			 return "player 1 won with TWO PAIR"


		}
		else{
			test=false
		}
		if(doublepair(this.player2).length===2  ){
			 this.wins.push("player2")
			 return "player 2 won with TWO PAIR"
		}
		else{
			test=false
		}
		if(pair(this.player1)===2   ){
			 this.wins.push("player1")
			 return "player 1 won with  PAIR"

			 
		}
		else{
			test=false
		}
		if(pair(this.player2)===2  ){
			 this.wins.push("player2")
			 return "player 2 won with PAIR"
		}
		else{
			test=false
		}
		if(this.player1[4]>this.player2[4]){
				this.wins.push("player1")
				return "player 1 won with the highest"
		}
		else{
				this.wins.push("player2")
				return "player 2 won with the highest"
		}





}
var clear=function(){
	var p=this.player1.length
	for(var i=0;i<p;i++){
		this.player1.pop()
		this.player2.pop()
	}
}
function sort ( tab ) { 
	for ( var i = 0 ; i < tab.length ; i ++ ) { 
	  var min = i;
	  for ( var j = i+ 1 ; j < tab. length ; j++ ) { 
		if ( tab [ j ] < tab [ min ] ) { 
		 min = j;
		}
	  }
	  var tmp = tab [ i ] ;
	  tab [ i ] = tab [ min ] ;
	  tab [ min ] = tmp;
	}
	 return tab;
  } ;
  function pair(array){
	var nor=0
	for(var i=0;i<array.length;i++){
		for(var j=i; j<array.length;j++){
			if(array[i]===array[j] && j!==i){
				nor+=1
			}
		}
	}return nor

}
function doublepair(array){
	var nor=1
	var resu=[]
	for(var i=0;i<array.length;i++){
		for(var j=i; j<array.length;j++){
			if(array[i]===array[j] && j!==i){
				console.log(j)
				console.log(i)
				nor++
				console.log(nor)
                
			}
		}if(nor===2){
		resu.push(array[i])
	}
     nor=1

	}
	return resu
	
	

}
function threeOfKIND(array){
	var nor=1
	var resu=[]
	for(var i=0;i<array.length;i++){
		for(var j=i; j<array.length;j++){
			if(array[i]===array[j] && j!==i){
				nor++
                
			}
		}if(nor===3){
		resu.push(array[i])
	}
     nor=1

	}
	return resu
	
	

}
function flush (array){
	for(var i=0;i<array.length-1;i++){
		if(array[i]+1!==array[i+1]){
			return false
		}
	}return true
}
function orignalFlush(array) {
	for(var i=0;i<array.length-2;i++){
		if(array[i]+2!==array[i+1]){
			return false
		}
		i++
	}return true
}
	