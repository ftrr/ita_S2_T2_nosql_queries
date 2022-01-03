db.restaurants.find( {} );
db.restaurants.find( {restaurant_id:1,borough:1,cuisine:1} );
db.restaurants.find( {restaurant_id:1,borough:1,cuisine:1, _id:0} );
db.restaurants.find( { _id:0, restaurant_id:1, borough:1, "address.zipcode":1 });
db.restaurants.find({ borough:"Bronx" });
db.restaurants.find({ borough:"Bronx" }).limit(5);
db.restaurants.find({ borough:"Bronx" }).limit(5).skip(5);
db.restaurants.find({'grades.score': {$gt:90}});
db.restaurants.find({ $and:[{'grades.score': {$gt:80}},{'grades.score': {$lt:100}}] });
db.restaurants.find({'address.coord.0': {$lt:-95.754168}});
db.restaurants.find({ $and:[{'grades.score': {$gt:70}},{'cuisine':{$not:/American/}},{'address.coord.0': {$lt:-65.754168}}] });
//Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American' i va aconseguir un marcador més que 70 i localitzat en la longitud menys que -65.754168. Nota : Fes aquesta consulta sense utilitzar $and operador
db.restaurants.find({ $and:[{'cuisine':{$not:/American/}},{'grades.grade': 'A'},{'borough':{$not:/Brooklyn/}}  ]}).sort({'cuisine':-1}).pretty();
db.restaurants.find({ 'name': /^Wil/},{restaurant_id:1,_id:0,borough:1,name:1,cuisine:1} );
db.restaurants.find({ 'name': /ces$/},{restaurant_id:1,_id:0,borough:1,name:1,cuisine:1} );
db.restaurants.find({ 'name': /Reg/},{restaurant_id:1,_id:0,borough:1,name:1,cuisine:1} );
db.restaurants.find({ $and:[{ $or: [ {'cuisine':/American/},{'cuisine':/Chinese/} ] },{'borough': 'Bronx'}  ]}).pretty();
db.restaurants.find({borough: { $in : [ "Brooklyn", "Bronx", 'Staten Island', 'Queens' ] } },{restaurant_id:1,_id:0,borough:1,name:1,cuisine:1} );
db.restaurants.find({borough: { $nin : [ "Brooklyn", "Bronx", 'Staten Island', 'Queens' ] } },{restaurant_id:1,_id:0,borough:1,name:1,cuisine:1} );
db.restaurants.find( {'grades.score': {$lte:10}}, {restaurant_id:1,_id:0,borough:1,name:1,cuisine:1});
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen peix excepte 'American' i 'Chinees' o el name del restaurant comença amb lletres 'Wil'
db.restaurants.find({ $and:[{'grades.score':11},{'grades.grade':'A'},{'grades.date':new Date("2014-08-11T00:00:00Z")}]},{restaurant_id:1,_id:0,name:1,grades:1});
db.restaurants.find({ $and:[{'grades.1.score':9},{'grades.1.grade':'A'},{'grades.1.date':new Date("2014-08-11T00:00:00Z")}]},{restaurant_id:1,_id:0,name:1,grades:1});
db.restaurants.find({$and:[{'address.coord.1':{$gt:42}},{'address.coord.1':{$lte:52}}]},{name:1,"address.street":1,"address.coord":1});
db.restaurants.find({}).sort({name:1});
db.restaurants.find({}).sort({name:-1});
db.restaurants.find({},{cuisine:1,borough:1}).sort({name:-1});
db.restaurants.find({"address.street":{$exists:false} })
//Escriu una consulta quin seleccionarà tots el documents en la col·lecció de restaurants on el valor del camp coord és Double
//Escriu una consulta quin seleccionarà el restaurant_id, name i grade per a aquells restaurants quins retorns 0 com a resta després de dividir el marcador per 7
db.restaurants.find({name:/mon/},{name:1,borough:1,"address.coord":1,cuisine:1});
db.restaurants.find({name:/^Man/},{name:1,borough:1,"address.coord":1,cuisine:1});