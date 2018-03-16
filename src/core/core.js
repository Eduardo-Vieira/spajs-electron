var paramPage = {};
var http = new XMLHttpRequest;
var xhr = new XMLHttpRequest;

function ready(callback){
   return document.addEventListener("DOMContentLoaded",  callback());
}

function docjs(params) {
  return document.getElementById(params);
}

/**
 * Contruir menu
 * @param {*} menu 
 */
function setMenu(menu){
    var html = '';
    menu.forEach(function(element){
        html += '<li '.concat('class="menuItem ',element.active,'" ','onClick="openPage(',"'",element.page,"'",')"> <a href="#"> <i class="fa fa-',element.ico,' fa-lg"></i> ',element.name,'</a></li>');
    });

    return html;
}

/**
 * Get dos parâmetros
 * @param {*} paramName 
 */
function getParam(paramName){
    return paramPage[paramName]; 
}

function setActiveMenu(pageName){
    var exitenomenu = false;
    //verificar se exite no menu
    menu.forEach(function(e) {
      if(e.page == pageName){ exitenomenu = true;}
    });

    // se exite muda o status
    if(exitenomenu){    
        menu.forEach(function(e) {
            e.active = (e.page == pageName) ? 'active':'';
        });
    }
    
    return setMenu(menu); 
}

/**
 * Abrir paginas e enviar parametros para ela
 * @param {*} page 
 * @param {*} param 
 */
function setPage(page,param=''){    
    var p = page.split('/');

    //set menu active
    docjs('menu-content').innerHTML = setActiveMenu(page);    

    docjs('pageRoot').innerHTML = '';

    (param !='')? paramPage = param : paramPage = {};
   
    xhr.addEventListener("load",function(){  
        docjs("pageRoot").innerHTML = this.responseText;
        // Criando o elemento script da página
        var element = document.createElement('script');
        element.setAttribute('src','src/pages/'+p[0]+'/'+p[1]+'.js');
        //Inserir no DOM
        docjs("pageRoot").appendChild(element);
    });

    xhr.open('GET','src/pages/'+p[0]+'/'+p[1]+'.html');

    xhr.send();
}

function openApp(el,pageRootName)
{
    var rxhr = new XMLHttpRequest;
    rxhr.addEventListener("load",function(){  
        docjs('root').innerHTML = this.responseText;
        //Seta página root
        setPage(pageRootName);
    });
    rxhr.open('GET','./src/app/app.html');
    rxhr.send();
}