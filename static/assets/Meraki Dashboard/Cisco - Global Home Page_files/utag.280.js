//tealium universal tag - utag.280 ut4.0.201609021647, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"adello_uuid":"uuid","adello_tagno":"tagno"};u.extend=[function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'www.cisco.com/web/IN/offers/en/campus-switching/smarter-security/index.html?COUNTRY_SITE=IN&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913667':'1'},{'www.cisco.com/web/IN/offers/en/campus-switching/faster-wi-fi/index.html?COUNTRY_SITE=IN&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913667':'2'},{'www.cisco.com/web/IN/offers/en/campus-switching/better-network/index.html?COUNTRY_SITE=IN&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913667':'3'},{'www.cisco.com/web/IN/offers/en/campus-switching/index.html?COUNTRY_SITE=IN&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913667':'4'},{'www.cisco.com/web/ANZ/offers/en/campus-switching/smarter-security/index.html?COUNTRY_SITE=ANZ&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913631':'5'},{'www.cisco.com/web/ANZ/offers/en/campus-switching/faster-wi-fi/index.html?COUNTRY_SITE=ANZ&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913631':'6'},{'www.cisco.com/web/ANZ/offers/en/campus-switching/better-network/index.html?COUNTRY_SITE=ANZ&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913631':'7'},{'www.cisco.com/web/ANZ/offers/en/campus-switching/index.html?COUNTRY_SITE=ANZ&REFERRING_SITE=Adello&CAMPAIGN=EN04&CREATIVE=3rdPartyBanner&POSITION=&KeyCode=000913631':'8'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['adello_tagno_lookup']=c[e][f];m=true};};if(m)break};if(!m)b['adello_tagno_lookup']='';},function(a,b){try{if(typeof b['adello_tagno_lookup']!='undefined'&&b['adello_tagno_lookup']!=''){b['adello_uuid']='c4ce00dd-bd75-41e7-ba48-a4091bf7f79e';b['adello_tagno']=b['adello_tagno_lookup']}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"kvp_delim":"=","qsp_delim":"&","base_url":"//wt.adctrl.com/p?","base_url2":"//wt.adctrl.com/wt2.js"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];c.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]));}}}
var pixel=document.createElement('img');pixel.height=1;pixel.width=1;pixel.style.display='none';pixel.src=document.location.protocol+u.data.base_url+c.join(u.data.qsp_delim);document.body.appendChild(pixel);u.loader_cb=function(){u.initialized=true;if(u.data.tagno&&u.data.uuid){adCtrlTracking(u.data.uuid,u.data.tagno);}
};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url2,"cb":u.loader_cb,"loc":"script","id":'utag_280'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("280","cisco.cdc");}catch(error){utag.DB(error);}
