// See https://customfields.zendesk.com/hc/en-us/articles/360000919672
jQuery(document).ready(function() {

  // Close the panel and remove all classes when called.
  function close_accordion_section() {
    jQuery('#custom-fields-accordion .accordion-section').removeClass('active');
    jQuery('#custom-fields-accordion .accordion-section-title').removeClass('active');
    jQuery('#custom-fields-accordion .accordion-section-content').slideUp(300).removeClass('open');
  }
  
  jQuery('.accordion-section-title').click(function(e) {
    // Store the clicked link
    var currentAttrValue = jQuery(this).attr('href');
    
    // If open when clicked, close it.
    if(jQuery(e.target).is('.active')) {
      close_accordion_section();
    }
    else {
      // If closed, clear all classes.		
      close_accordion_section();
      // Add active class to section title
      jQuery(this).addClass('active');
      // Open up the hidden content panel
      jQuery('#custom-fields-accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
    }
	
    // Add an active classs to the whole wrapper. Not used by default,
    // but added for convenience. 
    jQuery(this).closest('.accordion-section').addClass('active');

    // Don't try to follow the link. 
    e.preventDefault();
  });
});