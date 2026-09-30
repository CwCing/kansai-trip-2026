(function(){
  const L=window.L;
  const P={
    kixT1:{n:'关西国际机场 T1',j:'関西国際空港 第1ターミナル',lat:34.4343322,lng:135.2441973},
    kixStation:{n:'关西机场站',j:'関西空港駅',lat:34.435897,lng:135.2438775},
    kyotoStation:{n:'京都站',j:'京都駅',lat:34.985849,lng:135.7587667},
    kyotoHotel:{n:'京都酒店',j:'insomnia KYOTO OIKE',lat:35.0113884,lng:135.7581875},
    kinkakuji:{n:'金阁寺',j:'金閣寺',lat:35.0395293,lng:135.7295373},
    daisenin:{n:'大仙院',j:'大徳寺 大仙院',lat:35.044516,lng:135.7458129},
    kyocera:{n:'京都市京瓷美术馆',j:'京都市京セラ美術館',lat:35.013564,lng:135.783293},
    tenryuji:{n:'天龙寺・篩月',j:'天龍寺・篩月',lat:35.0157032,lng:135.6745031},
    jrSagaArashiyama:{n:'JR 嵯峨岚山站',j:'JR 嵯峨嵐山駅',lat:35.01916,lng:135.68118},
    otagi:{n:'爱宕念佛寺',j:'愛宕念仏寺',lat:35.02796,lng:135.66309},
    toriimoto:{n:'嵯峨鸟居本',j:'嵯峨鳥居本伝統的建造物群保存地区',lat:35.02544,lng:135.66612},
    gioji:{n:'祇王寺',j:'祇王寺',lat:35.02247,lng:135.66874},
    jojakkoji:{n:'常寂光寺',j:'常寂光寺',lat:35.01975,lng:135.66953},
    mikami:{n:'御发神社',j:'御髪神社',lat:35.01777,lng:135.67058},
    bamboo:{n:'岚山竹林小径',j:'嵐山 竹林の小径',lat:35.0167419,lng:135.6711482},
    kijuro:{n:'岚山喜重郎',j:'嵐山 喜重郎',lat:35.01518,lng:135.67577},
    togetsu:{n:'渡月桥',j:'渡月橋',lat:35.0136547,lng:135.6778518},
    hankyuArashiyama:{n:'阪急岚山站',j:'阪急嵐山駅',lat:35.0095414,lng:135.680788},
    kyotoBal:{n:'京都 BAL',j:'京都 BAL',lat:35.0067899,lng:135.7695794},
    fushimi:{n:'伏见稻荷大社',j:'伏見稲荷大社',lat:34.9675192,lng:135.7797101},
    ginkakuji:{n:'银阁寺',j:'銀閣寺',lat:35.0268996,lng:135.7983714},
    philosopher:{n:'哲学之道',j:'哲学の道',lat:35.0194099,lng:135.7940965},
    nanzenji:{n:'南禅寺',j:'南禅寺',lat:35.0115254,lng:135.7927213},
    heian:{n:'平安神宫',j:'平安神宮',lat:35.0160683,lng:135.7828961},
    osakaHotel:{n:'大阪酒店',j:'大阪エクセルホテル東急',lat:34.6804608,lng:135.500144},
    delStyle:{n:'DEL style 大阪心斋桥',j:'DEL style 大阪心斎橋 by Daiwa Roynet Hotel',lat:34.677671,lng:135.50094},
    osakaCastle:{n:'大阪城',j:'大阪城',lat:34.6873735,lng:135.5258555},
    osakaStation:{n:'JR 大阪站',j:'JR 大阪駅',lat:34.702485,lng:135.495951},
    lucua:{n:'LUCUA 大阪',j:'LUCUA osaka',lat:34.7032689,lng:135.4962444},
    grandFront:{n:'Grand Front 大阪',j:'グランフロント大阪',lat:34.7039643,lng:135.4947447},
    kindal:{n:'Kindal 梅田店',j:'カインドオル梅田店',lat:34.7076229,lng:135.4990846},
    hep:{n:'HEP FIVE',j:'HEP FIVE',lat:34.7040592,lng:135.500379},
    sannomiya:{n:'JR 三宫站',j:'JR 三ノ宮駅',lat:34.6933228,lng:135.1952852},
    kazamidori:{n:'风见鸡馆',j:'風見鶏の館',lat:34.7013855,lng:135.189511},
    nishimura:{n:'北野坂西村咖啡',j:'北野坂にしむら珈琲店',lat:34.6983344,lng:135.1910854},
    meriken:{n:'美利坚公园',j:'メリケンパーク',lat:34.6833086,lng:135.1893213},
    bue:{n:'Yakiniku bue',j:'焼肉 bue',lat:34.7014716,lng:135.1944059},
    osakaNamba:{n:'大阪难波站',j:'大阪難波駅',lat:34.667118,lng:135.500748},
    nankaiNamba:{n:'南海难波站',j:'南海なんば駅',lat:34.6629331,lng:135.5022953},
    kintetsuNara:{n:'近铁奈良站',j:'近鉄奈良駅',lat:34.6842485,lng:135.8275275},
    todaiji:{n:'东大寺',j:'東大寺',lat:34.6889851,lng:135.8398158},
    jrNara:{n:'JR 奈良站',j:'JR 奈良駅',lat:34.6808126,lng:135.8189522},
    jrUji:{n:'JR 宇治站',j:'JR 宇治駅',lat:34.8904002,lng:135.8006967},
    byodoin:{n:'平等院',j:'平等院',lat:34.8892908,lng:135.8076783}
  };
  function s(a,b,kind,mode,time,note){return {a:a,b:b,kind:kind,mode:mode,time:time,note:note};}
  const DAYS=[
    {date:'10.02',week:'周五',label:'10.02',title:'机场 → 京都入住',color:'#8f5e9d',panel:0,points:[P.kixT1,P.kixStation,P.kyotoStation,P.kyotoHotel],segments:[
      s(P.kixT1,P.kixStation,'walk','步行','10–15 分钟','T1 连通桥到铁路站'),s(P.kixStation,P.kyotoStation,'rail','JR HARUKA','80–90 分钟','跨城直达，优先推荐'),s(P.kyotoStation,P.kyotoHotel,'rail','地铁＋步行','20–30 分钟','大箱多可改两辆出租车')]},
    {date:'10.03',week:'周六',label:'10.03',title:'京都北区 → 冈崎',color:'#c7683c',panel:1,points:[P.kyotoHotel,P.kinkakuji,P.daisenin,P.kyocera,P.kyotoHotel],segments:[
      s(P.kyotoHotel,P.kinkakuji,'rail','地铁＋巴士','35–45 分钟','4 人想省力可直接打车'),s(P.kinkakuji,P.daisenin,'rail','巴士＋步行','12–20 分钟','当天最短公共交通段'),s(P.daisenin,P.kyocera,'taxi','出租车','20–30 分钟','公交约 47 分钟，明确建议打车'),s(P.kyocera,P.kyotoHotel,'rail','步行＋地铁','25–35 分钟','东山站乘东西线')]},
    {date:'10.04',week:'周日',label:'10.04',title:'奥嵯峨下坡线 → 京都 BAL',color:'#2f7d68',panel:2,points:[P.kyotoHotel,P.jrSagaArashiyama,P.otagi,P.toriimoto,P.gioji,P.jojakkoji,P.mikami,P.bamboo,P.kijuro,P.togetsu,P.hankyuArashiyama,P.kyotoBal,P.kyotoHotel],segments:[
      s(P.kyotoHotel,P.jrSagaArashiyama,'rail','地铁＋JR','40–50 分钟','乌丸御池经二条换 JR 嵯峨野线'),s(P.jrSagaArashiyama,P.otagi,'taxi','出租车优先','10–15 分钟','4 人合乘上山，避免等候低频巴士'),s(P.otagi,P.toriimoto,'walk','下坡步行','8–12 分钟','从奥嵯峨最高点开始向南'),s(P.toriimoto,P.gioji,'walk','步行','18–25 分钟','沿历史街区下行'),s(P.gioji,P.jojakkoji,'walk','步行','10–15 分钟','祇王寺无游客厕所'),s(P.jojakkoji,P.mikami,'walk','步行','10–15 分钟','常寂光寺内部另有台阶'),s(P.mikami,P.bamboo,'walk','步行','3–8 分钟','路过小火车站但不乘车'),s(P.bamboo,P.kijuro,'walk','步行','12–18 分钟','竹林只走核心短段'),s(P.kijuro,P.togetsu,'walk','步行','8–12 分钟','午餐后前往桂川'),s(P.togetsu,P.hankyuArashiyama,'walk','步行','10–15 分钟','过桥到阪急岚山站'),s(P.hankyuArashiyama,P.kyotoBal,'rail','阪急＋步行','35–45 分钟','桂站换乘到京都河原町'),s(P.kyotoBal,P.kyotoHotel,'taxi','步行／出租车','7–25 分钟','购物袋多时短程打车')]},
    {date:'10.05',week:'周一',label:'10.05',title:'京都南区＋东区 → 大阪',color:'#355e8d',panel:3,points:[P.kyotoHotel,P.fushimi,P.ginkakuji,P.philosopher,P.nanzenji,P.heian,P.kyotoHotel,P.kyotoStation,P.osakaHotel],segments:[
      s(P.kyotoHotel,P.fushimi,'rail','地铁＋JR','35–45 分钟','京都站换奈良线'),s(P.fushimi,P.ginkakuji,'taxi','出租车优先','30–40 分钟','跨京都南北；公交约 47–60 分钟'),s(P.ginkakuji,P.philosopher,'walk','步行','10–15 分钟','进入哲学之道北段'),s(P.philosopher,P.nanzenji,'walk','观景步行','35–45 分钟','当天主要步行段'),s(P.nanzenji,P.heian,'walk','步行','16–20 分钟','短程顺路'),s(P.heian,P.kyotoHotel,'rail','步行＋地铁','30–40 分钟','东山站回乌丸御池'),s(P.kyotoHotel,P.kyotoStation,'rail','地铁／出租车','15–25 分钟','取行李后前往京都站'),s(P.kyotoStation,P.osakaHotel,'rail','JR 新快速＋地铁','80–100 分钟','晚间换城，预留站内步行')]},
    {date:'10.06',week:'周二',label:'10.06',title:'大阪城 → 梅田购物',color:'#b7791f',panel:4,points:[P.osakaHotel,P.osakaCastle,P.lucua,P.grandFront,P.kindal,P.hep,P.osakaHotel],segments:[
      s(P.osakaHotel,P.osakaCastle,'rail','地铁＋步行','约 26 分钟','中央线到森之宫'),s(P.osakaCastle,P.lucua,'rail','步行＋JR','约 33 分钟','大阪城公园站到大阪站'),s(P.lucua,P.grandFront,'walk','室内步行','5–10 分钟','北侧连廊衔接'),s(P.grandFront,P.kindal,'walk','步行','12–18 分钟','前往茶屋町古着区'),s(P.kindal,P.hep,'walk','步行','8–12 分钟','向南前往 HEP FIVE'),s(P.hep,P.osakaHotel,'rail','地铁','约 16 分钟','梅田到本町')]},
    {date:'10.07',week:'周三',label:'10.07',title:'大阪 ↔ 神户一日往返',color:'#366b84',panel:5,points:[P.osakaHotel,P.sannomiya,P.kazamidori,P.nishimura,P.meriken,P.bue,P.osakaHotel],segments:[
      s(P.osakaHotel,P.sannomiya,'rail','地铁＋JR 新快速','50–65 分钟','不需要坐新干线'),s(P.sannomiya,P.kazamidori,'taxi','巴士／出租车','10–30 分钟','上坡优先短程打车'),s(P.kazamidori,P.nishimura,'walk','步行','10–15 分钟','沿北野坂下坡'),s(P.nishimura,P.meriken,'taxi','出租车优先','15–25 分钟','公交约 35–50 分钟'),s(P.meriken,P.bue,'taxi','出租车','15–25 分钟','18:00 订位，17:05 左右离港'),s(P.bue,P.osakaHotel,'rail','步行＋JR＋地铁','60–80 分钟','晚餐后直接回大阪')]},
    {date:'10.08',week:'周四',label:'10.08 · tyw',team:'tyw 团队',title:'大阪 → 关西机场',color:'#8f5e9d',panel:6,points:[P.osakaHotel,P.nankaiNamba,P.kixStation,P.kixT1],segments:[
      s(P.osakaHotel,P.nankaiNamba,'rail','地铁＋步行','25–35 分钟','大箱多可打车到南海站'),s(P.nankaiNamba,P.kixStation,'airport','南海 Rapi:t','35–45 分钟','机场急行约 45–50 分钟'),s(P.kixStation,P.kixT1,'walk','步行','10–15 分钟','连通桥进入 T1')]},
    {date:'10.08',week:'周四',label:'10.08 · CwC',team:'CwC 团队',title:'大阪 → 奈良 → 宇治 → 大阪',color:'#2f7d68',panel:6,points:[P.osakaHotel,P.delStyle,P.osakaNamba,P.kintetsuNara,P.todaiji,P.jrNara,P.jrUji,P.byodoin,P.jrUji,P.kyotoStation,P.osakaStation,P.delStyle],segments:[
      s(P.osakaHotel,P.delStyle,'walk','步行／短程出租车','5–10 分钟','两家酒店距离很近，先寄存行李并确认晚间入住'),s(P.delStyle,P.osakaNamba,'rail','地铁／步行','12–22 分钟','心斋桥到难波，步行连接大阪难波站'),s(P.osakaNamba,P.kintetsuNara,'rail','近铁快速急行','约 35–45 分钟','无需换乘，优先选快速急行'),s(P.kintetsuNara,P.todaiji,'walk','步行／市巴士','20–30 分钟','穿过奈良公园；想省脚力可坐巴士'),s(P.todaiji,P.jrNara,'taxi','市巴士／出租车','15–25 分钟','下午转场，出租车更稳'),s(P.jrNara,P.jrUji,'rail','JR 奈良线','约 30–45 分钟','みやこ路快速优先'),s(P.jrUji,P.byodoin,'walk','步行','约 10 分钟','经宇治桥通前往平等院'),s(P.byodoin,P.jrUji,'walk','步行','约 10 分钟','表参道散步后回站'),s(P.jrUji,P.kyotoStation,'rail','JR 奈良线','约 20–30 分钟','快速列车优先'),s(P.kyotoStation,P.osakaStation,'rail','JR 新快速','约 30 分钟','避免绕回奈良'),s(P.osakaStation,P.delStyle,'rail','地铁御堂筋线＋步行','约 20–30 分钟','梅田到心斋桥后步行入住')]},
    {date:'10.09',week:'周五',label:'10.09',title:'心斋桥 → 关西机场返程',color:'#d75239',panel:7,points:[P.delStyle,P.nankaiNamba,P.kixStation,P.kixT1],segments:[
      s(P.delStyle,P.nankaiNamba,'taxi','出租车／地铁','15–25 分钟','带大箱优先出租车，避免难波站换乘步行'),s(P.nankaiNamba,P.kixStation,'airport','南海 Rapi:t','35–45 分钟','机场急行约 45–50 分钟'),s(P.kixStation,P.kixT1,'walk','步行','10–15 分钟','目标 12:45–13:00 抵达 T1')]}
  ];
  function rad(v){return v*Math.PI/180;}
  function km(a,b){const R=6371,dLat=rad(b.lat-a.lat),dLng=rad(b.lng-a.lng);const q=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLng/2)*Math.sin(dLng/2);return R*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));}
  function total(day){return day.segments.reduce(function(sum,x){return sum+km(x.a,x.b);},0);}
  function gmapsPlace(p){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.j+' '+p.lat+','+p.lng);}
  function gmapsRoute(seg){const tm=seg.kind==='walk'?'walking':seg.kind==='taxi'?'driving':'transit';return 'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(seg.a.j)+'&destination='+encodeURIComponent(seg.b.j)+'&travelmode='+tm;}
  function pinIcon(i,all){return L.divIcon({className:'',html:'<span class="map-pin'+(all?' multi':'')+'">'+i+'</span>',iconSize:[27,27],iconAnchor:[14,14],popupAnchor:[0,-13]});}
  let map;
  const layers=[];
  function clearMap(){layers.forEach(function(x){map.removeLayer(x);});layers.length=0;}
  function addLayer(x){x.addTo(map);layers.push(x);return x;}
  function popup(p,subtitle){return '<div class="map-popup"><h3>'+p.n+'</h3><p>'+p.j+(subtitle?'<br>'+subtitle:'')+'<br>'+p.lat.toFixed(5)+', '+p.lng.toFixed(5)+'</p><a href="'+gmapsPlace(p)+'" target="_blank" rel="noopener noreferrer">在 Google Maps 中核对 ↗</a></div>';}
  function styleFor(kind){return {rail:{color:'#355e8d',weight:4},walk:{color:'#2f7d68',weight:4,dashArray:'6 7'},taxi:{color:'#c7683c',weight:4,dashArray:'10 6'},airport:{color:'#8f5e9d',weight:5}}[kind];}
  function renderDay(index){
    const day=DAYS[index],bounds=[];clearMap();
    day.segments.forEach(function(seg){addLayer(L.polyline([[seg.a.lat,seg.a.lng],[seg.b.lat,seg.b.lng]],Object.assign({opacity:.86,lineCap:'round'},styleFor(seg.kind))));});
    day.points.forEach(function(p,i){bounds.push([p.lat,p.lng]);addLayer(L.marker([p.lat,p.lng],{icon:pinIcon(i+1,false)}).bindPopup(popup(p,(i+1)+' / '+day.points.length)));});
    map.fitBounds(bounds,{padding:[30,30],maxZoom:14});
    document.querySelectorAll('.map-day').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-map-day')===String(index));});
    updatePanel(day);
  }
  function renderAll(){
    clearMap();const bounds=[];
    DAYS.forEach(function(day){const line=day.points.map(function(p){bounds.push([p.lat,p.lng]);return [p.lat,p.lng];});addLayer(L.polyline(line,{color:day.color,weight:3,opacity:.62,dashArray:'8 6'}));});
    [P.kixT1,P.kyotoHotel,P.osakaHotel,P.delStyle,P.sannomiya,P.kintetsuNara,P.byodoin].forEach(function(p,i){addLayer(L.marker([p.lat,p.lng],{icon:pinIcon(i+1,true)}).bindPopup(popup(p,'全程枢纽')));});
    map.fitBounds(bounds,{padding:[28,28]});
    document.querySelectorAll('.map-day').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-map-day')==='all');});
    const sum=DAYS.reduce(function(a,d){return a+total(d);},0);
    document.getElementById('route-title').textContent='关西八日全程总览';
    document.getElementById('route-subtitle').textContent='10.08 已拆为 tyw 与 CwC 两条路线；点击标签分别查看。';
    document.getElementById('route-total').textContent=Math.round(sum)+' km';
    document.getElementById('route-segments').innerHTML=DAYS.map(function(d,i){return '<article class="segment" data-kind="rail"><i class="segment-line"></i><div class="segment-main"><strong>'+(d.team?d.team+' · ':'')+d.label+' · '+d.title+'</strong><span>'+d.segments.length+' 段移动 · '+d.points.length+' 个定位点</span></div><div class="segment-side"><b>'+total(d).toFixed(1)+' km</b><a href="#day-'+d.panel+'" data-jump-day="'+i+'">查看路线</a></div></article>';}).join('');
    bindJumpLinks();
  }
  function updatePanel(day){
    document.getElementById('route-title').textContent=day.date+' '+day.week+' · '+(day.team?day.team+' · ':'')+day.title;
    document.getElementById('route-subtitle').textContent='点位按行程顺序编号；地图线用于比较空间距离。';
    document.getElementById('route-total').textContent=total(day).toFixed(1)+' km';
    document.getElementById('route-segments').innerHTML=day.segments.map(function(x,i){return '<article class="segment" data-kind="'+x.kind+'"><i class="segment-line"></i><div class="segment-main"><strong>'+(i+1)+'. '+x.a.n+' → '+x.b.n+'</strong><span>'+x.mode+' · '+x.time+' · '+x.note+'</span></div><div class="segment-side"><b>'+km(x.a,x.b).toFixed(1)+' km</b><a href="'+gmapsRoute(x)+'" target="_blank" rel="noopener noreferrer">实时路线 ↗</a></div></article>';}).join('');
  }
  function bindJumpLinks(){document.querySelectorAll('[data-jump-day]').forEach(function(a){a.onclick=function(e){e.preventDefault();renderDay(Number(this.getAttribute('data-jump-day')));};});}
  function init(){
    const mapEl=document.getElementById('trip-map');
    if(!window.L){mapEl.innerHTML='<div class="map-fallback">地图组件未加载。请联网后刷新；下方每一段仍可通过 Google Maps 查看。</div>';return;}
    mapEl.innerHTML='';
    map=L.map('trip-map',{zoomControl:true,scrollWheelZoom:false,attributionControl:true}).setView([34.82,135.5],9);
    L.tileLayer('./tiles/{z}/{x}/{y}.png',{minNativeZoom:8,maxNativeZoom:12,minZoom:8,maxZoom:12,noWrap:true,attribution:'© OpenStreetMap contributors'}).addTo(map);
    document.querySelectorAll('.map-day').forEach(function(b){b.addEventListener('click',function(){const v=this.getAttribute('data-map-day');if(v==='all'){renderAll();}else{renderDay(Number(v));}});});
    renderAll();setTimeout(function(){map.invalidateSize();},150);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();