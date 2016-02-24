"use strict";angular.module("webApp",["ngAnimate","ngCookies","ngMessages","ngResource","ui.router","ngSanitize","ngTouch","firebase"]).constant("fire",{clients:"https://clientsbnoapp.firebaseio.com"}).run(["$rootScope","$location",function(a,b){a.$on("$routeChangeError",function(c,d,e,f){"AUTH_REQUIRED"===f&&(a.message="Sorry, you must log in to access thar page",b.path("/inicio"))})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("inicio",{url:"/inicio",templateUrl:"views/inicio.html",controller:"InicioCtrl"}).state("servicios",{url:"/servicios",templateUrl:"views/servicios.html",controller:"ServiciosCtrl"}).state("clientes",{url:"/clientes",templateUrl:"views/clientes.html",controller:"ClientesCtrl"}).state("privado",{url:"/privado",templateUrl:"views/privado.html",controller:"PrivadoCtrl",resolve:{currentAuth:["Authentication",function(a){return a.requireAuth()}]}}),b.otherwise("/inicio")}]),angular.module("webApp").controller("NavCtrl",["$scope","$rootScope","$timeout","Authentication",function(a,b,c,d){function e(){$("#mensaje").animate({opacity:0},500,function(){b.message=""})}b.btn=!0;var f=function(){$(".navegador").css({height:"100%"}),$("#cerrarAllModals").css({display:"block"}),b.btn=!1},g=function(){$("#menu").closeModal(),$("#ingresar").closeModal(),$(".navegador").css({height:"1%"}),$("#cerrarAllModals").css({display:"none"}),b.btn=!0};a.btnCerrar=function(){g()},a.abrirModal=function(a){"ingresar"===a&&($("#ingresar").openModal(),f()),"menu"===a&&($("#menu").openModal(),f())},a.cerrarModal=function(){g()},a.clientLogin=function(a){d.login(a)},a.clientLogout=function(){d.logout()},$(document).ready(function(){var b=$(window).width(),c=function(){b>1280&&(a.logo="./images/newLogoCompleto4.3803524f.png"),1280>=b&&(a.logo="./images/newLogoCompleto4.3803524f.png"),800>=b&&(a.logo="./images/newLogoCompleto4.3803524f.png"),600>=b&&(a.logo="./images/newLogoCompleto4.3803524f.png")};c(),$(window).resize(function(){b=$(window).width(),1280>=b&&a.$apply(function(){a.logo="./images/banighton.3728750e.png"}),600>=b&&a.$apply(function(){a.logo="./images/logo.ae12c897.png"})})}),b.$watch("message",function(){("Usuario inexistente."===b.message||"Contraseña incorrecta."===b.message)&&($("#mensaje").css({opacity:1}),c(e,3e3))})}]),angular.module("webApp").controller("InicioCtrl",["$scope","$rootScope",function(a,b){b.PAGE="inicio",$(document).ready(function(){var b=$(window).width(),c=function(){b>1280&&(a.imagenInicio="./images/inicio1920.5cf91fc1.jpg"),1280>=b&&(a.imagenInicio="./images/inicio1280.4fca1333.jpg"),800>=b&&(a.imagenInicio="./images/inicio800.2ca35edf.jpg"),600>=b&&(a.imagenInicio="./images/inicio600.44fa03d2.jpg")};c(),$(window).resize(function(){b=$(window).width(),b>1280&&a.$apply(function(){a.imagenInicio="./images/inicio1920.5cf91fc1.jpg"}),1280>=b&&a.$apply(function(){a.imagenInicio="./images/inicio1280.4fca1333.jpg"}),800>=b&&a.$apply(function(){a.imagenInicio="./images/inicio800.2ca35edf.jpg"}),600>=b&&a.$apply(function(){a.imagenInicio="./images/inicio600.44fa03d2.jpg"})})})}]),angular.module("webApp").controller("ClientesCtrl",["$scope","$rootScope","Authentication",function(a,b,c){b.PAGE="clientes",$(document).ready(function(){var d=$(window).width(),e=function(){d>1280&&(a.imagenClientes="./images/clientes1920.9229965f.jpg"),1280>=d&&(a.imagenClientes="./images/clientes1280.1981af66.jpg"),800>=d&&(a.imagenClientes="./images/clientes800.b5512291.jpg"),600>=d&&(a.imagenClientes="./images/clientes600.da93f456.jpg")};e(),$(".parallax").parallax(),$(window).resize(function(){d=$(window).width(),d>1280&&a.$apply(function(){a.imagenClientes="./images/clientes1920.9229965f.jpg"}),1280>=d&&a.$apply(function(){a.imagenClientes="./images/clientes1280.1981af66.jpg"}),800>=d&&a.$apply(function(){a.imagenClientes="./images/clientes800.b5512291.jpg"}),600>=d&&a.$apply(function(){a.imagenClientes="./images/clientes600.da93f456.jpg"})}),a.register=function(d){(void 0===d.client||""===d.client)&&(b.message="Debe seleccionar Disco o Dj porfavor."),("disco"===d.client||"dj"===d.client)&&(b.message="",c.register(a.client))}})}]),angular.module("webApp").controller("ServiciosCtrl",["$scope","$rootScope",function(a,b){b.PAGE="servicios",$(document).ready(function(){var b=$(window).width(),c=function(){b>1280&&(a.imagenServicios="./images/servicios1920.d114b00d.jpg"),1280>=b&&(a.imagenServicios="./images/servicios1280.c8ded61e.jpg"),800>=b&&(a.imagenServicios="./images/servicios800.266fc9ef.jpg"),600>=b&&(a.imagenServicios="./images/servicios600.bdc12871.jpg")};c(),$(window).resize(function(){b=$(window).width(),b>1280&&a.$apply(function(){a.imagenServicios="./images/servicios1920.d114b00d.jpg"}),1280>=b&&a.$apply(function(){a.imagenServicios="./images/servicios1280.c8ded61e.jpg"}),800>=b&&a.$apply(function(){a.imagenServicios="./images/servicios800.266fc9ef.jpg"}),600>=b&&a.$apply(function(){a.imagenServicios="./images/servicios600.bdc12871.jpg"})})})}]),angular.module("webApp").controller("PrivadoCtrl",["$scope","$rootScope","fire","$firebaseArray","$firebaseObject","$timeout","Map",function(a,b,c,d,e,f,g){f(function(){var f=new Firebase(c.clients+"/clients/"+b.algo),g=(d(f),e(f.child("user")));g.$bindTo(a,"client").then(function(){console.log(a.client.firstname),b.PAGE=a.client.firstname})}),$("#ingresar").closeModal(),b.btn=!0,$(document).ready(function(){$(".collapsible").collapsible({accordion:!1}),g.init();var b=$(window).width(),c=function(){b>1280&&(a.imagenPrivado="./images/privado1920.ef7107f5.jpg"),1280>=b&&(a.imagenPrivado="./images/privado1280.0aeb95a4.jpg"),800>=b&&(a.imagenPrivado="./images/privado800.d01e2980.jpg"),600>=b&&(a.imagenPrivado="./images/privado600.6385f3eb.jpg")};c(),$(window).resize(function(){b=$(window).width(),b>1280&&a.$apply(function(){a.imagenPrivado="./images/privado1920.ef7107f5.jpg"}),1280>=b&&a.$apply(function(){a.imagenPrivado="./images/privado1280.0aeb95a4.jpg"}),800>=b&&a.$apply(function(){a.imagenPrivado="./images/privado800.d01e2980.jpg"}),600>=b&&a.$apply(function(){a.imagenPrivado="./images/privado600.6385f3eb.jpg"})})}),a.cambiarFecha=function(a){"string"!=typeof a.aniversary&&(a.aniversary=a.aniversary.toJSON(),console.log(a.aniversary))},a.search=function(){a.apiError=!1,g.search(a.searchPlace).then(function(b){g.addMarker(b),a.client.boliches.a.address=b.name,a.client.boliches.a.latitude=b.geometry.location.lat(),a.client.boliches.a.longitude=b.geometry.location.lng()},function(b){a.apiError=!0,a.apiStatus=b})}}]),angular.module("webApp").factory("Authentication",["$rootScope","$firebaseAuth","fire","$location","$firebaseObject","$firebaseArray",function(a,b,c,d,e,f){var g=(new Firebase(c.clients+"/clients"),new Firebase(c.clients)),h=b(g);return h.$onAuth(function(b){if(b){var d=new Firebase(c.clients+"/clients/"+b.uid),f=e(d);a.currentUser=f,a.algo=f.$id}else a.currentUser=""}),{login:function(b){a.dataLoading=!0,h.$authWithPassword({email:b.email,password:b.password}).then(function(b){d.path("/privado"),a.algo=b.uid,a.dataLoading=!1})["catch"](function(b){"The specified user does not exist."===b.message?a.message="Usuario inexistente.":"The specified password is incorrect."===b.message?a.message="Contraseña incorrecta.":a.message=b.message,a.dataLoading=!1})},logout:function(){return d.path("/inicio"),h.$unauth()},requireAuth:function(){return h.$requireAuth()},register:function(b){a.dataLoading=!0,h.$createUser({email:b.email,password:b.password}).then(function(e){new Firebase(c.clients+"/clients").child(e.uid).set({user:{date:Firebase.ServerValue.TIMESTAMP,regUser:e.uid,client:b.client,firstname:b.firstname,lastname:b.lastname,email:b.email,status:"1"}});a.message="Registering "+b.firstname,h.$authWithPassword({email:b.email,password:b.password}).then(function(b){a.dataLoading=!1,d.path("/privado"),a.algo=b.uid})})["catch"](function(b){a.message=b.message})}}}]),angular.module("webApp").service("Map",["$q",function(a){this.init=function(){var a={center:new google.maps.LatLng(-34.6037389,-58.38157039999999),zoom:14,disableDefaultUI:!0,styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#00b5ff"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#006991"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#006991"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#00aeef"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#00b5ff"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]};this.map=new google.maps.Map(document.getElementById("map"),a),this.places=new google.maps.places.PlacesService(this.map)},this.search=function(b){var c=a.defer();return this.places.textSearch({query:b},function(a,b){"OK"===b?c.resolve(a[0]):c.reject(b)}),c.promise},this.addMarker=function(a){this.marker&&this.marker.setMap(null),this.marker=new google.maps.Marker({map:this.map,position:a.geometry.location,animation:google.maps.Animation.DROP,icon:"./images/pin3.3943ec43.png"}),this.map.setCenter(a.geometry.location)}}]),angular.module("webApp").filter("capitalize",function(){return function(a,b){var c=b?/([^\W_]+[^\s-]*) */g:/([^\W_]+[^\s-]*)/;return a?a.replace(c,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}):""}}),angular.module("webApp").run(["$templateCache",function(a){a.put("views/clientes.html",'<div class="row" style="overflow-x:hidden;margin: 0; background: white"> <img ng-src="{{imagenClientes}}" alt="" width="100%"> </div> <div class="row" style="background:white;padding: 50px;margin: 0px"> <div class="container"> <div class="col s12"> <h2 class="centrar-div">Registrarse</h2> <p class="centrar-div" style="font-size: 17px">Todos los campos son obligatorios.</p> <div class="mensaje"> <div id="mensaje" class="center-align red-text">{{message}}</div> <div ng-show="dataLoading" class="center-align texto-principal">Conectando...</div> </div> </div> <form name="formularioCliente" novalidate> <div class="col s12 m12 l2"> <div class="input-field"> <p style="color:rgba(0,0,0,.5);font-size:14px">Seleccione una opción.</p> <p> <input ng-model="client.client" type="checkbox" id="disco" ng-true-value="\'disco\'" ng-false-value="\'\'"> <label for="disco">Disco</label> </p> <p> <input ng-model="client.client" type="checkbox" id="dj" ng-true-value="\'dj\'" ng-false-value="\'\'"> <label for="dj">Dj</label> </p> </div> </div> <div class="col s12 m12 l5"> <div class="input-field"> <input id="email" type="email" class="validate" ng-model="client.email" required> <label data-error="invalido" for="email">Email</label> </div> <div class="input-field"> <input id="firstName" type="text" ng-model="client.firstname" required> <label for="firstName">Nombre</label> </div> </div> <div class="col s12 m12 l5"> <div class="input-field"> <input id="password" type="password" ng-model="client.password" required> <label for="password">Contraseña</label> </div> <div class="input-field"> <input id="lastName" type="text" ng-model="client.lastname" required> <label for="lastName">Apellido</label> </div> </div> <div class="col s12 m5 offset-m7"> <div class="input-field"> <button class="btn waves-effect waves-light btnFull bg-principal" ng-click="register(client)" ng-disabled="formularioCliente.$invalid">Registrarse </button> </div> </div> </form> </div> </div> <div class="parallax-container"> <div class="parallax"><img src="./images/gente.e51515e2.jpg"></div> </div>'),a.put("views/inicio.html",'<div class="row" style="overflow-x:hidden"> <img ng-src="{{imagenInicio}}" alt="" width="100%"> <div class="propaContenedor"> <p class="propa-titulo">Encontra donde ir con amigos</p> <p class="propa-texto">Desde tu teléfono te damos todas las opciones</p> <p class="propa-texto">y te mostramos como llegar</p> <a class="waves-effect waves-light btn-large blue">Registrate</a> </div> </div> <div class="row"> <div class="container"> <div class="logosContenedor"> <img src="./images/logos/sunset.ce578a39.png"> <img src="./images/logos/pinar.5fdec949.png"> <img src="./images/logos/big-one.b2787db0.png"> <img src="./images/logos/club21.4a1d22d9.png"> <img src="./images/logos/asia-de-cuba.8c29d740.png"> <img src="./images/logos/caix.862f7bb9.png"> <img src="./images/logos/jesse-james.c4158d44.png"> <img src="./images/logos/el-bosque.879c1f31.png"> </div> </div> </div> <div class="row st1"> <div class="container"> <div class="col s12 m7"> <div class="texto"> <h2>Donde vamos</h2> <h5>Te mostramos los boliches que esten </h5> <h5>mas cerca de vos</h5> <h5>Y podes ver la lista</h5> <h5>o podes verlos en el mapa</h5> </div> </div> <div class="col s12 m5"> <img src="./images/st1.12d87587.png"> </div> <i class="ion-chatboxes icono-fondo"></i> </div> </div> <div class="row bg-blanco banightonFondo"> <div class="container"> <div class="section wow" ng-class="{\'fadeInRight\': cambio, \'fadeIn\': !cambio }" data-wow-duration="1s" data-wow-delay="1s"> <div class="section centrar-texto"> <h5>Todo lo que necesitas</h5> <p class="texto-gris">Para que la gente este mas informada.</p> </div> </div> <div class="row"> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/pushzonales.5d579e72.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Push zonales<i class="ion-more right"></i></span> <p><a href="#">Ver detallado</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Push zonales<i class="ion-close-round right"></i></span> <p>Enviar mensajes zonales con eventos promos y informacion.</p> </div> </div> </div> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="1.5s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/mailing.b0b70135.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Mailing<i class="ion-more right"></i></span> <p><a href="#">Ver detallado</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Mailing<i class="ion-close-round right"></i></span> <p>Creamos campañas de mailing semanales con toda la informacion destacada.</p> </div> </div> </div> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="2s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/appservicios.23feac65.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">APP Clientes<i class="ion-more right"></i></span> <p><a href="#">Ver detallado</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">APP Clientes<i class="ion-close-round right"></i></span> <p>Podes tener en tu celular una APP para podes administrar tus servicion de la forma que mas te guste.</p> </div> </div> </div> </div> </div> </div>'),a.put("views/privado.html",'<div class="row" style="overflow-x:hidden;margin: 0; background: white"> <img ng-src="{{imagenPrivado}}" alt=""> </div> <div class="row" style="background: white"> <div class="container"> <div class="col s12 m12 l4"> <div class="section"> <h5>Datos Principales</h5> <p>Tus datos principales</p> </div> </div> <div class="col s12 m12 l8"> <ul class="collapsible popout" data-collapsible="accordion"> <li> <div class="collapsible-header"><i class="ion-email"></i>Cambiar email</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="email" type="email" ng-model="client.email" ng-change="client.$save()" disabled required> <label class="active" for="email">Email</label> </div> </div> </div> </li> <li> <div class="collapsible-header"><i class="ion-key"></i>Cambiar contraseña</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="password" type="password" ng-model="client.password" ng-change="client.$save()" disabled required> <label class="active" for="password">Contraseña</label> </div> </div> </div> </li> <li> <div class="collapsible-header"><i class="ion-person"></i>{{client.firstname}} {{client.lastname}}</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="firstName" type="text" ng-model="client.firstname" ng-change="client.$save()"> <label ng-class="{active: client.firstname}" for="firstName">Nombre</label> </div> <div class="input-field"> <input id="lastName" type="text" ng-model="client.lastname" ng-change="client.$save()"> <label ng-class="{active: client.lastname}" for="lastName">Apellido</label> </div> </div> </div> </li> </ul> </div> <div class="col s12 m12 l4"> <div class="section"> <h5>Mas discos</h5> <p>Aca seleccionas para agregar mas discos</p> </div> </div> <div class="col s12 m12 l6" style="min-height: 150px"> <div class="container"> <div class="input-field"> </div> </div> </div> <div class="col s12 m12 l4"> <div class="section"> <h5>Datos Especificos</h5> <p>Datos del Boliche</p> <div id="map" class="z-depth-2"></div> </div> </div> <div class="col s12 m12 l8"> <ul class="collapsible popout" data-collapsible="accordion"> <li> <div class="collapsible-header"> <i class="ion-android-done-all"></i>{{client.client}} </div> <div class="collapsible-body"> </div> </li> <li> <div class="collapsible-header"> <i class="ion-disc"></i>{{client.boliches.a.bolicheName}} <span ng-show="client.boliches.a.bolicheName">{{client.boliches.a.bolicheName}}</span> <span ng-show="!client.boliches.a.bolicheName">Ingrese nombre disco</span> </div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="bolicheName" type="text" ng-model="client.boliches.a.bolicheName"> <label ng-class="{active: client.boliches.a.bolicheName}" for="bolicheName">Disco Nombre</label> </div> </div> </div> </li> <li> <div class="collapsible-header"> <i class="ion-ios-location"></i> <span ng-show="client.boliches.a.address">{{client.boliches.a.address}}</span> <span ng-show="!client.boliches.a.address">Ingrese una dirección</span> </div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="place" type="text" ng-model="searchPlace"> <label for="place">Buscar dirección</label> <a class="waves-effect waves-light btn btnFull" ng-click="search()">Buscar</a> </div> <div class="input-field"> <div class="section"> <h5>{{client.boliches.a.address}}</h5> <p ng-show="client.boliches.a.address">Si la direccion es correcta ya quedo guardado,&nbsp; en caso contrario genere una nueva busqueda.</p> <p ng-show="!client.boliches.a.address">Busque su direccion.</p> </div> </div> <div class="input-field hide"> <input id="address" type="text" data-ng-model="client.boliches.a.address" disabled> <label class="active" for="address">Dirección</label> </div> <div class="input-field hide"> <input id="latitude" type="text" ng-value="latitude" data-ng-model="client.boliches.a.latitude" disabled> <label class="active" for="latitude">Latitud</label> </div> <div class="input-field hide"> <input id="longitude" type="text" ng-value="longitude" data-ng-model="client.boliches.a.longitude" disabled> <label class="active" for="longitude">Longitud</label> </div> </div> </div> </li> <li> <div class="collapsible-header"> <i class="ion-android-call"></i> <span ng-show="client.boliches.a.homePhone">{{client.boliches.a.homePhone}}</span> <span ng-show="!client.boliches.a.homePhone">Ingrese un telefono</span> </div> <div class="collapsible-body"> </div> </li> <li> <div class="collapsible-header"> <i class="ion-android-phone-portrait"></i> <span ng-show="client.boliches.a.cellPhone">{{client.boliches.a.cellPhone}}</span> <span ng-show="!client.boliches.a.cellPhone">Ingrese un celular</span> </div> <div class="collapsible-body"> </div> </li> <li> <div class="collapsible-header"> <i class="ion-music-note"></i> <span ng-show="client.boliches.a.music.a">{{client.boliches.a.music.a}}</span> <span ng-show="!client.boliches.a.music.a">Ingrese estilo de musica</span> </div> <div class="collapsible-body"> </div> </li> <li> <div class="collapsible-header"> <i class="ion-calendar"></i> <span ng-show="client.boliches.a.aniversary">{{client.aniversary}}</span> <span ng-show="!client.boliches.a.aniversary">Ingrese su aniversario</span> </div> <div class="collapsible-body"> <div class="container" style="margin-bottom: 20px"> <div class="input-field"> <input placeholder="Ejemplo dd-mm-aaaa" id="aniversary" type="text" ng-model="client.boliches.a.aniversary"> <label class="active" for="aniversary">Aniversario</label> </div> </div> </div> </li> <li> <div class="collapsible-header"> <i class="ion-android-globe"></i> <span ng-show="client.boliches.a.website">{{client.website}}</span> <span ng-show="!client.boliches.a.website">Ingrese su website</span> </div> <div class="collapsible-body"> <div class="container" style="margin-bottom: 20px"> <div class="input-field"> <input placeholder="Ejemplo http://ejemplo.com" id="website" type="text" ng-model="client.boliches.a.website"> <label class="active" for="website">Website</label> </div> </div> </div> </li> </ul> </div> <div style="clear: both"></div> <div class="col s12 m12 l4"> <div class="section"> <h5>Celular</h5> <p>Aca va a estar el celular mostrando como quedaria todo</p> </div> </div> <div class="col s12 m12 l8"> <ul class="collapsible popout" data-collapsible="accordion"> <li> <div class="collapsible-header"><i class="ion-image"></i>Logo</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="logo" type="text" disabled required> <label class="active" for="logo">Logo</label> </div> </div> </div> </li> <li> <div class="collapsible-header"><i class="ion-document-text"></i>Texto logo</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="textLogo" type="text" disabled required> <label class="active" for="textLogo">Texto logo</label> </div> </div> </div> </li> <li> <div class="collapsible-header"><i class="ion-image"></i>Imagen</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="image" type="text" disabled required> <label class="active" for="image">Imagen</label> </div> </div> </div> </li> <li> <div class="collapsible-header"><i class="ion-document-text"></i>Texto imagen</div> <div class="collapsible-body"> <div class="container"> <div class="input-field"> <input id="textImage" type="text" disabled required> <label class="active" for="textImage">Texto imagen</label> </div> </div> </div> </li> </ul> </div> </div> </div>'),a.put("views/servicios.html",'<div class="row" style="overflow-x:hidden"> <img ng-src="{{imagenServicios}}" alt="" width="100%"> </div> <div class="row" style="height:800px"></div>')}]);