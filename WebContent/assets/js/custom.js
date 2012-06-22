
!function ($) {

  $(function(){

	    $('#btnGoToAbo').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabAbo"]').tab('show'); 
	    });
	    
	    $('#btnBackToAbo').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabAbo"]').tab('show'); 
	    });
	  
	    $('#btnGoToInfoPerso').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabInfoPerso"]').tab('show'); 
	    });
	    
	    $('#btnBackToInfoPerso').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabInfoPerso"]').tab('show'); 
	    });
	    
	    $('#btnGoToPaiement').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabPaiement"]').tab('show'); 
	    });
	    
	    $('#btnBackToPaiement').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabPaiement"]').tab('show'); 
	    });
	    
	    $('#btnGoToConfirmation').click(function (e) {
	        e.preventDefault();
	        $('#inscriptionTab a[href="#tabConfirmation"]').tab('show'); 
	    });
		
		$('#dp2').datepicker();
	    
	    $('#modalCGV').modal(options);
		

	    
  });

}(window.jQuery);