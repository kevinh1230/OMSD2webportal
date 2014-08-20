

jsPlumb.ready(function() {

    var instance = jsPlumb.getInstance({
        // default drag options
        DragOptions : { cursor: 'pointer', zIndex:2000 },
        // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
        // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
        ConnectionOverlays : [
            // [ "Arrow", { location:1 } ]
        ],
        Container:"flowchart-demo"
    });
    // suspend drawing and initialize.
    instance.doWhileSuspended(function() {     
        // listen for new connections; initialise them the same way we initialise the connections at startup.
        instance.bind("connection", function(connInfo, originalEvent) { 
            init(connInfo.connection);
        });
        
        // make all .window divs draggable. note that here i am just using a convenience method - getSelector -
        // that enables me to reuse this code across all three libraries. In your own usage of jsPlumb you can use
        // your library's selector method - "$" for jQuery, "$$" for MooTools, "Y.all" for YUI3.   
        instance.draggable(jsPlumb.getSelector(".window"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowyellow"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowgreen"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowblue"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowgray"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowinventory"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowecomdbmdmdata"), { containment:".demo"});
        instance.draggable(jsPlumb.getSelector(".windowecomdborder"), { containment:".demo"});

        instance.draggable(jsPlumb.getSelector(".windowpaymentservice"), { containment:".demo"});

        //gray arrows
        connectionpoints("orderconfirm","paymentservice", -62, -178, [ 0.5 , 0, 0, 1 ], [ 0.55, 1, 0, -1 ], "#6C6C6C", "");
        connectionpoints("orderconfirm","orderloggerservice", -95,75, [ 0.5 , 0, 0, 1 ],[ 0.9, 0.5, 1, 0 ], "#6C6C6C", "");
        connectionpoints("orderconfirm","sterling", 41,53, [ 0.9, 0.5, 1, 0 ],[ 0.095, 0.5, -1, 0 ], "#6C6C6C", "");
        //blue arrows
        connectionpoints("payment","pricing", -45,-73, [ 0.5, 1, 0, -1 ],[ 0.5 , -0.02, 0, 1 ], "#4A78B0", "");
        connectionpoints("payment","inventoryservice", -45,-76, [ 0.5, 1, 0, -1 ],[ 0.5 , 0, 0, 1 ], "#4A78B0", "");
        connectionpoints("payment","orderidservice", -65,-55, [ 0.5 , 0, 0, 1 ],[ 0.5, 1, 0, -1 ], "#4A78B0", "");
        connectionpoints("payment","orderloggerservice", -95,77, [ 0.51 , 0, 0, 1 ],[ 0.9, 0.5, 1, 0 ], "#4A78B0", "");
        connectionpoints("inventoryservice","sterling", -140,45, [ 0.5, 1, 0, -1 ],[ 0.9, 0.5, 1, 0 ], "#4A78B0", "");
        connectionpoints("orderloggerservice","ecomdborder", -65,-55, [ 0.5 , 0, 0, 1 ],[ 0.5, 1, 0, -1 ], "#4A78B0", "");
        connectionpoints("mdmservice","ecomdbmdmdata", -65,-55, [ 0.5 , 0, 0, 1 ],[ 0.5, 1, 0, -1 ], "#4A78B0", "");
        //green arrows
        connectionpoints("loadpip","ecomdbmdmdata", -55,-47, [ 0.5, 1, 0, -1 ],[ 0.5 , 0, 0, 1 ], "#4CAC56", "");
        connectionpoints("loadpip","inventoryservice", -82,-39, [ 0.51, 1, 0, -1 ],[ 0.3 , 0, 0, 1 ], "#4CAC56", "");
        connectionpoints("browsebackorderedpip","inventoryservice", -82,-39, [ 0.51, 1, 0, -1 ],[ 0.3 , 0, 0, 1 ], "#4CAC56", "");
        connectionpoints("shoppingcart","inventoryservice", -82,-39, [ 0.51, 1, 0, -1 ],[ 0.3 , 0, 0, 1 ], "#4CAC56", "");     
        //red arrows
        connectionpoints("cancelabandonorder","promotionservice", -55, 10, [ 0.5, 1, 0, -1 ],[ 0.9, 0.5, 1, 0 ], "#AB3535", "");
        connectionpoints("cancelabandonorder","inventoryservice", -55,-66, [ 0.51, 1, 0, -1 ],[ 0.7 , 0, 0, 1 ], "#AB3535", "");
        connectionpoints("cancelAbandon","orderloggerservice", -116.6,45, [ 0.5 , -0.03, 0, 1 ],[ 0.9, 0.5, 1, 0 ], "#AB3535", "");
        connectionpoints("inventoryservice","sterling", -140,45, [ 0.5, 1, 0, -1 ],[ 0.9, 0.5, 1, 0 ], "#AB3535", "4 1 1");
        //gold arrows
        connectionpoints("sterling","pricing", -29,-84, [ 0.5, 1, 0, -1 ],[ 0.7, 1, 0, -1 ], "#B4A217", "");
        //black arrows
        connectionpoints("shippingaddress","delgiftoptions", 20,55, [ 1, 0.5, 1, 0 ],[ 0.095, 0.5, -1, 0 ], "black", "");
        connectionpoints("delgiftoptions","billingaddress", 20,55, [ 1, 0.5, 1, 0 ],[ 0.095, 0.5, -1, 0 ], "black", "");
        connectionpoints("billingaddress","payment", 20,55, [ 1, 0.5, 1, 0 ],[ 0.095, 0.5, -1, 0 ], "black", "");
        connectionpoints("payment","orderconfirm", 20,55, [ 1, 0.5, 1, 0 ], [ 0.095, 0.5, -1, 0 ], "black", "");
        connectionpoints("shippingaddress","addressverificationservice", -65,-55, [ 0.5 , 0, 0, 1 ], [ 0.5, 1, 0, -1 ], "black", "");
        connectionpoints("billingaddress","addressverificationservice", -65,-55, [ 0.5 , 0, 0, 1 ], [ 0.5, 1, 0, -1 ], "black", "");
        connectionpoints("ecomdbmdmdata","rulepublisher", 20, 55, [ 0.9, 0.5, 1, 0 ], [ 0.095, 0.5, -1, 0 ], "black", "");
        connectionpoints("rulepublisher","pricing",20, 55, [ 0.9, 0.5, 1, 0 ], [ 0.5, 0.95, 0,  1 ], "black", "");
        connectionpoints("mdm","mdmservice", 30,20, [ 0.095, 0.5, -1, 0 ], [ 0.5, 0.91, 0,  1 ], "black", "");
        //purple arrow
        connectionpoints("payment","paymentservice",-80, -50,[ 0.7 , 0, 0, 1 ], [ 0, 0.5, 1, 0 ], "#6E4081", "");
        connectionpoints("payment","promotionservice", -37, -84, [ 0.7, 1, 0, -1 ], [ 0.7 , 0, 0, 1 ], "#6E4081", "");

        //connects points between two components
        function connectionpoints(source, target, stubsource, stubtarget, anchorsource, anchortarget, strokestyle, dashstyle){
            instance.connect({
                source: source,
                target: target, 
                connector:[ "Flowchart", { stub:[stubsource, stubtarget], gap:5, cornerRadius:5, alwaysRespectStubs:true } ],
                anchors:[anchorsource, anchortarget],
                paintStyle:{
                    lineWidth:3,
                    strokeStyle: strokestyle,
                    dashstyle:dashstyle,
                    joinstyle:"miter"
                },
                endpointStyle:{
                    radius:1
                },
                endpointsOnTop:true,
                overlays : [
                    ["Arrow", {
                        cssClass:"l1arrow",
                        id:"arrow",
                        location:1, width:20,length:20,
                        events:{
                            "click":function(arrow, evt) {
                                alert("clicked on arrow for connection " + arrow.component.id);
                            }
                        }
                    }]
                ]
            });
        }
    });
    jsPlumb.fire("jsPlumbDemoLoaded", instance);
});