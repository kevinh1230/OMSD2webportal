$(document).ready(function(){

	$("#shopping").hide("explode").show("explode");
	$("#checkout").hide("explode").show("explode");
	$("#cancelAbandon").hide("explode").show("explode");
	
	$("#inventoryservice").hide("puff").show("puff");
	$("#pricing").hide("puff").show("puff");

	

    var taxflag = 1;
    var shippingflag = 1;
    var promotionflag = 1;
    
    $("#ecomdborder").click(function(){
    	if(taxflag === 1){
            $.blockUI({ message: $('#ecomdborderon') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 0; 
            $.post( "demo", { message: "ecom DB (Order) is on." } );
       } else {
            $.blockUI({ message: $('#ecomdborderoff') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 1;
            $.post( "demo", { message: "ecom DB (Order) is off." } );

        }
    });
    $("#paymentservice").click(function(){
        if(shippingflag === 1){
            $.blockUI({ message: $('#paymentserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 0; 
            $.post( "demo", { message: "Payment Service is on" } );

       } else {
            $.blockUI({ message: $('#paymentserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 1;
            $.post( "demo", { message: "Payment Service is off." } );
        }
    });
    $("#addressverificationservice").click(function(){
        if(promotionflag === 1){
            $.blockUI({ message: $('#addressverificationserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           promotionflag = 0; 
           $.post( "demo", { message: "Address Verification Service is on." } );

       } else {
            $.blockUI({ message: $('#addressverificationserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            promotionflag = 1;
            $.post( "demo", { message: "Address Verification Service is off" } );
        }
    });


    $("#taxservice").click(function(){
    	if(taxflag === 1){
            $.blockUI({ message: $('#taxserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 0; 
            $.post( "demo", { message: "Tax service is on." } );
       } else {
            $.blockUI({ message: $('#taxserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 1;
            $.post( "demo", { message: "Tax service is off." } );

        }
    });
    $("#shippingservice").click(function(){
        if(shippingflag === 1){
            $.blockUI({ message: $('#shippingserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 0; 
            $.post( "demo", { message: "Shipping service is on" } );

       } else {
            $.blockUI({ message: $('#shippingserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 1;
            $.post( "demo", { message: "Shipping service is off." } );
        }
    });
    $("#promotionservice").click(function(){
        if(promotionflag === 1){
            $.blockUI({ message: $('#promotionserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           promotionflag = 0; 
           $.post( "demo", { message: "Promotion service is on." } );

       } else {
            $.blockUI({ message: $('#promotionserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            promotionflag = 1;
            $.post( "demo", { message: "Promotion service is off" } );
        }
    });
});