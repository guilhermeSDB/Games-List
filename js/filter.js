$(document).ready(function(){

     // Add um elemento ao array
     function addElement(array, elem){
        array.push(elem)     
        refreshText($actualFiltering,$arrayFilters)  
    }

    // Remove um elemento do array
    function removeElement(array, elem) {
        var index = array.indexOf(elem); // Pesquisa o elemento e pega o index do mesmo
        if (index > -1) {
            array.splice(index, 1);
        }
        refreshText($actualFiltering,$arrayFilters)
    }

    // Refresh o Text de categoria em cima dos items
    function refreshText(elem, array){
        elem.text(array)
    }

    function lenghtClass(){
        let items = $('.selectFilter').length
        return items
    }

    let $actualFiltering = $('.filter__active') 
    let $indexItem = $actualFiltering.text() // Pega o texto atual
    let $arrayFilters = [] //Cria um Array vazio
    let $liList = $('ul.filter__ul li'); //Pega a lista de LI
    let $firstItemLi = $liList[0] // Pega o primeiro item da LISTA
    let $firstItemLiValue = $liList[0].childNodes[0].nodeValue.trim() //Pega o texto do primeiro item da lista
    

    $liList.on('click',function(){ 
        
        //Verifica se o item que voce esta clickando é diferente de "Todas"
        if(this.childNodes[0].nodeValue.trim() != 'Todas'){
            // Verifica se o item ja tem a classe selectFilter
            if(!$(this).hasClass('selectFilter') ){
                $(this).addClass('selectFilter')
                $indexItem = this.childNodes[0].nodeValue.trim()
                addElement($arrayFilters, $indexItem)          
                $($firstItemLi).removeClass('selectFilter')
            }else{
                $(this).removeClass('selectFilter')
                $indexItem = this.childNodes[0].nodeValue.trim()
                removeElement($arrayFilters,$indexItem)  
                if(lenghtClass() == 0 ){ //Verifica se não tem mais classes com SelectFilter
                    $($actualFiltering).text($firstItemLiValue)
                    $($firstItemLi).addClass('selectFilter') 
                }
            }    
        }else{ 
            console.log($('.selectFilter').length)
            $($liList).removeClass('selectFilter')
            $($firstItemLi).addClass('selectFilter')
            $arrayFilters = []
            $($actualFiltering).text($firstItemLiValue)
        }
    })

})