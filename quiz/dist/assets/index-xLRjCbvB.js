(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const f={init:function(e){e?(window.ct_wow__search.structure.accessibility_mode=!0,window.ct_wow__search.structure.prod_list_container.querySelector(".ct_wow_search__product:nth-child(2) a").focus(),window.ct_wow__search.structure.container.classList.add("ct_wow__search__accessibility_mode")):console.log("not active")}},a={getInfo:function(){window.ct_wow__search.data.storeInfo.lang="en-us",window.ct_wow__search.data.storeInfo.lang_short="en"},getLang:function(e){try{let t=Object.keys(e);return t.includes(window.ct_wow__search.data.storeInfo.lang)?e[window.ct_wow__search.data.storeInfo.lang]:t.includes(window.ct_wow__search.data.storeInfo.lang_short)?e[window.ct_wow__search.data.storeInfo.lang_short]:e.en}catch(t){return t}}},g=(e,t)=>{let n=t,r=t,s=2*Math.PI/e,o=Math.PI/2+s,l=[];for(let u=0;u<e;u++)l.push({x:(n+t*Math.cos(o)).toFixed(2),y:(r+t*Math.sin(o)).toFixed(2)}),o+=s;return l},y=(e,t)=>{var n;return function(r){n&&clearTimeout(n),n=setTimeout(e,500,r)}},h=(e,t)=>{console.log("%c "+e,`background:#E8DBBD;padding:3px 5px; border-radius:4px; color:#000;font-family:helvetica; ${t};`)},m=()=>window.innerWidth>1025?"D":window.innerWidth<1025&&window.innerWidth>=768?"T":window.innerWidth<768?"M":"not recognized",b=(e,t)=>new Promise((n,r)=>{if(e.loaded===!0)n();else{let s=0,o=setInterval(()=>{e.loaded===!0?(clearInterval(o),n()):(s+=200,s>t&&(clearInterval(o),console.log("TIMEOUT"),n()))},200)}}),_=e=>{window.tealium_data2track?window.tealium_data2track.push(e):console.log(e)},p=(e,t)=>{let n={};if(t==="object")for(let r=0;r<e.length;r++)n[e[r]]={};else n="",e.forEach((r,s)=>{n+=r,s<e.length-1&&(n+=t)});return n},d={elem:null,loaderEvent:new CustomEvent("loaderOut"),init:function(e){this.elem=document.querySelector("#ct_wow__search__loader"),this.loaderIn(e)},loaderIn:function(e,t){(!t||t==="init")&&(this.elem.querySelector("h3").innerHTML=a.getLang(window.ct_wow__search.data.copy.loader.init)),t==="restart"&&(this.elem.querySelector("h3").innerHTML=a.getLang(window.ct_wow__search.data.copy.loader.restart),_({id:"Impression",Page_Section2:"WowQuiz:Step1"})),t==="results"&&(this.elem.querySelector("h3").innerHTML=a.getLang(window.ct_wow__search.data.copy.loader.results)),this.elem.classList.add("ct_in"),setTimeout(()=>{this.loaderOut()},e)},loaderOut:function(){this.elem.classList.remove("ct_in"),document.dispatchEvent(this.loaderEvent)}};window.ct_wow__search={init:!1,initTimer:null,opening:!1,start:null,structure:{},inputManagement:{},config:{selector:"body",openingElem:[{selector:"#cta1",pages:"all",section:"Search"},{selector:"#cta2",pages:"all",section:"Search"},{selector:"#cta3",pages:"all",section:"Search"},{selector:"#quiz_cta",pages:"all",section:"Search"},{selector:'img[alt="Group 933"]',pages:["womens-sunglasses","mens-sunglasses","designer-sunglasses"],section:"Plp"}]},template:"",data:{loaded:!1,products:[],questions:[],storeInfo:{lang:"",lang_short:"",base_url:""}}};window.ct_wow__search.data.loaded=!0;window.ct_wow__search.data.products={"8056597418478":{brand:"Prada",upc:"8056597418478",url:{"en-us":"/us/prada/pr-17ws-8056597418478"},specs:[[6,6,6,7],[5,6,3,9],[0,9,7],[7,9,9,0]]},"8053672611649":{brand:"Ray-Ban",upc:"8053672611649",url:{"en-us":"/us/ray-ban/rb3548n-8053672611649"},specs:[[2,3,6,9],[8,7,6,9],[5,0,9],[9,9,3,8]]},"8056597870672":{brand:"tiffany & co",upc:"8056597870672",url:{"en-us":"/us/tiffany-co/tf4206u-8056597870672"},specs:[[5,4,5,8],[3,5,2,6],[7,0,8],[7,6,7,0]]},"888392243683":{brand:"Oakley",upc:"888392243683",url:{"en-us":"/us/oakley/oo9208-888392243683"},specs:[[8,8,9,1],[8,4,9,5],[9,3,2],[8,8,7,3]]},"8056597844475":{brand:"Dolce and Gabbana",upc:"8056597844475",url:{"en-us":"/us/dolce-and-gabbana/dg4437-8056597844475"},specs:[[6,5,2,7],[5,6,3,9],[0,9,7],[7,7,6,4]]},"8056597745222":{brand:"Persol",upc:"8056597745222",url:{"en-us":"/us/persol/po3302s-8056597745222"},specs:[[5,3,4,8],[8,7,3,9],[3,2,9],[6,7,7,2]]},"725125395380":{brand:"michael kors",upc:"725125395380",url:{"en-us":"/us/michael-kors/mk1127j-725125395380"},specs:[[5,5,2,7],[5,6,3,9],[7,0,5],[7,7,8,5]]},"827934481800":{brand:"Oliver Peoples",upc:"827934481800",url:{"en-us":"/us/oliver-peoples/ov5504su-827934481800"},specs:[[2,4,6,8],[5,6,3,9],[6,0,7],[7,8,9,0]]},"805289304456":{brand:"Ray-Ban",upc:"805289304456",url:{"en-us":"/us/ray-ban/rb3016-805289304456"},specs:[[3,3,6,9],[8,7,6,9],[5,2,9],[8,9,3,8]]},"8056597810982":{brand:"Persol",upc:"8056597810982",url:{"en-us":"/us/persol/po3313s-8056597810982"},specs:[[5,3,4,8],[8,7,3,9],[4,2,9],[7,7,8,2]]},"8056597829335":{brand:"Ray-ban",upc:"8056597829335",url:{"en-us":"/us/ray-ban/rb4395-8056597829335"},specs:[[5,7,5,6],[3,5,2,8],[9,2,7],[6,8,3,6]]},"700285658667":{brand:"Oakley",upc:"700285658667",url:{"en-us":"/us/oakley/oo9102-700285658667"},specs:[[3,8,9,6],[8,4,9,5],[9,3,2],[8,8,3,8]]},"8056597328111":{brand:"Ray-Ban",upc:"8056597328111",url:{"en-us":"/us/ray-ban/rb3025-8056597328111"},specs:[[2,3,6,9],[8,7,6,9],[0,9,7],[9,9,5,5]]},"888392530578":{brand:"Oakley",upc:"888392530578",url:{"en-us":"/us/oakley/oo9465-888392530578"},specs:[[8,8,9,1],[7,4,9,5],[8,3,2],[8,8,3,5]]},"8053672947397":{brand:"Versace",upc:"8053672947397",url:{"en-us":"/us/versace/ve4361-8053672947397"},specs:[[6,6,6,7],[5,6,3,9],[0,8,7],[7,9,7,3]]},"8056597823043":{brand:"Persol",upc:"8056597823043",url:{"en-us":"/us/persol/po3310s-8056597823043"},specs:[[6,3,4,8],[8,7,3,9],[3,2,9],[6,7,7,3]]},"8056597786249":{brand:"polo ralph lauren",upc:"8056597786249",url:{"en-us":"/us/polo-ralph-lauren/ph4184-8056597786249"},specs:[[4,5,7,8],[6,6,6,6],[8,0,9],[7,7,4,8]]},"8056597843072":{brand:"Dolce and Gabbana",upc:"8056597843072",url:{"en-us":"/us/dolce-and-gabbana/dg2296-8056597843072"},specs:[[5,6,6,5],[5,6,3,9],[3,1,9],[8,7,8,2]]},"8056597875325":{brand:"Prada",upc:"889652048123",url:{"en-us":"/us/prada/pr-27zs-8056597875325"},specs:[[6,5,2,8],[5,6,3,9],[0,9,7],[7,8,6,0]]},"725125368919":{brand:"coach",upc:"725125368919",url:{"en-us":"/us/coach/hc8315-725125368919"},specs:[[6,6,5,7],[7,7,5,7],[7,0,9],[7,7,5,5]]},"8056597836449":{brand:"versace",upc:"8056597836449",url:{"en-us":"/us/versace/ve2255-8056597836449"},specs:[[6,6,5,5],[6,5,7,8],[3,8,8],[6,9,8,1]]},"8056597641784":{brand:"ray-ban",upc:"8056597641784",url:{"en-us":"/us/ray-ban/rb3636-8056597641784"},specs:[[5,4,6,7],[5,6,3,9],[3,0,9],[8,8,9,5]]},"725125391627":{brand:"coach",upc:"725125391627",url:{"en-us":"/us/coach/hc8353u-725125391627"},specs:[[6,6,2,5],[5,6,3,9],[0,9,7],[7,7,6,7]]},"888392601803":{brand:"oakley",upc:"888392601803",url:{"en-us":"/us/oakley/oo9280-888392601803"},specs:[[9,7,4,4],[5,6,3,9],[0,9,6],[6,9,5,6]]},"805289126591":{brand:"Ray-Ban",upc:"805289126591",url:{"en-us":"/us/ray-ban/rb2140-805289126591"},specs:[[3,3,6,9],[8,7,6,9],[1,6,7],[8,9,5,5]]},"8056597744409":{brand:"Prada",upc:"8056597744409",url:{"en-us":"/us/prada/pr-13zs-8056597744409"},specs:[[7,6,2,5],[5,6,3,9],[9,0,2],[6,9,9,0]]},"8053672923087":{brand:"Versace",upc:"8053672923087",url:{"en-us":"/us/versace/ve2199-8053672923087"},specs:[[7,5,6,7],[5,6,3,9],[0,9,7],[6,9,8,2]]},"8056597440240":{brand:"Prada",upc:"8056597440240",url:{"en-us":"/us/prada/pr-19ws-8056597440240"},specs:[[5,5,6,7],[5,6,3,9],[0,9,7],[6,9,9,0]]},"97963652346":{brand:"Costa del mar",upc:"97963652346",url:{"en-us":"/us/costa-del-mar/6s9018-97963652346"},specs:[[2,5,6,7],[6,4,9,4],[9,3,2],[6,3,7,3]]},"8056597884280":{brand:"Prada linea rossa",upc:"8056597884280",url:{"en-us":"/us/prada-linea-rossa/ps-07ys-8056597884280"},specs:[[8,8,9,2],[8,4,9,5],[9,3,2],[8,8,3,0]]}};window.ct_wow__search.data.questions=[{question:{en:"How would you describe your style?",fr:"..",es:"..",de:".."},answers:[{en:"Bold",fr:"..",es:"..",de:".."},{en:"Playful",fr:"..",es:"..",de:".."},{en:"Active",fr:"..",es:"..",de:".."},{en:"Classic",fr:"..",es:"..",de:".."}]},{question:{en:"Which word describes your lifestyle best?			",fr:"..",es:"..",de:".."},answers:[{en:"On the road",fr:"..",es:"..",de:".."},{en:"Avid reader",fr:"..",es:"..",de:".."},{en:"Outdoorsy",fr:"..",es:"..",de:".."},{en:"City hustler",fr:"..",es:"..",de:".."}]},{question:{en:"Which colors do you wear the most?",fr:"..",es:"..",de:".."},answers:[{en:"Brights",fr:"..",es:"..",de:".."},{en:"Black",fr:"..",es:"..",de:".."},{en:"Neutrals",fr:"..",es:"..",de:".."}]},{question:{en:"What is the most important quality you look for in your sunglasses?",fr:"..",es:"..",de:".."},answers:[{en:"Comfort",fr:"..",es:"..",de:".."},{en:"On-trend",fr:"..",es:"..",de:".."},{en:"Quality",fr:"..",es:"..",de:".."},{en:"Low price",fr:"..",es:"..",de:".."}]},{question:{en:"We're almost there!  Click to find out what we've prepared for you. ",fr:"..",es:"..",de:".."},answers:[{en:"Show me now",fr:"..",es:"..",de:".."}]}];window.ct_wow__search.data.copy={loader:{init:{en:"Your quiz  is loading...",fr:"..",es:"..",de:".."},restart:{en:"Restarting quiz...",fr:"..",es:"..",de:".."},results:{en:"Preparing your results...",fr:"..",es:"..",de:".."}},inputs:{next:{en:"next",fr:"..",es:"..",de:".."},prev:{en:"back",fr:"..",es:"..",de:".."}},results:{title:{en:"Our expert recommendations ",fr:"..",es:"..",de:".."},subtitle:{en:"Based on your answers, we think these styles are a perfect fit!",fr:"..",es:"..",de:".."},viewAll:{label:{en:"View all",fr:"..",es:"..",de:".."},url:{"en-us":"/us/designer-sunglasses",fr:"..",es:"..",de:".."}},restart:{en:"restart",fr:"..",es:"..",de:".."}}};window.ct_wow__search.structure={device:m(),container:null,prod_list_container:null,prod_list:[],shuffleData:{missingProd:null,missingPos:null},accessibility_mode:!1,placeholders:{utils:{mainCircle:{container:null,prodsCount:3,radius:null},firstCircle:{container:null,prodsCount:13,radius:null},secondCircle:{container:null,prodsCount:14}},coordinates:[]},init:async function(e){if(console.log(e),window.ct_wow__search.opening=!0,h("WOW SEARCH INIT"),a.getInfo(),e||(this.container=document.querySelector("#ct_wow__search"),this.container.classList.add("ct_active"),this.setCloseHandler(),this.prod_list_container=document.querySelector(".ct_wow__search__products_list"),this.device==="D"&&this.setMouseMove()),this.device!="D"&&this.calcHeight(),await b(window.ct_wow__search.data,3e3),window.ct_wow__search.data.loaded===!1){h("WOW SEARCH INIT - TIMEOUT");return}e||d.init(1500),e||(this.buildHtml(),this.setPlaceholders(!0),ct_wow__search.inputManagement.init()),this.entry(),window.addEventListener("resize",this.refreshPositionsDebounced),this.container.addEventListener("keyup",t=>{(t.keyCode===9||t.which===9)&&this.accessibility_mode===!1&&f.init(!0)}),window.ct_wow__search.opening=!1,window.ct_wow__search.init=!0},calcHeight:function(){window.ct_wow__search.structure.container.style.setProperty("--ct-wow-search-height",`${window.innerHeight}px`),window.addEventListener("resize",this.calcHeight)},buildHtml:function(){Object.keys(window.ct_wow__search.data.products).forEach(e=>{this.prod_list_container.innerHTML+=`
      <li class="ct_wow_search__product" data-upc="${e}">
        <div class="ct_wow_search__product__wrap">
          <a href="${a.getLang(window.ct_wow__search.data.products[e].url)}" aria-label="shop now ${e}" data-element-id="WowQuiz_Step1-Product" data-description-="${e}" tabindex="0">
              <div class="ct_wow_search__img_container">
                  <img src="${window.ct_wow__search.data.products[e].img?window.ct_wow__search.data.products[e].img:"https://assets.sunglasshut.com/is/image/LuxotticaRetail/"+e+"__STD__shad__fr.png?impolicy=SGH_bgtransparent&width=640"}" alt="${e}">
              </div>
          </a>
        </div>
      </li>
      `}),document.querySelectorAll("#ct_wow__search .ct_wow_search__product").forEach(e=>{this.prod_list.push({originElem:e,elem:e.querySelector(".ct_wow_search__product__wrap"),x:e.getBoundingClientRect().x+e.clientWidth/2,y:e.getBoundingClientRect().y+e.clientHeight/2,scalingElem:e.querySelector(".ct_wow_search__product__wrap a"),upc:e.dataset.upc,pos:null,score:0})})},refreshProdPos:function(){this.prod_list.forEach(e=>{e.x=e.originElem.getBoundingClientRect().x+e.originElem.clientWidth/2,e.y=e.originElem.getBoundingClientRect().y+e.originElem.clientWidth/2})},setPlaceholders:function(e){(n=>{let r=Object.keys(this.placeholders.utils),s=0;r.forEach((o,l)=>{let u=this.placeholders.utils[o].container=document.querySelector(`#ct_wow__search .ct_wow__search__pos_placeholders__${o} `);if(n)for(let c=0;c<this.placeholders.utils[o].prodsCount;c++)u.innerHTML+=`
              <div class="ct_wow__search__pos_placeholders__${o}__placeholder"></div>
            `;this.placeholders.utils[o].radius=u.clientWidth/2;let w=g(this.placeholders.utils[o].prodsCount,this.placeholders.utils[o].radius);u.querySelectorAll("div").forEach((c,i)=>{c.style.top=w[i].y+"px",c.style.left=w[i].x+"px",n?this.placeholders.coordinates.push({elem:c,x:c.getBoundingClientRect().x+c.clientWidth/2,y:c.getBoundingClientRect().y+c.clientHeight/2,pos:i+s}):(this.placeholders.coordinates[i+s].x=this.placeholders.coordinates[i+s].elem.getBoundingClientRect().x+this.placeholders.coordinates[i+s].elem.clientWidth/2,this.placeholders.coordinates[i+s].y=this.placeholders.coordinates[i+s].elem.getBoundingClientRect().y+this.placeholders.coordinates[i+s].elem.clientHeight/2)}),s+=this.placeholders.utils[o].prodsCount})})(e)},entry:function(){this.container.classList.add("ct_in"),document.body.style.overflow="hidden",document.addEventListener("loaderOut",()=>{window.ct_wow__search.structure.prod_list_container.classList.add("ct_in")})},rankingProducts:function(e,t,n){window.ct_wow__search.inputManagement.answers.state[e]=parseInt(t),window.ct_wow__search.inputManagement.answers.tracked[e]=n,this.prod_list.forEach(r=>{r.score=this.calcScore(r.upc)}),this.prod_list.sort((r,s)=>r.score<s.score?1:-1),this.prod_list.forEach((r,s)=>{r.elem.style.transform=`
      translate(
        ${this.placeholders.coordinates[s].x-r.x}px,
        ${this.placeholders.coordinates[s].y-r.y}px
      )`,s<3&&(r.scalingElem.style.transform="translate(-50%,-50%) scale(2)"),s>=3&&s<this.placeholders.utils.secondCircle.prodsCount+3&&(r.scalingElem.style.transform="translate(-50%,-50%) scale(1.1)"),s>=this.placeholders.utils.secondCircle.prodsCount+3&&(r.scalingElem.style.transform="translate(-50%,-50%) scale(.6)"),r.scalingElem.dataset.elementId=`WowQuiz_Step${parseInt(e)+2}-Product`}),window.ct_wow__search.inputManagement.results.state=[this.prod_list[0].upc,this.prod_list[1].upc,this.prod_list[2].upc,this.prod_list[3].upc]},calcScore:function(e){let t=0;return window.ct_wow__search.inputManagement.answers.state.forEach((n,r)=>{t+=window.ct_wow__search.data.products[e].specs[r][n]}),t},refreshPositionsDebounced:y(()=>{ct_wow__search.structure.device!="D"&&(ct_wow__search.structure.prod_list_container.parentNode.scrollTop=0,ct_wow__search.structure.prod_list_container.parentNode.scrollLeft=ct_wow__search.structure.prod_list_container.parentNode.clientWidth/4),ct_wow__search.structure.container.classList.contains("ct_shuffled")&&(ct_wow__search.structure.setPlaceholders(!1),ct_wow__search.structure.refreshProdPos(),ct_wow__search.structure.adjustProdPos())}),refreshPositions:function(){ct_wow__search.structure.device!="D"&&(ct_wow__search.structure.prod_list_container.parentNode.scrollTop=0,ct_wow__search.structure.prod_list_container.parentNode.scrollLeft=ct_wow__search.structure.prod_list_container.parentNode.clientWidth/4),this.container.classList.contains("ct_shuffled")&&(ct_wow__search.structure.setPlaceholders(!1),ct_wow__search.structure.refreshProdPos(),ct_wow__search.structure.adjustProdPos())},adjustProdPos:function(){this.prod_list.forEach((e,t)=>{e.elem.style.transform=`
      translate(
        ${this.placeholders.coordinates[t].x-e.x}px,
        ${this.placeholders.coordinates[t].y-e.y}px
      )`})},setMouseMove:function(){this.prod_list_container.addEventListener("mousemove",e=>{this.prod_list_container.style.transform=`translate(${-(e.clientX-window.innerWidth/2)*.01}px,${-(e.clientY-window.innerHeight/2)*.01}px)`}),document.querySelector("#ct_wow__search__input").addEventListener("mouseenter",e=>{this.prod_list_container.style.transform="translate(0,0)"})},setCloseHandler:function(){document.querySelector("#ct_wow__search__close").addEventListener("click",()=>{this.container.classList.remove("ct_in"),document.body.style.overflow="auto",this.resetStructure(),window.ct_wow__search.inputManagement.resetQuestions(),window.removeEventListener("resize",window.ct_wow__search.structure.refreshPositionsDebounced),this.device!="D"&&window.removeEventListener("resize",window.ct_wow__search.structure.calcHeight)})},resetStructure:function(){window.ct_wow__search.structure.prod_list_container.style.transform="scale(1)",this.prod_list_container.querySelectorAll(".ct_wow_search__product__wrap").forEach(e=>{e.style.transform="none",e.querySelector("a").style.transform="translate(-50%,-50%)"})}};window.ct_wow__search.inputManagement={container:null,stepsCount:0,blockerActive:!1,progress:{container:null,current:null,state:1,style:null},questions:{container:null,state:0},answers:{container:null,state:[],tracked:[]},buttons:{next:null,prev:null,results:null,restart:null},results:{container:null,state:[]},init:function(e){this.setElements(),this.fillData(),this.setButtonsHandler()},setElements:function(){this.container=document.querySelector("#ct_wow__search__input"),this.progress.container=document.querySelector(".ct_wow__search__input_progress"),this.progress.current=document.querySelector(".ct_wow__search__input_progress .ct_wow__search__input_progress__current"),this.questions.container=document.querySelector(".ct_wow__search__input_questions"),this.answers.container=document.querySelector(".ct_wow__search__input_answers"),this.buttons.next=document.querySelector(".ct_wow__search__input_commands__next"),this.buttons.prev=document.querySelector(".ct_wow__search__input_commands__prev"),this.buttons.restart=document.querySelector(".ct_wow__search__restart"),this.results.container=document.querySelector("#ct_wow__search__results")},fillData:function(){this.stepsCount=ct_wow__search.data.questions.length,this.progress.container.querySelector(".ct_wow__search__input_progress__current + span").innerHTML=` /${this.stepsCount}`,this.updateProgress(),this.setButtonCopy(),this.updateQuestionCopy(),this.buildAnswers(),this.updateAnswer(),this.setResultsCopy()},setButtonsHandler:function(){this.buttons.prev.addEventListener("click",()=>{this.changeQuestions("prev")}),this.buttons.next.addEventListener("click",()=>{this.changeQuestions("next")}),this.buttons.restart.addEventListener("click",()=>{this.restartQuiz()})},updateProgress:function(e){this.blockerActive=!0,e&&(this.progress.state!=1&&_({id:"Impression",Page_Section2:`WowQuiz:Step${this.progress.state}`}),this.progress.current.dataset.next=this.progress.state,this.progress.container.style.setProperty("--ct-wow-search-input-progress-before-opacity","1"),this.progress.container.style.setProperty("--ct-wow-search-input-progress-after-opacity","0"),this.progress.current.querySelector("span").style.opacity=0,this.progress.container.style.setProperty("--ct-wow-search-input-progress-before-translate","translateY(0)"),e==="next"?this.progress.container.style.setProperty("--ct-wow-search-input-progress-after-translate","translateY(-100%)"):this.progress.container.style.setProperty("--ct-wow-search-input-progress-after-translate","translateY(100%)"),setTimeout(()=>{this.progress.current.classList.add("ct_animation"),this.progress.container.style.setProperty("--ct-wow-search-input-progress-after-translate","translateY(0%)"),this.progress.container.style.setProperty("--ct-wow-search-input-progress-after-opacity","1"),e==="next"?this.progress.container.style.setProperty("--ct-wow-search-input-progress-before-translate","translateY(100%)"):this.progress.container.style.setProperty("--ct-wow-search-input-progress-before-translate","translateY(-100%)"),this.progress.container.style.setProperty("--ct-wow-search-input-progress-before-opacity","0")},10)),setTimeout(()=>{this.progress.container.querySelector(".ct_wow__search__input_progress__current span").innerHTML=this.progress.state,this.progress.current.dataset.current=this.progress.state,this.progress.current.querySelector("span").style.opacity=1,this.progress.current.classList.remove("ct_animation"),this.blockerActive=!1},410)},setButtonCopy:function(){this.buttons.restart.innerHTML=a.getLang(window.ct_wow__search.data.copy.results.restart)},updateQuestionCopy:function(){this.questions.container.querySelector("h3").style.opacity=0,setTimeout(()=>{this.questions.container.querySelector("h3").innerHTML=a.getLang(window.ct_wow__search.data.questions[this.progress.state-1].question),this.questions.container.querySelector("h3").style.opacity=1},400)},buildAnswers:function(){let e="";window.ct_wow__search.data.questions.forEach((t,n)=>{e+=`<div class="ct_wow__search__input_answer"  data-answer="${n}">`,t.answers.forEach((r,s)=>{e+=`
        <div class="ct_wow__search__button_wrap">
          <button class="ct_cta ct_cta__black " data-q="${n}" tabindex="-1" data-a="${s}" data-element-id="WowQuiz_Step${n+1}-Answer" data-description="${r.en}">${a.getLang(r)}</button>
        </div>
        `}),e+="</div>"}),this.answers.container.innerHTML=e,this.answersButtonHandler()},answersButtonHandler:function(){this.answers.container.querySelectorAll("button").forEach(e=>{e.addEventListener("click",()=>{e.classList.contains("ct_active")||(this.progress.state<this.stepsCount?(window.ct_wow__search.structure.container.classList.contains("ct_shuffled")||window.ct_wow__search.structure.container.classList.add("ct_shuffled"),window.ct_wow__search.structure.refreshPositions(),window.ct_wow__search.structure.rankingProducts(e.dataset.q,e.dataset.a,e.dataset.description),e.parentNode.parentNode.querySelector("button.ct_active")&&e.parentNode.parentNode.querySelector("button.ct_active").classList.remove("ct_active"),e.classList.add("ct_active"),e.parentNode.parentNode.classList.add("ct_aswered"),this.container.classList.add("ct_can_proceed"),this.changeQuestions("next")):this.showResult())})})},updateAnswer:function(){this.answers.container.querySelector(".ct_wow__search__input_answer.ct_active")&&this.answers.container.querySelector(".ct_wow__search__input_answer.ct_active").classList.remove("ct_active"),this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.add("ct_active")},setResultsCopy:function(){this.results.container.querySelector("h2").innerHTML=a.getLang(window.ct_wow__search.data.copy.results.title),this.results.container.querySelector("p").innerHTML=a.getLang(window.ct_wow__search.data.copy.results.subtitle),this.results.container.querySelector(".ct_cta.ct_cta__black").innerHTML=a.getLang(window.ct_wow__search.data.copy.results.viewAll.label),this.results.container.querySelector(".ct_cta.ct_cta__black").href=a.getLang(window.ct_wow__search.data.copy.results.viewAll.url)},changeQuestions:function(e){this.blockerActive||(e==="next"?(this.progress.state+=1,this.progress.state===this.stepsCount&&!this.buttons.next.classList.contains("ct_disabled")&&(this.buttons.next.classList.add("ct_disabled"),this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains("ct_aswered")&&this.container.classList.add("ct_last_step")),this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains("ct_aswered")||this.container.classList.remove("ct_can_proceed"),this.buttons.prev.classList.contains("ct_disabled")&&this.buttons.prev.classList.remove("ct_disabled"),this.progress.state===1&&(this.buttons.next.classList.remove("ct_disabled"),this.buttons.prev.classList.add("ct_disabled"),this.container.classList.remove("ct_last_step"))):(this.progress.state-=1,this.progress.state===1&&!this.buttons.prev.classList.contains("ct_disabled")&&this.buttons.prev.classList.add("ct_disabled"),this.buttons.next.classList.contains("ct_disabled")&&(this.buttons.next.classList.remove("ct_disabled"),this.container.classList.remove("ct_last_step")),this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains("ct_aswered")&&this.container.classList.add("ct_can_proceed")),this.updateProgress(e),this.updateQuestionCopy(),this.updateAnswer())},showResult:function(){_({id:"Impression",Page_Section2:"WowQuiz:Results",Content_Answers:p(window.ct_wow__search.inputManagement.answers.tracked,"|"),Products:p(window.ct_wow__search.inputManagement.results.state,"object")}),this.results.container.classList.add("ct_in"),this.results.container.classList.add("ct_loader_in"),d.loaderIn(2e3,"results"),this.setResult(),setTimeout(()=>{this.results.container.classList.remove("ct_loader_in")},2e3)},setResult:function(){let e=this.results.container.querySelector("#ct_wow__search__results_products");e.innerHTML="",this.results.state.forEach(t=>{e.innerHTML+=`
      <a href="${a.getLang(window.ct_wow__search.data.products[t].url)}" class="ct_wow__search__results_product" data-element-id="WowQuiz_Results-Product" data-description="${t}">
          <img src="${window.ct_wow__search.data.products[t].img?window.ct_wow__search.data.products[t].img:"https://assets.sunglasshut.com/is/image/LuxotticaRetail/"+t+"__STD__shad__fr.png?impolicy=SGH_bgtransparent&width=640"}" alt="${t}">
          <span>${window.ct_wow__search.data.products[t].brand}</span>
        </a>
      `})},restartQuiz:function(){d.loaderIn(1e3,"restart"),setTimeout(()=>{window.ct_wow__search.structure.resetStructure(),this.resetQuestions(),this.results.container.classList.remove("ct_in"),this.results.container.classList.add("ct_loader_in")},400)},resetQuestions:function(){this.progress.state=0,this.answers.container.querySelectorAll("button.ct_active").forEach(e=>e.classList.remove("ct_active")),this.answers.container.querySelectorAll(".ct_aswered").forEach(e=>e.classList.remove("ct_aswered")),this.answers.state=[],this.container.classList.remove("ct_can_proceed"),window.ct_wow__search.structure.container.classList.remove("ct_shuffled"),this.results.container.classList.remove("ct_in"),this.changeQuestions("next")}};document.querySelector("#cta1").addEventListener("click",()=>{window.ct_wow__search.init?window.ct_wow__search.structure.init({reopen:!0}):window.ct_wow__search.structure.init()});
