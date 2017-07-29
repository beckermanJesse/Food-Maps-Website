//pizza places
var Sicilia = new google.maps.LatLng(41.823622, -71.424016);
var CoalFire = new google.maps.LatLng(41.821336, -71.415195);
var BobTimmy = new google.maps.LatLng(41.824028, -71.424453);
//chinese places
var Mumu = new google.maps.LatLng(41.823362, -71.425311);
var PDragon = new google.maps.LatLng(41.820337, -71.426088);
var ChefHo = new google.maps.LatLng(41.823683, -71.426069);
//burger places
var Luxe = new google.maps.LatLng(41.826053, -71.413745);
var Harry = new google.maps.LatLng(41.828316, -71.409282);
var BetterBurger = new google.maps.LatLng(41.827528, -71.400275);

function catfood() {
    $('.one').show();
    $('.two').hide();
    $('.three').hide();
}

function catfood(){

//pizza center
    var mapProp1 = {
      center: BobTimmy,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

//chinese marks
    var mapProp2 = {
      center: Mumu,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

//burger marks
    var mapProp3 = {
      center: Harry,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

//pizza
    var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapProp1);
//chinese
    var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
//burger
    var map3 = new google.maps.Map(document.getElementById("googleMap3"),mapProp3);
    
//pizza
    var marker1 = new google.maps.Marker({ position: Sicilia });
    var marker2 = new google.maps.Marker({ position: CoalFire });
    var marker3 = new google.maps.Marker({ position: BobTimmy });
//chinese
    var marker4 = new google.maps.Marker({ position: Mumu });
    var marker5 = new google.maps.Marker({ position: PDragon });
    var marker6 = new google.maps.Marker({ position: ChefHo });
//burger
    var marker7 = new google.maps.Marker({ position: Luxe });
    var marker8 = new google.maps.Marker({ position: Harry });
    var marker9 = new google.maps.Marker({ position: BetterBurger });

//pizza
    marker1.setMap(map1);
    marker2.setMap(map1);
    marker3.setMap(map1);
//chinese
    marker4.setMap(map2);
    marker5.setMap(map2);
    marker6.setMap(map2);
//burger
    marker7.setMap(map3);
    marker8.setMap(map3);
    marker9.setMap(map3);

//pizza
    var infowindow1 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Bob & Timmy's Grilled Pizza</h2><p>32 Spruce St, Providence, RI 02903 <br> bobandtimmys.com<br>(401) 453-2221<br>Casual indoor/outdoor Sicilian spot offering wood-fired pies, subs & customizable pastast.</p>" });
    var infowindow2 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Providence Coal Fired Pizza</h2><p>385 Westminster St, Providence, RI 02903<br>providencecoalfirepizza.com<br>(401) 454-7499<br>A stylish pizzeria also offering salads, appetizers & a full bar in a buzzy, contemporary space.</p>" });
    var infowindow3 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Sicilia's Pizza</h2><p>181 Atwells Ave, Providence, RI 02903<br>(401) 273-9222<br>Laid-back joint serving stuffed & thin-crust pies, plus other Italian faves, salads & sandwiches.</p>" });
    
//chinese
    var infowindow4 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Mumu Cuisine</h2><p>220 Atwells Ave, Providence, RI 02903<br>mumucuisine.com<br>(401) 369-7040<br>Stylish Chinese restaurant featuring an extensive menu of traditional & inventive dishes.</p>" });
    var infowindow5 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Phoenix Dragon Restaurant</h2><p>256 Broadway, Providence, RI 02903<br>phoenixdragon-restaurant.com<br>Phone:(401) 831-7555<br>Traditional Chinese & Japanese eats, including dim sum, sushi & more, served in a modest storefront.</p>" });
    var infowindow6 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Chef Ho's Chinese Restaurant</h2><p>243 Atwells Ave, Providence, RI 02903<br>chefhoschinese.com<br>(401) 831-0777<br>omfort Chinese-Western combos, noodles, appetizers & other classic fare in a no-frills setting.</p>" });

//burger
    var infowindow7 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Lux's Burger Bar</h2><p>5 Memorial Blvd, Providence, RI 02903<br>luxeburgerbar.com<br>(401) 621-5893<br>Custom burgers & drinks are the draws at this hopping spot also offering events & a menu for dogs.</p>" });
    var infowindow8 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Harry's Bar and Burger</h2><p>121 N Main St, Providence, RI 02903<br>harrysbarburger.com<br>(401) 228-7437<br>Fresh-ground sliders with all the trimmings, 50+ craft brews & alcoholic shakes, in a modern space. </p>" });
    var infowindow9 = new google.maps.InfoWindow({ content: "<h2 style=\"margin-bottom: 12px\">Better Burger Company</h2><p>217 Thayer St, Providence, RI 02906<br>betterburgercompany.com<br>(401) 228-7720<br></p>" });

    google.maps.event.addListener(marker1, 'click', function() {
      infowindow1.open(map1,marker1);
      //document.getElementById("message").innerHTML = infowindow1.content;
    });
    google.maps.event.addListener(marker2, 'click', function() {
      infowindow2.open(map1,marker2);
    });
    google.maps.event.addListener(marker3, 'click', function() {
      infowindow3.open(map1,marker3);
    });
    google.maps.event.addListener(marker4, 'click', function() {
      infowindow4.open(map2,marker4);
    });
    google.maps.event.addListener(marker5, 'click', function() {
      infowindow5.open(map2,marker5);
    });
    google.maps.event.addListener(marker6, 'click', function() {
      infowindow6.open(map2,marker6);
    });
    google.maps.event.addListener(marker7, 'click', function() {
      infowindow7.open(map3,marker7);
    });
    google.maps.event.addListener(marker8, 'click', function() {
      infowindow8.open(map3,marker8);
    });
    google.maps.event.addListener(marker9, 'click', function() {
      infowindow9.open(map3,marker9);
    });

}

catfood();

$('.container').click(function () {
    if ($(this).parent().is($('.three').last())) {
        $(this).parent().hide();
        $('.one').first().show();
    } else {
        $(this).parent().hide();
        $(this).parent().next().show();
    }
});