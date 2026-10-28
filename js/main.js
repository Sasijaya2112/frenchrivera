const IMG={out:"assets/images/facade-day.webp",nv:"assets/images/facade-night.webp",nv2:"assets/images/entrance-night.webp",ov:"assets/images/facade-blue-sky.webp",r1:"assets/images/bedroom.webp",int:"assets/images/lobby.webp",ient:"assets/images/entrance-arch-staircase.webp",iw:"assets/images/vintage-details.webp",cafe:"assets/images/yellow-wall-light.webp",rec:"assets/images/reception.webp",rp:"assets/images/corridor.webp",rv:"assets/images/window-view.webp",stair:"assets/images/staircase.webp",wall:"assets/images/wall-art.webp"};
const bookingLinks={
 booking:"https://www.booking.com/hotel/in/french-rivera-heritage-boutique-villa.html",
 agoda:"https://www.agoda.com/en-in/french-rivera-guest-house/hotel/pondicherry-in.html",
 whatsapp:"https://wa.me/919443563331",
 maps:"https://www.google.com/maps/search/?api=1&query=French+Rivera%2C+50+Rue+R.+Manakkula+Vinayagar+Street%2C+White+Town%2C+Puducherry+605001",
 directions:"https://www.google.com/maps/dir/?api=1&destination=French+Rivera%2C+50+Rue+R.+Manakkula+Vinayagar+Street%2C+White+Town%2C+Puducherry+605001",
 tel:"tel:+919443563331"};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>bookingLinks.whatsapp+"?text="+encodeURIComponent(t);
const mapQ=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const ic=n=>`<svg class="i"><use href="#${n}"/></svg>`;
$$("[data-link]").forEach(a=>a.href=bookingLinks[a.dataset.link]);
const hi="Hello, I would like to enquire about a stay at French Rivera Heritage Boutique Villa.";
$("#waEnq").href=wa(hi);$("#waFab").href=wa(hi);$("#waRoom").href=wa(hi+" Could you suggest a room for our group? Guests: ___");
$("#yr").textContent=new Date().getFullYear();
// amenities
[["ac","Air conditioning"],["wifi","Free Wi‑Fi"],["park","Free on-site parking"],["clock","24-hour front desk"],["bell","Room service"],["spark","Daily housekeeping"],["users","Family rooms"],["ban","Non-smoking rooms"],["cup","Breakfast in the room"],["bag","Packed lunches"],["shirt","Laundry service"],["car","Car hire"],["lock","Safety deposit box"],["flame","BBQ facilities"]].forEach(([i,t],k)=>$("#amGrid").insertAdjacentHTML("beforeend",`<div class="am rv" style="--d:${(k%4)*.08}s">${ic(i)}${t}</div>`));
// nearby
[["temple","Sri Aurobindo Ashram","Steps away","A peaceful spiritual landmark right beside the villa.","Sri Aurobindo Ashram, Puducherry"],
 ["temple","Manakula Vinayagar Temple","Nearby","The historic Ganesha temple that gives our street its name.","Manakula Vinayagar Temple, Puducherry"],
 ["wave","Promenade Beach","Short walk","Sunrise walks along the Bay of Bengal seafront.","Promenade Beach, Puducherry"],
 ["museum","Puducherry Museum","1.1 km","Sculpture, coins and colonial-era history, per listings.","Puducherry Museum"],
 ["home","French Quarter streets","Right outside","Ochre villas, boutique shops and cafés to wander.","White Town, Puducherry"]].forEach(([i,n,d,t,q],k)=>$("#nearGrid").insertAdjacentHTML("beforeend",`<div class="card rv" style="--d:${k*.08}s"><div class="ic">${ic(i)}</div><div class="dist">${d}</div><h3>${n}</h3><p>${t}</p><a class="btn ghost sm" href="${mapQ(q)}" target="_blank" rel="noopener" style="align-self:flex-start">View on map ${ic("arrow")}</a></div>`));
// booking cards
[["booking","Booking.com","See rates and read reviews",bookingLinks.booking,"star"],["agoda","Agoda","Compare dates and prices",bookingLinks.agoda,"bed"],["wa","WhatsApp","Message the villa directly",wa(hi),"chat"],["maps","Google Maps","Plan your route",bookingLinks.directions,"nav"],["tel","Call us","+91 94435 63331",bookingLinks.tel,"phone"]].forEach(([k,t,s,h,i],n)=>{
 const ext=k!=="tel";$("#bkGrid").insertAdjacentHTML("beforeend",`<a class="rv" style="--d:${n*.08}s" href="${h}"${ext?' target="_blank" rel="noopener"':""}>${ic(i)}<b>${t}</b><span>${s}</span></a>`)});
$("#enqGo").onclick=()=>{const f=v=>v||"___";window.open(wa(`${hi} Check-in: ${f($("#ci").value)}, Check-out: ${f($("#co").value)}, Guests: ${f($("#gu").value)}.`),"_blank","noopener")};
// score bars
[["Location",9.1],["Cleanliness",8.3],["Comfort",8.3],["Value for money",7.9],["Facilities",7.6]].forEach(([n,v])=>$("#bars").insertAdjacentHTML("beforeend",`<div class="bar"><span>${n}</span><i><b data-w="${v*10}"></b></i><strong>${v}</strong></div>`));
// faq
[["Can I book directly on this website?","No. Reserve on Booking.com or Agoda, or message or call us. This site doesn’t take bookings or payments."],
 ["Where exactly is the villa?","At 50 Rue, R. Manakkula Vinayagar Street in White Town, just behind Sri Aurobindo Ashram. Use the Get directions button for turn-by-turn navigation."],
 ["Is parking available?","Free on-site parking is listed on our booking pages. Please message us to confirm space for your dates."],
 ["Is there a lift?","No. The villa is a heritage house with stairs, so please plan accordingly if you have heavy luggage or limited mobility."],
 ["What are the check-in and check-out times?","Platforms list check-in from 12:00 and check-out by 11:00. We recommend reconfirming when you book. A 24-hour front desk helps with late arrivals."],
 ["Is breakfast included?","Breakfast in the room is listed as an option. Whether it’s included depends on your rate, so please check the details on your booking platform."],
 ["Are families and groups welcome?","Yes, family rooms are listed. Message us your group size and dates and we’ll recommend the best option."]].forEach(([q,a],i)=>{
 const b=document.createElement("button");b.id="q"+i;b.setAttribute("aria-expanded","false");b.setAttribute("aria-controls","a"+i);b.textContent=q;
 const w=document.createElement("div");w.className="ans";w.id="a"+i;w.setAttribute("role","region");w.setAttribute("aria-labelledby","q"+i);w.innerHTML=`<div><p>${a}</p></div>`;
 b.onclick=()=>{const o=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",!o);w.classList.toggle("open",!o)};$("#faqList").append(b,w)});
// gallery + lightbox
const G=[["out","The sunny facade"],["nv","Evening glow in White Town"],["int","Lobby with black stone floors"],["ient","Arched doorway and staircase"],["r1","A cosy guest room"],["stair","Sunlit staircase"],["ov","Mustard walls and wooden balconies"],["rec","Reception"],["wall","Local art on the wall"],["rv","Shuttered garden-view window"],["iw","Vintage details and greenery"],["nv2","Warm lights after dusk"],["rp","Corridor to the rooms"],["cafe","Dappled light on yellow walls"]];
let gi=0;const lb=$("#lb");
const show=()=>{$("#lbImg").src=IMG[G[gi][0]];$("#lbImg").alt=G[gi][1];$("#lbCap").textContent=`${G[gi][1]} · ${gi+1}/${G.length}`};
G.forEach(([k,c],i)=>{const b=document.createElement("button");b.className="rv z";b.style.setProperty("--d",(i%4)*.07+"s");b.setAttribute("aria-label","Enlarge photo: "+c);
 b.innerHTML=`<img src="${IMG[k]}" loading="lazy" alt="${c}"><span class="gc">${c}</span>`;b.onclick=()=>{gi=i;show();lb.showModal()};$("#galGrid").appendChild(b)});
const nx=d=>{gi=(gi+d+G.length)%G.length;show()};
$("#lbPrev").onclick=()=>nx(-1);$("#lbNext").onclick=()=>nx(1);$("#lbClose").onclick=()=>lb.close();
lb.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")nx(-1);if(e.key==="ArrowRight")nx(1)});
lb.addEventListener("click",e=>{if(e.target===lb||e.target.classList.contains("lb"))lb.close()});
let tx=0;lb.addEventListener("touchstart",e=>tx=e.touches[0].clientX,{passive:true});lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)nx(d<0?1:-1)});
// header, menu, progress, parallax
const hd=$("#top"),mb=$("#menuBtn"),ln=$("#links"),pr=$("#prog"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const onS=()=>{const y=scrollY;hd.classList.toggle("solid",y>40);pr.style.width=(y/(document.documentElement.scrollHeight-innerHeight)*100)+"%";
 if(!rm&&innerWidth>900&&y<1400)$$("[data-par]").forEach(e=>e.style.transform=`translateY(${y*e.dataset.par*-1}px)`)};
onS();addEventListener("scroll",onS,{passive:true});
mb.onclick=()=>{const o=ln.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
ln.querySelectorAll("a").forEach(a=>a.onclick=()=>{ln.classList.remove("open");mb.setAttribute("aria-expanded","false")});
// fab
const fb=$("#fabBtn"),fp=$("#fabPanel");const tf=o=>{fp.classList.toggle("open",o);fb.setAttribute("aria-expanded",o)};
fb.onclick=e=>{e.stopPropagation();tf(!fp.classList.contains("open"))};document.addEventListener("click",e=>{if(!fp.contains(e.target))tf(false)});document.addEventListener("keydown",e=>{if(e.key==="Escape")tf(false)});
// reveal, counters, bars
const cnt=el=>{if(el.dataset.done)return;el.dataset.done=1;const t=+el.dataset.count,d=+el.dataset.dec||0;if(rm){el.textContent=t.toFixed(d);return}let s=null;const st=n=>{s=s||n;const p=Math.min((n-s)/1400,1);el.textContent=(t*(1-Math.pow(1-p,3))).toFixed(d);if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add("in");t.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%");t.querySelectorAll("[data-count]").forEach(cnt);if(t.dataset.count)cnt(t);io.unobserve(t)}),{threshold:.15});
$$(".rv,.stats,.score,[data-count]").forEach(el=>io.observe(el));
