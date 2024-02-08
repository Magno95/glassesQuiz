export const accessibility={
    init:function(active){
        if (active){
            window.wow__search.structure.accessibility_mode = true;
            window.wow__search.structure.prod_list_container.querySelector('.wow_search__product:nth-child(2) a').focus();
            window.wow__search.structure.container.classList.add('wow__search__accessibility_mode')
        }else{
            console.log('not active')
        }
    } 
}