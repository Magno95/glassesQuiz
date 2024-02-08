export const storeInfo ={
    getInfo:function(){
        window.wow__search.data.storeInfo.lang = "en-us"
        window.wow__search.data.storeInfo.lang_short = "en"
    },
    getLang:function(field){
        try {
            let keys = Object.keys(field);
            if (keys.includes(window.wow__search.data.storeInfo.lang)){
                return field[window.wow__search.data.storeInfo.lang]
            }
            if (keys.includes(window.wow__search.data.storeInfo.lang_short)){ 
                return field[window.wow__search.data.storeInfo.lang_short]
            }
            return field['en']
        } catch (error) {
            return error
        }
      
    }

}