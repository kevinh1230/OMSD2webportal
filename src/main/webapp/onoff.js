$(document).ready(function(){

    $(".activity").effect("bounce", { times:5, distance:300 }, 600);
    $(".service2").animate({bottom:'590px',right:'16px'});

    // $(document).scroll(function() {   
    //     if($(document).scrollTop() >400) {
    //         $(document).scrollTop(400);
    //     }
    // });    

    var taxflag = 1;
    var shippingflag = 1;
    var promotionflag = 1;

    $(".taxservicecopy").click(function(){
        if(taxflag === 1){
            $.blockUI({ message: $('#taxserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 0; 
            $.post( "OMSD2", { message: "Tax service is on." } );
       } else {
            $.blockUI({ message: $('#taxserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 1;
            $.post( "OMSD2", { message: "Tax service is off." } );

        }
    });
    $(".shippingservice").click(function(){
        if(shippingflag === 1){
            $.blockUI({ message: $('#shippingserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 0; 
            $.post( "OMSD2", { message: "Shipping service is on" } );

       } else {
            $.blockUI({ message: $('#shippingserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 1;
            $.post( "OMSD2", { message: "Shipping service is off." } );
        }
    });
    $(".promotionservice").click(function(){
        if(promotionflag === 1){
            $.blockUI({ message: $('#promotionserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           promotionflag = 0; 
           $.post( "OMSD2", { message: "Promotion service is on." } );

       } else {
            $.blockUI({ message: $('#promotionserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            promotionflag = 1;
            $.post( "OMSD2", { message: "Promotion service is off" } );
        }
    });
});