$(document).ready(function(){

    //jquery functions that cause animations
	$("#shopping").hide("explode").show("explode");
	$("#checkout").hide("explode").show("explode");
	$("#cancelAbandon").hide("explode").show("explode");
	
	$("#inventoryservice").hide("puff").show("puff");
	$("#pricing").hide("puff").show("puff");

    //flags for services
    var taxflag = 1;
    var shippingflag = 1;
    var promotionflag = 1;

    //turns "on/off" tax service
    $("#taxservice").click(function(){
    	if(taxflag === 1){
            $.blockUI({ message: $('#taxserviceon') }); //block ui with message
            setTimeout($.unblockUI, 2000); //set timeout on ui block
            taxflag = 0; //change flag
            $.post( "demo", { message: "Tax service is on." } ); //post to server
       } else {
            $.blockUI({ message: $('#taxserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 1; //chnge flag
            $.post( "demo", { message: "Tax service is off." } ); //post to server

        }
    });

    //turns "on/off" shipping service
    $("#shippingservice").click(function(){
        if(shippingflag === 1){
            $.blockUI({ message: $('#shippingserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 0; //change flag
            $.post( "demo", { message: "Shipping service is on" } ); //post to server

       } else {
            $.blockUI({ message: $('#shippingserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 1; //change flag
            $.post( "demo", { message: "Shipping service is off." } ); //post to server
        }
    });
    //turns "on/off" promotion service

    $("#promotionservice").click(function(){
        if(promotionflag === 1){
            $.blockUI({ message: $('#promotionserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           promotionflag = 0; //change flag
           $.post( "demo", { message: "Promotion service is on." } );

       } else {
            $.blockUI({ message: $('#promotionserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            promotionflag = 1; //change flag
            $.post( "demo", { message: "Promotion service is off" } );
        }
    });
});