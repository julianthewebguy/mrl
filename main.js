  
    jQuery(document).ready(function () {
     if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
  
      var listingFooter = jQuery('<div class="traductor"> <div class="google-translate-widget-box show_on_menu"> <style> #google_translate_element img { margin-bottom: 0; } </style> <div class="google-translate-widget"> <div id="google_translate_element"></div> </div> </div> </div> <div class="mainBackground"> <div id="mid-footer">  <div class="footer-flexContainer"> <div class="footer-flex footer-left">  <h2>MEXICO REALTY LIVING</h2> <br /> <p><strong><a href="tel:+5219841180186">+521 (984) 118-0186</a></strong> Mexico</p> <p><strong><a href="https://wa.me/5219841180186">+521 (984) 118-0186</a></strong> WhatsApp</p> <p><strong><a href="tel:1-866-271-4250">1-866-271-4250</a></strong> Toll Free</p>  <p>Gonzalo Guerrero CP 77710</p> <p>Playa del Carmen Q Roo</p>  <p>Mexico</p>  <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://www.twitter.com/mexico_living" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/f162/95cc/2e56/0fcec55161573d503c06/original.png" alt="Twitter" /></a><a href="https://www.facebook.com/mary.serranodelao" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/3404/c79e/57d8/9c11614f34f5b458fb28/original.png" alt="Facebook" /></a><a href="https://www.instagram.com/mexrealtyliving/?hl=es-la" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/093e/c195/cc81/bef982cf3ac6d260c515/original.png" alt="Instgram" /></a> </div> </div>  <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/0582/daf4/6c11/43bc8663e135d37b3e3e/original.png" alt="Mexico realty Living" /> <p><img alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/3a5b/60e4/dc23/1504cd4f7a895b20d877/original.png" initialwidth="220"></p> <div class="diversity"> <div class="flags"><img src="https://mediavault.point2.com/p2a/htmltext/a584/5351/4537/c57250c202a146fa6ef8/original.jpg" / alt="Mexico Real Estate"><img src="https://mediavault.point2.com/p2a/htmltext/644f/af7a/7bc5/391b37bc1b570685cb93/original.jpg" / alt="Mexico properties for sale"><img src="https://mediavault.point2.com/p2a/htmltext/917c/a83b/98a3/12b5cd3a902a84726fc4/original.jpg" / alt="Mexico real esta estate for sale"></div>  </div>   </div>   <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/mexico_real_estate/page_2703635.html">All Real Estate</a></li> <li><a href="/tulum_real_estate/page_2703484.html">Tulum</a></li> <li><a href="/cancun_real_estate/page_2703486.html">Cancún</a></li> <li><a href="/playa_del_carmen_real_estate/page_2703485.html">Playa del Carmen</a></li> <li><a href="/akumal_real_estate/page_2703487.html">Akumal</a></li> <li><a href="/mahahual_real_estate/page_2703488.html">Mahahual</a> </li> <li><a href="/holbox_real_estate/page_2703489.html">Holbox</a></li><li><a href="/cozumel_real_estate/page_2704385.html">Cozumel</a></li> <li><a href="/puerto_morelos_real_estate/page_2703490.html">Puerto Morelos</a></li> <li><a href="/puerto_aventuras_real_estate/page_2703491.html">Puerto Aventuras</a></li> <li><a href="/chemuyil_real_estate/page_2703492.html">Chemuyil</a> </li> <li><a href="/bacalar_real_estate/page_2703493.html">Bacalar</a> </li> <li><a href="/yucatan_real_estate/page_2703495.html">Yucatan</a></li>  </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/0582/daf4/6c11/43bc8663e135d37b3e3e/original.png" alt="Mexico realty Living" /> <p><img alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/3a5b/60e4/dc23/1504cd4f7a895b20d877/original.png" initialwidth="220"></p> <div class="diversity"> <div class="flags"><img src="https://mediavault.point2.com/p2a/htmltext/a584/5351/4537/c57250c202a146fa6ef8/original.jpg" / alt="Mexico Real Estate"><img src="https://mediavault.point2.com/p2a/htmltext/644f/af7a/7bc5/391b37bc1b570685cb93/original.jpg" / alt="Mexico properties for sale"><img src="https://mediavault.point2.com/p2a/htmltext/917c/a83b/98a3/12b5cd3a902a84726fc4/original.jpg" / alt="Mexico real esta estate for sale"></div>  </div>   </div> </div>     </div>  <div> <p class="" style=" text-align: center; color: #e6e3d8; margin-bottom: 0; ">Mexico realty Living is a diverse international company. Copyright Mexico Realty Living. All Rights Reserved.</p> </div> </div> <div id="final-footer" class="secondaryBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div>');
  
      jQuery('body').append(listingFooter);
     }
     jQuery(".row-fluid").last().addClass("footerBG");
    });
    function addCustomClasses() {
     if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
      var headerDiv = document.getElementsByClassName('maindiv')[0];
     }
     else {
      var headerDiv = document.getElementsByClassName('row-fluid')[1];
     }
     headerDiv.classList.add('headerBG');
     headerDiv.classList.add('transparentBackground');
    }
    document.ready = addCustomClasses;
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
     // Get the header depending on whether we're on a listing page or not
     if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
      var header = document.getElementsByClassName('maindiv')[0];
      //console.log('AM');
     }
     else {
      var header = document.getElementsByClassName('headerBG')[0];
     }
     // Get the offset position of the navbar
     var sticky = header.offsetTop;
     if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
     } else {
      header.classList.remove("sticky");
     }
    }
    ; (function ($) {
     // DOM ready
     $(function () {
      // Append the mobile icon nav
      $('.nav').append($('<div class="nav-mobile"></div>'));
      // Add a <span> to every .nav-item that has a <ul> inside
      $('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
      // Click to reveal the nav
      $('.nav-mobile').click(function () {
       $('.nav-list').toggle();
      });
      // Dynamic binding to on 'click'
      $('.nav-list').on('click', '.nav-click', function () {
  
       // Toggle the nested nav
       $(this).siblings('.nav-submenu').toggle();
  
       // Toggle the arrow using CSS3 transforms
       $(this).children('.nav-arrow').toggleClass('nav-rotate');
  
      });
      $('.nav-list').on('click', '.mobile-trigger', function () {
       // Toggle the nested nav
       $(this).siblings('.nav-submenu').toggle();
  
       // Toggle the arrow using CSS3 transforms
       $(this).prev().toggleClass('nav-rotate');
  
      });
     });
    })(jQuery);
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
     // Get the header depending on whether we're on a listing page or not
     if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
      var header = document.getElementsByClassName('maindiv')[0];
      //console.log('AM');
     }
     else {
      var header = document.getElementsByClassName('headerBG')[0];
     }
     // Get the offset position of the navbar
     var sticky = header.offsetTop;
     if (window.pageYOffset > sticky) {
      header.classList.add("sticky2");
     } else {
      header.classList.remove("sticky2");
     }
    }
var gwidget_langs = 'es'
  
      function googleTranslateElementInit() {
          new google.translate.TranslateElement({
              pageLanguage: 'auto',
              includedLanguages: 'es,en,it,de,fr,ru',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
          },
              'google_translate_element');
      }
      $(".show-original-lang").click(function () {
          $('#\\:2\\.container').contents().find('#\\:2\\.restore').click();
      })
