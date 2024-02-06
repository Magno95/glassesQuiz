import { accessibility } from "./modules/accessibility";
import { loader } from "./modules/loader";
import { storeInfo } from "./modules/storeInfo";
import { analyticsPush, calcCoordinates, checkData, customLog, debounce, formatDataAnalytics, getDevice } from "./modules/utils";

window.ct_wow__search = {
  init:false,
  initTimer:null,
  opening:false,
  start:null,
  structure:{},
  inputManagement:{},
  config:{
    selector:'body',
    openingElem:[
      {
        selector:'#cta1',
        pages:'all',
        section:'Search'
      },
      {
        selector:'#cta2',
        pages:'all',
        section:'Search'
      },
      {
        selector:'#cta3',
        pages:'all',
        section:'Search'
      },
      {
        selector:'#quiz_cta',
        pages:'all',
        section:'Search'
      },
      {
        selector:'img[alt="Group 933"]',
        pages:['womens-sunglasses','mens-sunglasses','designer-sunglasses'],
        section:'Plp'
      }
    ]
  },
  template:'',
  data:{
    loaded:false,
    products:[],
    questions:[],
    storeInfo:{
      lang:'',
      lang_short: '',
      base_url:''
    }
  }
}

/**
 * objects structure:
 * * brand
 * * upc
 * * url
 * * specs => an array of array, each array rappresents a question, each value in the array rappresent a score for each option
 */
window.ct_wow__search.data.loaded = true;
window.ct_wow__search.data.products  = {
    "8056597418478":{
        brand:'Prada',
        upc: '8056597418478',
        url:{
            "en-us": "/us/prada/pr-17ws-8056597418478",
        },
        specs:[
            [6,6,6,7], //question 1, scores for option 1 to 4
            [5,6,3,9], //question 2, scores for option 1 to 4
            [0,9,7], //question 3, scores for option 1 to 4
            [7,9,9,0] //question 4, scores for option 1 to 4
        ]
    
    },
    "8053672611649":{
        brand:'Ray-Ban',
        upc: '8053672611649',
        url: {
            "en-us":"/us/ray-ban/rb3548n-8053672611649"
        },
        specs:[
            [2,3,6,9], //question 1, scores for option 1 to 4
            [8,7,6,9], //question 2, scores for option 1 to 4
            [5,0,9], //question 3, scores for option 1 to 4
            [9,9,3,8],
        ]
    
    },
    "8056597870672":{
        brand:'tiffany & co',
        upc: '8056597870672',
        url: {
            "en-us":"/us/tiffany-co/tf4206u-8056597870672"
        },
        specs:[
            [5,4,5,8],
            [3,5,2,6],
            [7,0,8],
            [7,6,7,0],
        ]
    
    },
    "888392243683":{
        brand:'Oakley',
        upc: '888392243683',
        url: {
            "en-us":"/us/oakley/oo9208-888392243683"
        },
        specs:[
            [8,8,9,1],
            [8,4,9,5],
            [9,3,2],
            [8,8,7,3],
        ]
    
    },
    "8056597844475":{
        brand:'Dolce and Gabbana',
        upc: '8056597844475',
        url: {
            "en-us":"/us/dolce-and-gabbana/dg4437-8056597844475"
        },
        specs:[
            [6,5,2,7],
            [5,6,3,9],
            [0,9,7],
            [7,7,6,4],
        ]
    
    },
    "8056597745222":{
        brand:'Persol',
        upc: '8056597745222',
        url: {
            "en-us":"/us/persol/po3302s-8056597745222"
        },
        specs:[
            [5,3,4,8],
            [8,7,3,9],
            [3,2,9],
            [6,7,7,2],
        ]
    
    },
    "725125395380":{
        brand:'michael kors',
        upc: '725125395380',
        url: {
            "en-us":"/us/michael-kors/mk1127j-725125395380"
        },
        specs:[
            [5,5,2,7],
            [5,6,3,9],
            [7,0,5],
            [7,7,8,5],
        ]
    
    },
    "827934481800":{
        brand:'Oliver Peoples',
        upc: '827934481800',
        url: {
            "en-us":"/us/oliver-peoples/ov5504su-827934481800"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [2,4,6,8],
            [5,6,3,9],
            [6,0,7],
            [7,8,9,0],
        ]
    
    },
    //8
    "805289304456":{
        brand:'Ray-Ban',
        upc: '805289304456',
        url: {
            "en-us":"/us/ray-ban/rb3016-805289304456"
        },
        specs:[
            [3,3,6,9],
            [8,7,6,9],
            [5,2,9],
            [8,9,3,8],
        ]
    
    },
    "8056597810982":{
        brand:'Persol',
        upc: '8056597810982',
        url: {
            "en-us":"/us/persol/po3313s-8056597810982"
        },
        specs:[
            [5,3,4,8],
            [8,7,3,9],
            [4,2,9],
            [7,7,8,2],
        ]
    
    },
    "8056597829335":{
        brand:'Ray-ban',
        upc: '8056597829335',
        url: {
            "en-us":"/us/ray-ban/rb4395-8056597829335"
        },
        specs:[
            [5,7,5,6],
            [3,5,2,8],
            [9,2,7],
            [6,8,3,6],
        ]
    
    },
    "700285658667":{
        brand:'Oakley',
        upc: '700285658667',
        url: {
            "en-us":"/us/oakley/oo9102-700285658667"
        },
        specs:[
            [3,8,9,6],
            [8,4,9,5],
            [9,3,2],
            [8,8,3,8],
        ]
    
    },
    "8056597328111":{
        brand:'Ray-Ban',
        upc: '8056597328111',
        url: {
            "en-us":"/us/ray-ban/rb3025-8056597328111"
        },
        specs:[
            [2,3,6,9],
            [8,7,6,9],
            [0,9,7],
            [9,9,5,5],
        ]
    
    },
    "888392530578":{
        brand:'Oakley',
        upc: '888392530578',
        url: {
            "en-us":"/us/oakley/oo9465-888392530578"
        },
        specs:[
            [8,8,9,1],
            [7,4,9,5],
            [8,3,2],
            [8,8,3,5],
        ]
    
    },
    "8053672947397":{
        brand:'Versace',
        upc: '8053672947397',
        url: {
            "en-us":"/us/versace/ve4361-8053672947397"
        },
        specs:[
            [6,6,6,7],
            [5,6,3,9],
            [0,8,7],
            [7,9,7,3],
        ]
    
    },
    //16
    "8056597823043":{
        brand:'Persol',
        upc: '8056597823043',
        url: {
            "en-us":"/us/persol/po3310s-8056597823043"
        },
        specs:[
            [6,3,4,8],
            [8,7,3,9],
            [3,2,9],
            [6,7,7,3],
        ]
    
    },
    "8056597786249":{
        brand:'polo ralph lauren',
        upc: '8056597786249',
        url: {
            "en-us":"/us/polo-ralph-lauren/ph4184-8056597786249"
        },
        specs:[
            [4,5,7,8],
            [6,6,6,6],
            [8,0,9],
            [7,7,4,8],
        ]
    
    },
   "8056597843072": {
        brand:'Dolce and Gabbana',
        upc: '8056597843072',
        url: {
            "en-us":"/us/dolce-and-gabbana/dg2296-8056597843072"
        },
        specs:[
            [5,6,6,5],
            [5,6,3,9],
            [3,1,9],
            [8,7,8,2],
        ]
    
    },
    "8056597875325":{
        brand:'Prada',
        upc: '889652048123',
        url: {
            "en-us":"/us/prada/pr-27zs-8056597875325"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [6,5,2,8],
            [5,6,3,9],
            [0,9,7],
            [7,8,6,0],
        ]
    
    },
    "725125368919":{
        brand:'coach',
        upc: '725125368919',
        url: {
            "en-us":"/us/coach/hc8315-725125368919"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [6,6,5,7],
            [7,7,5,7],
            [7,0,9],
            [7,7,5,5],
        ]
    
    },
    "8056597836449":{
        brand:'versace',
        upc: '8056597836449',
        url: {
            "en-us":"/us/versace/ve2255-8056597836449"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [6,6,5,5],
            [6,5,7,8],
            [3,8,8],
            [6,9,8,1],
        ]
    
    },
   
    "8056597641784":{
        brand:'ray-ban',
        upc: '8056597641784',
        url: {
            "en-us":"/us/ray-ban/rb3636-8056597641784"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [5,4,6,7],
            [5,6,3,9],
            [3,0,9],
            [8,8,9,5],
        ]
    
    },
    "725125391627":{
        brand:'coach',
        upc: '725125391627',
        url: {
            "en-us":"/us/coach/hc8353u-725125391627"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [6,6,2,5],
            [5,6,3,9],
            [0,9,7],
            [7,7,6,7],
        ]
    
    },
    "888392601803":{
        brand:'oakley',
        upc: '888392601803',
        url: {
            "en-us":"/us/oakley/oo9280-888392601803"
        },
        // img:"https://media.sunglasshut.com/2023/utility/WOW/search/demoframe.png",
        specs:[
            [9,7,4,4],
            [5,6,3,9],
            [0,9,6],
            [6,9,5,6],
        ]
    
    },
   
    "805289126591":{
        brand:'Ray-Ban',
        upc: '805289126591',
        url: {
            "en-us":"/us/ray-ban/rb2140-805289126591"
        },
        specs:[
            [3,3,6,9],
            [8,7,6,9],
            [1,6,7],
            [8,9,5,5],
        ]
    
    },
   
    "8056597744409":{
        brand:'Prada',
        upc: '8056597744409',
        url: {
            "en-us":"/us/prada/pr-13zs-8056597744409"
        },
        specs:[
            [7,6,2,5],
            [5,6,3,9],
            [9,0,2],
            [6,9,9,0],
        ]
    
    },
    "8053672923087":{
        brand:'Versace',
        upc: '8053672923087',
        url: {
            "en-us":"/us/versace/ve2199-8053672923087"
        },
        specs:[
            [7,5,6,7],
            [5,6,3,9],
            [0,9,7],
            [6,9,8,2],
        ]
    
    },
    "8056597440240":{
        brand:'Prada',
        upc: '8056597440240',
        url: {
            "en-us":"/us/prada/pr-19ws-8056597440240"
        },
        specs:[
            [5,5,6,7],
            [5,6,3,9],
            [0,9,7],
            [6,9,9,0],
        ]
    
    },
    "97963652346":{
        brand:'Costa del mar',
        upc: '97963652346',
        url: {
            "en-us":"/us/costa-del-mar/6s9018-97963652346"
        },
        specs:[
            [2,5,6,7],
            [6,4,9,4],
            [9,3,2],
            [6,3,7,3],
        ]
    
    },
    "8056597884280":{
        brand:'Prada linea rossa',
        upc: '8056597884280',
        url: {
            "en-us":"/us/prada-linea-rossa/ps-07ys-8056597884280"
        },
        specs:[
            [8,8,9,2],
            [8,4,9,5],
            [9,3,2],
            [8,8,3,0],
        ]
    
    }
}

window.ct_wow__search.data.questions = [
    {   
        question:{
            "en":"How would you describe your style?",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        answers:[
            {
                "en":"Bold",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Playful",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Active",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Classic",
                "fr":"..",
                "es":"..",
                "de":"..",
            }
        ]
    },
    {   
        question:{
            "en":"Which word describes your lifestyle best?			",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        answers:[
            {
                "en":"On the road",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Avid reader",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Outdoorsy",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
           
            {
                "en":"City hustler",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
        ]
    },
    {   
        question:{
            "en":"Which colors do you wear the most?",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        answers:[
            {
                "en":"Brights",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Black",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Neutrals",
                "fr":"..",
                "es":"..",
                "de":"..",
            }
        ]
    },
    {   
        question:{
            "en":"What is the most important quality you look for in your sunglasses?",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        answers:[
            {
                "en":"Comfort",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"On-trend",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
           
            {
                "en":"Quality",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            {
                "en":"Low price",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
        ]
    },
    {   
        question:{
            "en":"We're almost there!  Click to find out what we've prepared for you. ",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        answers:[
            {
                "en":"Show me now",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
        ]
    }
]

window.ct_wow__search.data.copy = {
    "loader":{
        "init":{
            "en":"Your quiz  is loading...",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        "restart":{
            "en":"Restarting quiz...",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        "results":{
            "en":"Preparing your results...",
            "fr":"..",
            "es":"..",
            "de":"..",
        }
    },
    "inputs":{
        "next":{
            "en":"next",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        "prev":{
            "en":"back",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
    },
    "results":{
        "title":{
            "en":"Our expert recommendations ",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        "subtitle":{
            "en":"Based on your answers, we think these styles are a perfect fit!",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        "viewAll":{
            "label":{
                "en":"View all",
                "fr":"..",
                "es":"..",
                "de":"..",
            },
            "url":{
                "en-us":"/us/designer-sunglasses",
                "fr":"..",
                "es":"..",
                "de":"..",
            }
            
        },
        "restart":{
            "en":"restart",
            "fr":"..",
            "es":"..",
            "de":"..",
        },
        
    }
    
}







window.ct_wow__search.structure = { 
  device:getDevice(),
  container:null,
  prod_list_container:null,
  prod_list:[],
  shuffleData:{
    missingProd:null,
    missingPos:null
  },
  accessibility_mode: false,
  placeholders:{
    utils:{
      mainCircle:{
        container:null,
        prodsCount:3,
        radius:null
      },
      firstCircle:{
        container:null,
        prodsCount:13,
        radius:null
      },
      secondCircle:{
        container:null,
        prodsCount:14,
      }
    },
    coordinates:[],
 
  },
  init:async function(reopen){
    console.log(reopen)
    window.ct_wow__search.opening = true;
    customLog('WOW SEARCH INIT');

    storeInfo.getInfo();
    
    
    if (!reopen){
      this.container = document.querySelector('#ct_wow__search');
      this.container.classList.add('ct_active');
      this.setCloseHandler();
      this.prod_list_container = document.querySelector('.ct_wow__search__products_list');
      if (this.device === 'D'){
        this.setMouseMove();
      }
    }

    if (this.device != 'D'){
      this.calcHeight();
    }
    await checkData(window.ct_wow__search.data,3000);
    if (window.ct_wow__search.data.loaded === false){
      customLog('WOW SEARCH INIT - TIMEOUT');
      return
    }
    if(!reopen){
      
      loader.init(1500)
    }
    if (!reopen){
      this.buildHtml();
      this.setPlaceholders(true);
      ct_wow__search.inputManagement.init(); 
    }
    this.entry();
   
    window.addEventListener('resize', this.refreshPositionsDebounced);
    this.container.addEventListener('keyup',(e)=>{

      if((e.keyCode === 9 || e.which === 9) && this.accessibility_mode === false){
        accessibility.init(true)
      }
    })

    // if (this.device === "M"){
    //   this.zoomHandler()
    // }
    
    window.ct_wow__search.opening = false;
    window.ct_wow__search.init = true;
  },

  calcHeight:function(){
    window.ct_wow__search.structure.container.style.setProperty("--ct-wow-search-height", `${window.innerHeight}px`);
    window.addEventListener('resize', this.calcHeight);
  },
  buildHtml:function(){
    /**
     * Insert Products in HTML
     */
   
    Object.keys(window.ct_wow__search.data.products).forEach(upc=>{
    
      this.prod_list_container.innerHTML+=`
      <li class="ct_wow_search__product" data-upc="${upc}">
        <div class="ct_wow_search__product__wrap">
          <a href="${storeInfo.getLang(window.ct_wow__search.data.products[upc].url)}" aria-label="shop now ${upc}" data-element-id="WowQuiz_Step1-Product" data-description-="${upc}" tabindex="0">
              <div class="ct_wow_search__img_container">
                  <img src="${window.ct_wow__search.data.products[upc].img?window.ct_wow__search.data.products[upc].img: "https://assets.sunglasshut.com/is/image/LuxotticaRetail/"+ upc+"__STD__shad__fr.png?impolicy=SGH_bgtransparent&width=640"}" alt="${upc}">
              </div>
          </a>
        </div>
      </li>
      `;
      
    });
     /**
     * define start position for each prod
     */
    document.querySelectorAll( '#ct_wow__search .ct_wow_search__product').forEach(elem=>{
      
      this.prod_list.push({
        originElem:elem,
        elem:elem.querySelector('.ct_wow_search__product__wrap'),
        x:elem.getBoundingClientRect().x + elem.clientWidth/2,
        y:elem.getBoundingClientRect().y + elem.clientHeight/2,
        scalingElem:elem.querySelector('.ct_wow_search__product__wrap a'),
        upc: elem.dataset.upc,
        pos:null,
        score:0,
      })
    })
   
   
  },
  refreshProdPos:function(){
    this.prod_list.forEach(prod=>{
      prod.x = prod.originElem.getBoundingClientRect().x + prod.originElem.clientWidth/2,
      prod.y = prod.originElem.getBoundingClientRect().y + prod.originElem.clientWidth/2
    })
  },
  setPlaceholders:function(first){
    /**
     *  set placeholders, to positioning the products
     */
    const setPlaceholderCircle = (first) =>{
      let circles = Object.keys(this.placeholders.utils);
      let comulativePos = 0; 

      /**
       * inserting placeholders in the HTML
       * 3 circle based on the matching values of the aswsers
       * using function also for ripositioning the placeholder on resize
       */
      circles.forEach((circleID,circleN)=>{
        
        let container = this.placeholders.utils[circleID].container = document.querySelector(`#ct_wow__search .ct_wow__search__pos_placeholders__${circleID} `)
        if (first){ // inserting placeholder in the HTML just the first time
          for (let i=0; i<this.placeholders.utils[circleID].prodsCount;i++){
            container.innerHTML+=`
              <div class="ct_wow__search__pos_placeholders__${circleID}__placeholder"></div>
            `
          }
        }
        /**
         * disposing the placeholders in circles
         */
        this.placeholders.utils[circleID].radius = container.clientWidth / 2;
        let coordinates = calcCoordinates(this.placeholders.utils[circleID].prodsCount,this.placeholders.utils[circleID].radius)
        
        container.querySelectorAll('div').forEach((elem,i)=>{
          elem.style.top = coordinates[i].y+'px'
          elem.style.left = coordinates[i].x+'px'

          /**
           * saving each placeholder positions
           * if first set elem, coordinates and position
           * if !first so on risize, refresh coordinates values
           */
          if(first){
            this.placeholders.coordinates.push({
              elem,
              x:elem.getBoundingClientRect().x + elem.clientWidth/2,
              y:elem.getBoundingClientRect().y + elem.clientHeight/2,
              pos: i + comulativePos //adjust the correct position based on the current cirlce
            })
          }
          else{
            this.placeholders.coordinates[i + comulativePos].x = this.placeholders.coordinates[i + comulativePos].elem.getBoundingClientRect().x + this.placeholders.coordinates[i + comulativePos].elem.clientWidth/2;
            this.placeholders.coordinates[i + comulativePos].y = this.placeholders.coordinates[i + comulativePos].elem.getBoundingClientRect().y + this.placeholders.coordinates[i + comulativePos].elem.clientHeight/2;
          }
        })
        comulativePos += this.placeholders.utils[circleID].prodsCount;
      })
    
    }

    setPlaceholderCircle(first);
    
  },

  entry:function(){
    this.container.classList.add('ct_in');
    document.body.style.overflow = 'hidden';
    document.addEventListener('loaderOut', ()=>{ 
      window.ct_wow__search.structure.prod_list_container.classList.add('ct_in')
    })
    
  },
  // shuffle:function(missingValues){
  //   /**
  //    * random positioning the products
  //    * creating a clone of the original prods and pos(placeholders) arrays
  //    * get a random prod and a random pos, then remove the prod positioned and the placeholder used
  //    * recall recursively the function until all prods are positioned
  //    */
  //   if (missingValues === this.prod_list.length-1){    
  //     this.shuffleData.missingProd=[...this.prod_list];
  //     this.shuffleData.missingPos=[...this.placeholders.coordinates];
   
  //   }
  //   if (missingValues < 0){
  //     return
  //   }
   
  //   else{
  //     let prod_n = Math.floor(Math.random()*missingValues);
  //     let pos_n = Math.floor(Math.random()*missingValues);
      
  //     //saving for each prod the position asigned in absolute value [0,1,2...n-1]
  //     let currentProd = this.shuffleData.missingProd[prod_n]
  //     this.prod_list[this.prod_list.indexOf(currentProd)] = {...this.prod_list[this.prod_list.indexOf(currentProd)],elemPos:this.shuffleData.missingPos[pos_n].pos}
      
  //     //positioning the prod 
  //     this.shuffleData.missingProd[prod_n].elem.style.transform = `
  //       translate(
  //         ${this.shuffleData.missingPos[pos_n].x - this.shuffleData.missingProd[prod_n].x }px,
  //         ${this.shuffleData.missingPos[pos_n].y - this.shuffleData.missingProd[prod_n].y }px
  //       )`;
      
  //     //scaling the prod
  //     if (this.shuffleData.missingPos[pos_n].pos < 3){
  //       this.shuffleData.missingProd[prod_n].scalingElem.style.transform = "translate(-50%,-50%) scale(2)";
  //     }
  //     if (this.shuffleData.missingPos[pos_n].pos >= 3 && this.shuffleData.missingPos[pos_n].pos < (this.placeholders.utils.secondCircle.prodsCount + 3) ){
  //       this.shuffleData.missingProd[prod_n].scalingElem.style.transform = "translate(-50%,-50%) scale(1.1)";
  //     }
  //     if( this.shuffleData.missingPos[pos_n].pos >= (this.placeholders.utils.secondCircle.prodsCount + 3) ){
  //       this.shuffleData.missingProd[prod_n].scalingElem.style.transform = "translate(-50%,-50%) scale(.6)";
  //     }
    
      
  //     //removing from the clone arrays the prod positioned and the position used
  //     this.shuffleData.missingProd.splice(prod_n,1)    
  //     this.shuffleData.missingPos.splice(pos_n,1)    
  //     this.shuffle(missingValues-1)
      
  //   }
   
    
  //   if (missingValues === this.prod_list.length-1){    
      
  //     if (this.device != 'D'){
  //       window.ct_wow__search.structure.prod_list_container.style.transform = `scale(1)`
  //       this.prod_list_container.parentNode.scrollTop = 0;
  //       this.prod_list_container.parentNode.scrollLeft = this.prod_list_container.parentNode.clientWidth / 4;
  //     }
      
  //     this.refreshPositions()
  //     window.addEventListener('resize', this.refreshPositionsDebounced);
  //   }
  //   // this.prod_list;
  //   // this.placeholders.coordinates;
  // },
  rankingProducts:function(qIndex,aIndex,aInnerText){
    window.ct_wow__search.inputManagement.answers.state[qIndex] = parseInt( aIndex)
    window.ct_wow__search.inputManagement.answers.tracked[qIndex] = aInnerText;
    // console.log(window.ct_wow__search.inputManagement.answers.tracked);
    //calc each product score
    this.prod_list.forEach(prod=>{
       prod.score = this.calcScore(prod.upc);
    })
    //ordering based on score
    this.prod_list.sort((a,b)=>(a.score < b.score)?1:-1);

    //positioning and scaling products based on order
    this.prod_list.forEach((prod,i)=>{
      prod.elem.style.transform = `
      translate(
        ${this.placeholders.coordinates[i].x - prod.x }px,
        ${this.placeholders.coordinates[i].y - prod.y  }px
      )`;

      if (i < 3){
        prod.scalingElem.style.transform = "translate(-50%,-50%) scale(2)";
      }
      if(i>=3 && i<this.placeholders.utils.secondCircle.prodsCount + 3){
        prod.scalingElem.style.transform = "translate(-50%,-50%) scale(1.1)";
      }
      if(i>=this.placeholders.utils.secondCircle.prodsCount + 3){
        prod.scalingElem.style.transform = "translate(-50%,-50%) scale(.6)";
      }
      prod.scalingElem.dataset.elementId = `WowQuiz_Step${parseInt( qIndex) + 2}-Product`
    });
   
    window.ct_wow__search.inputManagement.results.state = [
      this.prod_list[0].upc,
      this.prod_list[1].upc,
      this.prod_list[2].upc,
      this.prod_list[3].upc,
    ]
  },
  calcScore:function(upc){
    let score = 0;
    window.ct_wow__search.inputManagement.answers.state.forEach((answer,question)=>{
      score += window.ct_wow__search.data.products[upc].specs[question][answer]
    })
    return score
  },
  /**
   * apply debounce function to resize refresh, 
   * so it refresh the position only when the resize it's ended
   */
 
  refreshPositionsDebounced:debounce(()=>{ 
    if (ct_wow__search.structure.device != 'D'){
      ct_wow__search.structure.prod_list_container.parentNode.scrollTop = 0;
      ct_wow__search.structure.prod_list_container.parentNode.scrollLeft = ct_wow__search.structure.prod_list_container.parentNode.clientWidth / 4;
    }
    if (ct_wow__search.structure.container.classList.contains('ct_shuffled')){
      ct_wow__search.structure.setPlaceholders(false);
      ct_wow__search.structure.refreshProdPos();
      ct_wow__search.structure.adjustProdPos();
    }
    
  }),
  refreshPositions:function(){ 
    if (ct_wow__search.structure.device != 'D'){
      ct_wow__search.structure.prod_list_container.parentNode.scrollTop = 0;
      ct_wow__search.structure.prod_list_container.parentNode.scrollLeft = ct_wow__search.structure.prod_list_container.parentNode.clientWidth / 4;
    }
    if (this.container.classList.contains('ct_shuffled')){
      ct_wow__search.structure.setPlaceholders(false);
      ct_wow__search.structure.refreshProdPos();
      ct_wow__search.structure.adjustProdPos();
    }
    
  },
  adjustProdPos:function(){
    
    this.prod_list.forEach((prod,i)=>{
      prod.elem.style.transform = `
      translate(
        ${this.placeholders.coordinates[i].x - prod.x }px,
        ${this.placeholders.coordinates[i].y - prod.y }px
      )`;
    })
  },
  setMouseMove:function(){
    this.prod_list_container.addEventListener('mousemove',e=>{
      this.prod_list_container.style.transform = `translate(${-(e.clientX - window.innerWidth/2)*.01}px,${-(e.clientY - window.innerHeight/2)*.01}px)`
    })
    document.querySelector('#ct_wow__search__input').addEventListener('mouseenter',e=>{
      this.prod_list_container.style.transform = `translate(0,0)`
    })
  },
  // zoomHandler:function(){
  //   var scaling = false;
  //   function touchHandler(event){
  //     if(event.touches.length > 1){
      
  //       console.log('start pinch',event)
  //       scaling = true;
  //       event.preventDefault()
  //     }
  //   }
  //   function touchMove(event){
  //     if(scaling){
  //       console.log('moving',event.scale)

  //       if (event.scale > 1){
  //         window.ct_wow__search_structure.prod_list_container.style.transform = `scale(${Math.min(1.25,event.scale)})`

  //       }else{
  //         window.ct_wow__search_structure.prod_list_container.style.transform = `scale(${Math.max(1,event.scale)})`
  //       }
  //     }
  //   }
  //   function touchEnd(event){
  //     if (scaling) {
  //       console.log('end',event)
  //       scaling = false;
  //     }
  //   }
  //   this.prod_list_container.addEventListener("touchstart", touchHandler, false);
  //   this.prod_list_container.addEventListener("touchmove", touchMove, false);
  //   this.prod_list_container.addEventListener("touchend", touchEnd, false);
    
    

  // },
 
  setCloseHandler:function(){
    document.querySelector('#ct_wow__search__close').addEventListener('click',()=>{
      this.container.classList.remove('ct_in');
      document.body.style.overflow = 'auto'
      //reset structure
      this.resetStructure();
      //reset questions
      window.ct_wow__search.inputManagement.resetQuestions();
      window.removeEventListener('resize',window.ct_wow__search.structure.refreshPositionsDebounced)
      if (this.device != "D"){
        window.removeEventListener('resize',window.ct_wow__search.structure.calcHeight)
      }
    });
   
  },
  resetStructure:function(){
    window.ct_wow__search.structure.prod_list_container.style.transform = `scale(1)`
    this.prod_list_container.querySelectorAll('.ct_wow_search__product__wrap').forEach(prod=>{
      prod.style.transform = "none";
      prod.querySelector('a').style.transform = "translate(-50%,-50%)";
    });
  }
}

window.ct_wow__search.inputManagement = {
  container:null,
  stepsCount:0,
  blockerActive:false,
  progress:{
    container:null,
    current:null,
    state:1,
    style:null
  },
  questions:{
    container:null,
    state:0
  },
  answers:{
    container:null,
    state:[],
    tracked:[],
  },
  buttons:{
    next:null,
    prev:null,
    results:null,
    restart:null
  },
  results:{
    container:null,
    state:[]
  },
  init:function(reopen){
    this.setElements()
    this.fillData();
    this.setButtonsHandler();

  },
  setElements:function(){
    this.container = document.querySelector('#ct_wow__search__input');
    this.progress.container = document.querySelector('.ct_wow__search__input_progress'); 
    this.progress.current = document.querySelector('.ct_wow__search__input_progress .ct_wow__search__input_progress__current'); 
    this.questions.container = document.querySelector('.ct_wow__search__input_questions');
    this.answers.container = document.querySelector('.ct_wow__search__input_answers');
    
    this.buttons.next = document.querySelector('.ct_wow__search__input_commands__next');
    this.buttons.prev = document.querySelector('.ct_wow__search__input_commands__prev');
    this.buttons.restart = document.querySelector('.ct_wow__search__restart');

    this.results.container = document.querySelector('#ct_wow__search__results');

  },
  fillData:function(){
    this.stepsCount = ct_wow__search.data.questions.length;
    this.progress.container.querySelector('.ct_wow__search__input_progress__current + span').innerHTML = ` /${this.stepsCount}`
    this.updateProgress();
    this.setButtonCopy();
    this.updateQuestionCopy();
    this.buildAnswers();
    this.updateAnswer();
    this.setResultsCopy();
  },
  setButtonsHandler:function(){
    this.buttons.prev.addEventListener('click',()=>{this.changeQuestions('prev')});
    this.buttons.next.addEventListener('click',()=>{this.changeQuestions('next')});
    // this.buttons.results.addEventListener('click',()=>{this.showResult()});
    this.buttons.restart.addEventListener('click',()=>{this.restartQuiz()});
  },
  updateProgress:function(dir){
    this.blockerActive = true;
   
    if (dir){
      //set element positioning
      if(this.progress.state != 1){
        analyticsPush({
          'id': 'Impression',
          'Page_Section2': `WowQuiz:Step${this.progress.state}`, 
        })
      }
   
      this.progress.current.dataset.next = this.progress.state; 
      this.progress.container.style.setProperty('--ct-wow-search-input-progress-before-opacity',"1");
      this.progress.container.style.setProperty('--ct-wow-search-input-progress-after-opacity',"0");
      this.progress.current.querySelector('span').style.opacity = 0;
      this.progress.container.style.setProperty('--ct-wow-search-input-progress-before-translate',"translateY(0)");
      if (dir ==='next'){
        this.progress.container.style.setProperty('--ct-wow-search-input-progress-after-translate',"translateY(-100%)");  
      }else{
         this.progress.container.style.setProperty('--ct-wow-search-input-progress-after-translate',"translateY(100%)");  
      }

      setTimeout(()=>{
        // start animation
        this.progress.current.classList.add('ct_animation');
        this.progress.container.style.setProperty('--ct-wow-search-input-progress-after-translate',"translateY(0%)");  
        this.progress.container.style.setProperty('--ct-wow-search-input-progress-after-opacity',"1");  
        if (dir ==='next'){
          this.progress.container.style.setProperty('--ct-wow-search-input-progress-before-translate',"translateY(100%)");
        }else{
          this.progress.container.style.setProperty('--ct-wow-search-input-progress-before-translate',"translateY(-100%)");
        }
        this.progress.container.style.setProperty('--ct-wow-search-input-progress-before-opacity',"0");
      },10)
     
    }
    
    setTimeout(()=>{
      this.progress.container.querySelector('.ct_wow__search__input_progress__current span').innerHTML = this.progress.state;
      this.progress.current.dataset.current =this.progress.state;
      this.progress.current.querySelector('span').style.opacity = 1;
      this.progress.current.classList.remove('ct_animation');
      this.blockerActive = false;
    },410)
    
  
   
    
   
  },
  setButtonCopy:function(){
    this.buttons.restart.innerHTML = storeInfo.getLang(window.ct_wow__search.data.copy.results.restart);
  },
  updateQuestionCopy:function(){
    this.questions.container.querySelector('h3').style.opacity = 0;
    setTimeout(()=>{
      this.questions.container.querySelector('h3').innerHTML = storeInfo.getLang( window.ct_wow__search.data.questions[this.progress.state - 1].question);
      this.questions.container.querySelector('h3').style.opacity = 1;
    },400)
   
  },
  buildAnswers:function(){
    let answers="";
  
    window.ct_wow__search.data.questions.forEach((question,qindex)=>{
      answers+=`<div class="ct_wow__search__input_answer"  data-answer="${qindex}">`
      question.answers.forEach((answer,aindex)=>{
        answers += `
        <div class="ct_wow__search__button_wrap">
          <button class="ct_cta ct_cta__black " data-q="${ qindex }" tabindex="-1" data-a="${aindex}" data-element-id="WowQuiz_Step${qindex + 1}-Answer" data-description="${answer["en"]}">${storeInfo.getLang( answer)}</button>
        </div>
        `
      })
      answers+="</div>"
    })
    this.answers.container.innerHTML = answers;
    this.answersButtonHandler();
  },
  answersButtonHandler:function(){
    this.answers.container.querySelectorAll('button').forEach(button=>{
      button.addEventListener('click',()=>{
        if (!button.classList.contains('ct_active')){
          //check if is the button in the last step
          if (this.progress.state < this.stepsCount  ){
            if (!window.ct_wow__search.structure.container.classList.contains('ct_shuffled')){
              window.ct_wow__search.structure.container.classList.add('ct_shuffled')
            }
            window.ct_wow__search.structure.refreshPositions()
            window.ct_wow__search.structure.rankingProducts(button.dataset.q,button.dataset.a,button.dataset.description);
            
            if(button.parentNode.parentNode.querySelector('button.ct_active')){
              button.parentNode.parentNode.querySelector('button.ct_active').classList.remove('ct_active');
            }
            button.classList.add('ct_active');
            button.parentNode.parentNode.classList.add('ct_aswered');
            this.container.classList.add('ct_can_proceed');
            this.changeQuestions('next');
          
          }else{
            this.showResult()
          }
        }

      })
    })
  },
  updateAnswer:function(){
    if(this.answers.container.querySelector('.ct_wow__search__input_answer.ct_active')){
      this.answers.container.querySelector('.ct_wow__search__input_answer.ct_active').classList.remove('ct_active');
    }
    this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state - 1}"]`).classList.add('ct_active')
  },
  setResultsCopy:function(){
    this.results.container.querySelector('h2').innerHTML = storeInfo.getLang(window.ct_wow__search.data.copy.results.title);
    this.results.container.querySelector('p').innerHTML = storeInfo.getLang(window.ct_wow__search.data.copy.results.subtitle);
    this.results.container.querySelector('.ct_cta.ct_cta__black').innerHTML = storeInfo.getLang(window.ct_wow__search.data.copy.results.viewAll.label);
    this.results.container.querySelector('.ct_cta.ct_cta__black').href = storeInfo.getLang(window.ct_wow__search.data.copy.results.viewAll.url);
  },
  changeQuestions:function(dir){
  
    if (!this.blockerActive){
    
      if (dir ==='next'){
        this.progress.state+= 1;
        if (this.progress.state === this.stepsCount && !this.buttons.next.classList.contains('ct_disabled') ){
          this.buttons.next.classList.add('ct_disabled');
          if (this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains('ct_aswered')){
            this.container.classList.add('ct_last_step')
          }
        }
      
        if (!this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains('ct_aswered')){
          this.container.classList.remove('ct_can_proceed');
        }
        if(this.buttons.prev.classList.contains('ct_disabled')){
          this.buttons.prev.classList.remove('ct_disabled')
        }
        if (this.progress.state === 1 ){
          this.buttons.next.classList.remove('ct_disabled');
          this.buttons.prev.classList.add('ct_disabled');
          this.container.classList.remove('ct_last_step')
        } 
        
      }else{
        this.progress.state-= 1;
        if (this.progress.state === 1 && !this.buttons.prev.classList.contains('ct_disabled')){
          this.buttons.prev.classList.add('ct_disabled')
        }
        if(this.buttons.next.classList.contains('ct_disabled')){
          this.buttons.next.classList.remove('ct_disabled');
          this.container.classList.remove('ct_last_step')
        }
        if (this.answers.container.querySelector(`.ct_wow__search__input_answer[data-answer="${this.progress.state-1}"]`).classList.contains('ct_aswered')){
          this.container.classList.add('ct_can_proceed');
        }
       
      }
      this.updateProgress(dir);
      this.updateQuestionCopy();
      this.updateAnswer();
    }
  
  },
  showResult:function(){
    analyticsPush({
      'id': 'Impression',
      'Page_Section2': 'WowQuiz:Results',
      'Content_Answers': formatDataAnalytics(window.ct_wow__search.inputManagement.answers.tracked,'|'), // i valori vanno passati sempre in inglese
      'Products': formatDataAnalytics(window.ct_wow__search.inputManagement.results.state,'object'),
    })
    this.results.container.classList.add('ct_in');
    this.results.container.classList.add('ct_loader_in');
    loader.loaderIn(2000,"results");
  
    this.setResult();
    setTimeout(()=>{
      this.results.container.classList.remove('ct_loader_in')
    },2000)
  },
  setResult:function(){
    let productsContainer = this.results.container.querySelector('#ct_wow__search__results_products');
    productsContainer.innerHTML=''
   
   
    this.results.state.forEach(upc=>{
      
      productsContainer.innerHTML+=`
      <a href="${storeInfo.getLang(window.ct_wow__search.data.products[upc].url)}" class="ct_wow__search__results_product" data-element-id="WowQuiz_Results-Product" data-description="${upc}">
          <img src="${window.ct_wow__search.data.products[upc].img?window.ct_wow__search.data.products[upc].img: "https://assets.sunglasshut.com/is/image/LuxotticaRetail/"+ upc+"__STD__shad__fr.png?impolicy=SGH_bgtransparent&width=640"}" alt="${upc}">
          <span>${window.ct_wow__search.data.products[upc].brand}</span>
        </a>
      `
    })

  },
  restartQuiz:function(){
    loader.loaderIn(1000,"restart");
  
    setTimeout(()=>{
      window.ct_wow__search.structure.resetStructure();
      this.resetQuestions();
      this.results.container.classList.remove('ct_in')
      this.results.container.classList.add('ct_loader_in')
    },400)
    
  },
  resetQuestions:function(){
    this.progress.state = 0;
    this.answers.container.querySelectorAll('button.ct_active').forEach(button=>button.classList.remove('ct_active'))
    this.answers.container.querySelectorAll('.ct_aswered').forEach(aswered=>aswered.classList.remove('ct_aswered'))
    this.answers.state = [];
    this.container.classList.remove('ct_can_proceed');
    window.ct_wow__search.structure.container.classList.remove('ct_shuffled');
    this.results.container.classList.remove('ct_in');
    
    this.changeQuestions('next')
  }
  
}





document.querySelector('#cta1').addEventListener('click',()=>{
  window.ct_wow__search.init ?
  window.ct_wow__search.structure.init({reopen:true}):
  window.ct_wow__search.structure.init()
})
