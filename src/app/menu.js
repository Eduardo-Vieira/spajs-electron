/**
 *  Seta página pelo menu
 *  @param {*} page 
 */
function openPage(page) {
    setPage(page); 
}

/**
* Menu do Sistema
*/
// Array objeto menu
var menu = [
    {name:'Home', ico:'dashboard', page:'home/home', active:'active'},
    {name:'Lista', ico:'gift', page:'lista/lista', active:''},
    {name:'Pessoas', ico:'user', page:'pessoas/pessoas', active:''}
];