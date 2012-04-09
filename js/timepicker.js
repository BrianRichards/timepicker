(function( $ ) {
  $.widget( "ui.timepicker", {
 
    // These options will be used as defaults
    options: {
      appendTo: "body"
    },
 
    // Set up the widget
    _create: function() {
      var self = this;
      var pickerId = ( $(this.element).attr("id") || new Date().getTime() ) + "_timepicker";

      this.picker = $("<div />")
        .attr( "id", pickerId )
        .addClass( "ui-timepicker ui-widget ui-widget-content ui-corner-all" )
        .append( this._createColumn("AM") )
        .append( this._createColumn("PM") )
        //.appendTo( this.document.find( this.options.appendTo || "body" )[0] );
        .appendTo( $( this.options.appendTo || "body" )[0] );
    },

    _createColumn: function ( columnName ) {
      var timeList = $("<ul />");
      for (var i = 0 ; i < 12 ; i++){
        var hourText = i===0 ? "12:00" : i+":00";
        var hourli = $("<li />");
        hourli.append( $("<a>" + hourText + "</a>").addClass( "ui-timepicker-fullhour" ) );
        var partialHourul = $("<ul />");
        for (var j = 15 ; j < 60 ; j += 15){
          partialHourul.append(
            $("<li />")
              .append(
                $("<a>:" + j + "</a>").addClass( "ui-timepicker-partialhour" )
              )
          );
        }
        hourli.append(partialHourul);

        timeList.append(hourli);
      }

      var columnContainer = $("<div />")
        .addClass( "ui-timepicker-column ui-helper-clearfix" )
        .append( $("<div>" + columnName + "</div>").addClass("ui-timepicker-header ui-widget-header ui-corner-all") )
        .append( timeList );

      return columnContainer;
    },
 
    // Use the _setOption method to respond to changes to options
    _setOption: function( key, value ) {
      /*
      switch( key ) {
        case "clear":
          // handle changes to clear option
          break;
      }
      */
 
      // In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
      $.Widget.prototype._setOption.apply( this, arguments );
      // In jQuery UI 1.9 and above, you use the _super method instead
      this._super( "_setOption", key, value );
    },
 
    // Use the destroy method to clean up any modifications your widget has made to the DOM
    destroy: function() {
      this.picker.remove();
      
      // In jQuery UI 1.8, you must invoke the destroy method from the base widget
      $.Widget.prototype.destroy.call( this );
      // In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
    }
  });
}( jQuery ) );
