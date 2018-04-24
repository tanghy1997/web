$(function(){
    var thisId = window.location.hash;
    console.log(thisId)
    if(!thisId){
        $('#sm').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
    }else if(thisId == '#index_2'){
        $('#jzg').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
    }else if(thisId == '#index_3'){
        $('#member').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
    }

    $('#sm').click(function(){
        $('#sm').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
        $('#jzg').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
        $('#member').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
    })
    $('#jzg').click(function(){
        $('#jzg').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
        $('#sm').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
        $('#member').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
    })
    $('#member').click(function(){
        $('#member').css({
            'background': '#89B92A',
            'color': '#fff',
            'border': '1px solid #F2F2F2',
        })
        $('#sm').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
        $('#jzg').css({
            'border': '1px solid #C1C1C1',
            'background': '#fff',
            'color':'#989898',
        })
    })
})