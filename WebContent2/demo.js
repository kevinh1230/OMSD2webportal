jsPlumb.ready(function() {

	var instance = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			[ "Arrow", { location:1 } ]
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:2,
		strokeStyle:"black", // TODO: color of the line
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:1
	},
	connectorPaintBlueStyle = {
		lineWidth:2,
		strokeStyle:"blue", // TODO: color of the line
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:1
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:4,
		strokeStyle:"#216477",
		outlineWidth:2,
		outlineColor:"white"
	},
	endpointHoverStyle = {
		fillStyle:"#216477",
		strokeStyle:"#216477"
	},
	// the definition of source endpoints (the small blue ones)
	sourceEndpoint = {
		endpoint:"Dot",
		paintStyle:{ 
			strokeStyle:"black", // TODO: color of the hollow circle
			fillStyle:"transparent",
			radius:5,
			lineWidth:3 
		},				
		isSource:true,
		connector:[ "Flowchart", { stub:[40, 60], gap:10, cornerRadius:5, alwaysRespectStubs:true } ],								                
		connectorStyle:connectorPaintStyle,
		hoverPaintStyle:endpointHoverStyle,
		connectorHoverStyle:connectorHoverStyle,
        dragOptions:{},
        overlays:[
        	[ "Label", { 
            	location:[0.5, 1.5], 
            	label:"",
            	cssClass:"endpointSourceLabel" 
            } ]
        ]
	},		
	// the definition of target endpoints (will appear when the user drags a connection) 
	targetEndpoint = {
		endpoint:"Dot",					
		paintStyle:{ fillStyle:"black",radius:9 }, // TODO: color of the hollow circle
		hoverPaintStyle:endpointHoverStyle,
		maxConnections:-1,
		dropOptions:{ hoverClass:"hover", activeClass:"active" },
		isTarget:true,			
        overlays:[
        	[ "Label", { location:[0.5, -0.5], label:"", cssClass:"endpointTargetLabel" } ]
        ]
	},			
	init = function(connection) {			
		//connection.getOverlay("label").setLabel(connection.sourceId.substring(15) + "-" + connection.targetId.substring(15));
		connection.bind("editCompleted", function(o) {
			if (typeof console != "undefined")
				console.log("connection edited. path is now ", o.path);
		});
	};			

	var _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
			for (var i = 0; i < sourceAnchors.length; i++) {
				var sourceUUID = toId + sourceAnchors[i];
				instance.addEndpoint("flowchart" + toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID });						
			}
			for (var j = 0; j < targetAnchors.length; j++) {
				var targetUUID = toId + targetAnchors[j];
				instance.addEndpoint("flowchart" + toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID });						
			}
			

		};

	// suspend drawing and initialize.
// 	instance.doWhileSuspended(function() {
// // 		_addEndpoints("ecomdborder", ["BottomCenter"], ["LeftMiddle"]);
// // 		_addEndpoints("paymentservice", ["BottomCenter"], ["LeftMiddle"]);
// // 		_addEndpoints("addressverificationservice", ["BottomCenter"], ["LeftMiddle"]);
// // 		_addEndpoints("orderidservice", ["BottomCenter"], ["LeftMiddle"]);
// // 		_addEndpoints("orderloggerservice", ["BottomCenter"], ["LeftMiddle"]);

// // 		_addEndpoints("loadpip", ["BottomCenter"], ["LeftMiddle"]);
// // 		_addEndpoints("browsebackorderedpip", ["RightMiddle"], ["LeftMiddle"]);			
// // 		_addEndpoints("shoppingcart", ["RightMiddle"], ["LeftMiddle"]);			
// // 		_addEndpoints("shippingaddress", ["RightMiddle", "BottomLeft", "BottomCenter"], ["LeftMiddle"]);			
// // 		_addEndpoints("delgiftoptions", ["RightMiddle"], ["LeftMiddle"]);			
// // 		_addEndpoints("billingaddress", ["BottomCenter"], ["TopCenter"]);			
// // 		_addEndpoints("payment", ["BottomCenter"], ["TopCenter"]);			
// // 		_addEndpoints("orderconfirm", ["BottomCenter"], ["TopCenter"]);			
// // 		_addEndpoints("cancelabandonorder", ["TopCenter"],  ["BottomCenter"]);
		
// // //		_addEndpoints("inventoryservice", ["BottomCenter"], ["TopCenter"]);
// // 		// _addEndpoints("ecomdbmdmdata", ["BottomCenter"], ["RightMiddle", "TopCenter"]);
// // 		// _addEndpoints("taxservice", ["BottomCenter"], ["TopCenter"]);
// // 		// _addEndpoints("shippingservice", ["BottomCenter"], ["TopCenter"]);
// // 		// _addEndpoints("promotionservice",  ["TopCenter"], ["RightMiddle"]);
// // 		// _addEndpoints("sterling", ["RightMiddle"], ["LeftMiddle", "TopCenter"]);
		
// // 		// _addEndpoints("mdmservice", ["BottomCenter"], ["TopCenter"]);
// // 		// _addEndpoints("rulepublisher",  ["LeftMiddle"], ["RightMiddle"]);
// // 		// _addEndpoints("mdm", ["LeftMiddle"], ["TopCenter"]);
					
// 		// listen for new connections; initialise them the same way we initialise the connections at startup.
// 		instance.bind("connection", function(connInfo, originalEvent) { 
// 			init(connInfo.connection);
// 		});			
					
		// make all the window divs draggable						
		// instance.draggable(jsPlumb.getSelector(".flowchart-demo .window"), { grid: [20, 20] });		
		// THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector 
		// method, or document.querySelectorAll:
		//jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });

		        
		// connect a few up
		// instance.connect({uuids:["paymentBottomCenter", "shippingserviceTopCenter"], editable:false});
		// instance.connect({uuids:["mdmLeftMiddle", "mdmserviceBottomCenter"], editable:false});
		// instance.connect({uuids:["mdmserviceTopCenter", "ecomdbmdmdataBottomCenter"], editable:false});
		// instance.connect({uuids:["ecomdbmdmdataRightMiddle", "rulepublisherLeftMiddle"], editable:false});
		// instance.connect({uuids:["cancelabandonorderBottomCenter", "promotionserviceTopCenter"], editable:false});
		// instance.connect({uuids:["rulepublisherRightCenter", "promotionserviceTopCenter"], editable:false});
		
//		instance.connect({uuids:["loadpipBottomCenter", "inventoryserviceTopCenter"], editable:false});
//		instance.connect({uuids:["browsebackorderedpipRightMiddle", "browsebackorderedpipLeftMiddle"], editable:false});
//		instance.connect({uuids:["shoppingcartRightMiddle", "shoppingcartLeftMiddle"], editable:false});
//		instance.connect({uuids:["shippingaddressRightMiddle", "shippingaddressLeftMiddle"], editable:false});
//		instance.connect({uuids:["delgiftoptionsBottomLeft", "delgiftoptionsLeftMiddle"], editable:false, label:"Reserve Inventory"});
//		instance.connect({uuids:["billingaddressBottomCenter", "billingaddressTopCenter"], editable:false, label:"Apply Promo"});
		//
		
		//
		// listen for clicks on connections, and offer to delete connections on click.
		//
		instance.bind("click", function(conn, originalEvent) {
			if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
				jsPlumb.detach(conn); 
		});	
		
		instance.bind("connectionDrag", function(connection) {
			console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
		});		
		
		instance.bind("connectionDragStop", function(connection) {
			console.log("connection " + connection.id + " was dragged");
		});

		instance.bind("connectionMoved", function(params) {
			console.log("connection " + params.connection.id + " was moved");
		});

	});

	jsPlumb.fire("jsPlumbDemoLoaded", instance);
	
});