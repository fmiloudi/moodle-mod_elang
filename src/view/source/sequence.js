enyo.kind({
    name: "Sequences",
    kind: "FittableRows", 
    classes: "list enyo-fit",
    components: [
    
      {   
          name: "sequenceList", 
		  classes: "list-list enyo-fit",
          kind: "List", 
          count:0, 
          onSetupItem: "setupItem", 
          components: [
              {
                  name: "sequenceItem", 
                  classes: "list-item enyo-border-box",
                  ontap:'sequenceItemTapped', 
                  components: [
                      {
						classes: "list-index",
                        name: "itemTitle",  
                        content:"Un titre",
                      }
                  ]
              }
          ]
      },
    ],
    datasource:[
        {kind:"Sequence", id:0, titre:"titre0", texte:"le texte du titre0", debut:5, fin:10},
        {kind:"Sequence", id:1, titre:"titre1", texte:"le texte du titre1", debut:10, fin:15},
		{kind:"Sequence", id:2, titre:"titre2", texte:"le texte du titre2", debut:15, fin:20},
		{kind:"Sequence", id:3, titre:"titre3", texte:"le texte du titre3", debut:25, fin:30},
		{kind:"Sequence", id:4, titre:"titre4", texte:"le texte du titre3", debut:25, fin:30},
		{kind:"Sequence", id:5, titre:"titre5 treeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee tres tres tres tres tres long ", texte:"le texte du titre3", debut:25, fin:30}
    ],
    create: function(){
		this.inherited(arguments);
		this.$.sequenceList.setCount(this.datasource.length);
    },
	
    setupItem:function(inSender,inEvent) {
		this.titre = this.datasource[inEvent.index].titre; 
		var newtitre =(this.titre.length > 50)?this.titre.substring(0,50)+"...":this.titre;

		this.$.sequenceItem.addRemoveClass("list-selected", inSender.isSelected(inEvent.index));
		this.$.itemTitle.setContent(newtitre );
    },
	
    sequenceItemTapped:function(inSender,inEvent){
      alert("L'id de "+this.datasource[inEvent.index].titre+" est "+this.datasource[inEvent.index].id);
    }
});

enyo.kind({
	name:"Sequence",
	published:{
		id : null,
		titre : null,
		texte : null,
		debut : null,
		fin : null
	},
	create: function(){
		this.inherited(arguments);
	}
});
	
	
	
	
	
	
	
	
	
	
	
