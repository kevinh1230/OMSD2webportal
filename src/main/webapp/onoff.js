//$(document).ajaxStop($.unblockUI); 

$(document).ready(function(){
    var taxflag = 1;
    var shippingflag = 1;
    var promotionflag = 1;
    $(".taxservicecopy").click(function(){
        if(taxflag === 1){
            $.blockUI({ message: $('#taxserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           taxflag = 0; 

       } else {
            $.blockUI({ message: $('#taxserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            taxflag = 1;
        }
    });
     $(".shippingservice").click(function(){
        if(shippingflag === 1){
            $.blockUI({ message: $('#shippingserviceon') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 0; 

       } else {
            $.blockUI({ message: $('#shippingserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            shippingflag = 1;
        }
    });
      $(".promotionservice").click(function(){
        if(promotionflag === 1){
            $.blockUI({ message: $('#promotionserviceon') }); 
            setTimeout($.unblockUI, 2000); 
           promotionflag = 0; 

       } else {
            $.blockUI({ message: $('#promotionserviceoff') }); 
            setTimeout($.unblockUI, 2000); 
            promotionflag = 1;
        }
    });
});