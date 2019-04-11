$(document).ready(function(){
	
	var blockedSits = [];
	
	function generateGrid(gridId){
		var $tbody = $('<tbody />');
		for(var row =0; row < 7 ; row++){
			var $tr = generateCol(row, Number.parseInt(Math.random()*10) + 3);
			$($tr).appendTo($tbody);
		}
		$($tbody).appendTo("#"+gridId);
	}
	
	function generateCol (row,totatlcols){
		var $tr = $('<tr/>');
		//totatlcols = 9;
		for(var col = 0; col < totatlcols; col++){
			var rowDtl=  row + "," + col ;
			var $td =  $("<td class='th-seat-cl' data-rowDtl="+rowDtl+"><i class='material-icons'>event_seat</i></td>");
			$($td).appendTo($tr);
		}
		return $tr;
	}
	
	function generateBlockList(r,c) {
		
		for (var i = 0; i < 10; i++){
			var bolockedsit = Number.parseInt(Math.random()*10 % r) +","+Number.parseInt(Math.random()*10 % c);
			blockedSits.push(bolockedsit);
		}
		 console.log(blockedSits);
	}
	
	function showBlockedSit(){
		for(var i = 0, l = blockedSits.length; i < l; i++){
			var s = "[data-rowdtl='"+ blockedSits[i]+"']";
			
			$("[data-rowdtl='"+ blockedSits[i]+"']").addClass("blocked-seat");
		}
	}
	
	$(document).on('click','#th_GridContainer td:not(.blocked-seat)', function(e){
		$(this).hasClass("select-seat") ? $(this).removeClass("select-seat") : $(this).addClass("select-seat");
	})
	
	generateBlockList(7,9);
	generateGrid("th_GridContainer");
	showBlockedSit()
	
	
});
