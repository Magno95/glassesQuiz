export const storeInfo ={
    getInfo:function(){
        window.ct_wow__search.data.storeInfo.lang = "en-us"
        window.ct_wow__search.data.storeInfo.lang_short = "en"
    },
    getLang:function(field){
        try {
            let keys = Object.keys(field);
            if (keys.includes(window.ct_wow__search.data.storeInfo.lang)){
                return field[window.ct_wow__search.data.storeInfo.lang]
            }
            if (keys.includes(window.ct_wow__search.data.storeInfo.lang_short)){ 
                return field[window.ct_wow__search.data.storeInfo.lang_short]
            }
            return field['en']
        } catch (error) {
            return error
        }
      
    }

}