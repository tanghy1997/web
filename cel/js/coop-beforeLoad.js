$(function(){
    var thisId = window.location.hash;
    if(!thisId || thisId == '#index_3'){
        $('#hz').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
    }else if(thisId == '#index_2'){
        $('#lxfs').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
    }

    $('#hz').click(function(){
        $('#hz').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
        $('#lxfs').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
    })
    $('#lxfs').click(function(){
        $('#lxfs').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
        $('#hz').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
    })
})