		var activeSet = "activeSet";
		var cardWidthB = 217;
		var cardMarginHorizon;
		var cardMarginVertical;
		
		var maxcolumn = Math.floor( $("#things").width() / (cardWidthB + (cardMarginHorizon * 2)));
		var szoveg;
		var row = 1;
		var column = 1;
		var pagerCount = Math.ceil(lim/35);
		var pagerNeedToGenerate = true;

		//Prepare the images with divs and add this to #things.div
		function loadPage(){
			console.log("loadPage(): " + workflowData.length);
			szoveg = "";
			$.each( workflowData, function( key, val ) {
				console.log(val.Doubleside);
				szoveg += createImg(val.card_1, val.CardExpansionShortName, cardWidthB +'px', val.Amount, row, column, val.Doubleside);
				column++;
			});
			
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			szoveg += '<li class="nowrap" style="width: 217px;"></li>';
			
			if(pagerNeedToGenerate){
				createPaging('up');
				createPaging('down');
				pagerNeedToGenerate = false;
			}
			$("#things").html(szoveg);
		}
		
		function createPaging(place){
			var pagerString = '';
				pagerString = '<li class="'+place+'" data-pagenum="'+1+'"><span class="page active '+place+'">'+1+'</span></li>';
				for (i = 2; i <= pagerCount; i++){
					pagerString += '<li class="'+place+'" data-pagenum="'+i+'"><a class="page gradient '+place+'">'+i+'</a></li>';
				}
				
				$("#"+place+"List").html(pagerString);
		}

		//This is for the Set icons to on/off on click, and get the new card from the server
		$(".setIcon").click(function () {
			if( !$(this).hasClass( activeSet ) ){
				$("." + activeSet ).removeClass( activeSet );
				$(this).addClass( activeSet );
				
				var parameters = { search: $( this ).data( "set" ) , paging: "1"};
				
				var wasActiveParent = $('.page.active.up').parent();
				var wasActivePageNum = wasActiveParent.data("pagenum");
				wasActiveParent.html('<a class="page gradient up">'+ wasActivePageNum +'</a>');
				
				wasActiveParent = $('.page.active.down').parent();
				wasActiveParent.html('<a class="page gradient down">'+ wasActivePageNum +'</a>');
				
				parentLi = $('li[data-pagenum="1"].up')
				parentLi.html('<span class="page active up">1</span>');
				
				parentLi = $('li[data-pagenum="1"].down')
				parentLi.html('<span class="page active down">1</span>');
				
				$.getJSON( '/cards',parameters, function(data) {
					
					workflowData = data[0];
					pagerCount = Math.ceil(data[1][0].lim/35);
					pagerNeedToGenerate = true;
					console.log('pagerCount: ' + pagerCount);
					console.log( data[1][0].lim);
					//console.log("Data megkapva");
					//console.log(workflowData.length);
					loadPage();
				});
			}
		});
		
		//Paginator to get cards and change the style
		function merged(clickedElement, source, target){
			var parameters = { search: $( "." + activeSet ).data( "set" ),
								paging: $(clickedElement).text()};
			
			var wasActiveParent = $('.active.up').parent();
			var wasActivePageNum = wasActiveParent.data("pagenum");
			wasActiveParent.html('<a class="page gradient up">'+ wasActivePageNum +'</a>');
			
			wasActiveParent = $('.active.down').parent();
			wasActiveParent.html('<a class="page gradient down">'+ wasActivePageNum +'</a>');
			
			var parentLi = $(clickedElement).parent();
			var pageNum = parentLi.data("pagenum");
			
			parentLi.html('<span class="active '+source+'">'+ pageNum +'</span>');
			
			parentLi = $('li[data-pagenum="' + pageNum +'"].' + target)
			parentLi.html('<span class="active '+target+'">'+ pageNum +'</span>');
								
			$.getJSON( '/cards',parameters, function(data) {
				workflowData = data[0];
				console.log("Data megkapva");
				console.log(workflowData.length);
				loadPage();
			});
		}
		
		function upPage(){
			merged(this, 'up', 'down');
		}
		
		function downPage(){		
			merged(this, 'down', 'up');
		}
		
		$('body').on('click', '.page.up', upPage);
		$('body').on('click', '.page.down', downPage);	

		function fadeAway(fadeItem){
			fadeItem.animate({
		    opacity: 0,
		  }, 700);
		}

		function moveImg(moveItem,left,top){
			$(document).ready(function() { //265*370 36
				var cssLeft = (moveItem.width() + 2 * cardMarginHorizon) * left;
				var cssTop = (moveItem.height() + 2 * cardMarginVertical) * top;
					moveItem.animate({left: "-="+cssLeft,top: "-="+cssTop}, 700);
			});
		}

		function getAmountIcon(amount){
			var iconSrc = '';
			if(amount != undefined && amount > 0){
				if(amount > 4){
					amount = 4;
				}
				iconSrc = '<img class="amountIcon amountIcon'+ amount +'" src="images/misc/ikon' + amount + '.png">';
			}
			return iconSrc;
		}

		function getClasses(amount){
			var classes = 'magiccard';
			if(amount == undefined || amount < 1){
				classes +=' nothave';
			}
			return classes;
		}

		function createImg(cardNr,cardtype,cardWidthA,amount,row,column,doubleSide){
			var cardBox; //TODO átnevezni
			
			cardBox = '<li id="test'+ row + column +'" class="nowrap" style="width: '+cardWidthA+';height: 306px;">';
			//cardBox += '<img class="zoomIcon" src="images/misc/zoomGlass.png">';
			if(doubleSide != 1){
				cardBox += getAmountIcon(amount);
			}
			
			if(cardNr <10){
				cardNr = '00' + cardNr;
			}else if(cardNr < 100){
				cardNr = '0' + cardNr;
			}
			if(doubleSide != 1){
				cardBox += '<img class="' + getClasses(amount) + '" src="images/cards/' + cardtype + '/' + cardtype + '_' + cardNr + '.png" title="'+ cardNr +'">';
			}else{
				cardBox +='<div id="flip-toggle' + cardNr + '" class="flip-container">';
				cardBox +='<div class="flipper">';
				cardBox +='<div class="front">';
				cardBox += getAmountIcon(amount);
				cardBox +='<img class="' + getClasses(amount) + '" src="images/cards/' + cardtype + '/' + cardtype + '_' + cardNr + '.png" onclick="document.querySelector(&quot;#flip-toggle' + cardNr + '&quot;).classList.toggle(&quot;hover&quot;);">';
				cardBox +='</div>';
				cardBox +='<div class="back">';
				cardBox += getAmountIcon(amount);
				cardBox +='<img class="' + getClasses(amount) + '" src="images/cards/' + cardtype + '/' + cardtype + '_' + cardNr + '_F.png" onclick="document.querySelector(&quot;#flip-toggle' + cardNr + '&quot;).classList.toggle(&quot;hover&quot;);">';
				cardBox +='</div>';
				cardBox +='</div>';
				cardBox +='</div>';				
			}
			cardBox += '</li>';
			return cardBox;
		}

		function init(){
			var cardBoxWrap = $(".nowrap");
			cardMarginHorizon = cardBoxWrap.css('margin-right');
			cardMarginHorizon = cardMarginHorizon.substring(0, cardMarginHorizon.length - 2)
			cardMarginVertical = cardBoxWrap.css('margin-top');
			cardMarginVertical = cardMarginVertical.substring(0, cardMarginVertical.length - 2);
		}	

		loadPage();
		//init();

/*
	$(window).on("load", function() {
		setTimeout(function(){
			fadeAway( $("#test13") );
			moveImg($("#test14"),1,0);
			moveImg($("#test15"),1,0);
			moveImg($("#test16"),1,0);
			moveImg($("#test21"),-5,1);
			moveImg($("#test22"),1,0);
		}, 2000);
	});*/