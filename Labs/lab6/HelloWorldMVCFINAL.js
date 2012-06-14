(function($){

  var ListView = Backbone.View.extend({    
    el: $('body'), // attaches `this.el` to an existing element.

    events: {
      'click button#add': 'addItem'
    },
    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    },

    render: function(){
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
    },
    
    addItem: function(){
      this.counter++;
      $('ul', this.el).append("<li>hello world</li>");    }
  });
  
  var listView = new ListView();      
})(jQuery);
