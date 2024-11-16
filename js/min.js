



let aboutOffset = $("#About").offset().top;

$(window).scroll(function(){
    let windowScroll =$(window).scrollTop() ;

   if(windowScroll > aboutOffset -70 ){

   $("#min-nav").css('backgroundColor' , 'rgba(0,0,0,0.7)');
   $("#min-nav").css('padding-left' , ' 60px');
   $("#min-nav").css('padding-right' , ' 60px');
   $("#buttonUp").fadeIn(500);

   }else{
    $("#min-nav").css('backgroundColor' , 'transparent');
    $("#min-nav").css('padding-left' , ' 0');
    $("#min-nav").css('padding-right' , ' 0');
    $("#buttonUp").fadeOut(500);
   }
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$("a[href^='#']").click((e)=>{
    let linkHref= $(e.target).attr('href');
    $(e.target).css('border-bottom','solid 2px red')
    $(e.target).parent().siblings().children().css('border-bottom','none')
   let sectionOffset =$(linkHref).offset().top;

$("html,body").animate({scrollTop:sectionOffset} , 2000)


    // $(window).scrollTop(portfolioOffset)

    
})


$("#buttonUp").click(()=>{
    $("html,body").animate({scrollTop:0} , 1000)
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(".sidbar i").click(()=>{
let colorBox = $('.box').outerWidth(true);
if($('.sidbar').css('left') == '0px'){
    $(".sidbar").animate({left:-`${colorBox}`} , 1000);
}else{
    $(".sidbar").animate({left:'0px'} , 1000);
}
})



//  let colorBoxS =$(".color-box") ;
//  colorBoxS.eq(0).css('backgroundColor' , '#09c')
//  colorBoxS.eq(1).css('backgroundColor' , 'teal')
//  colorBoxS.eq(2).css('backgroundColor' , 'red')
//  colorBoxS.eq(3).css('backgroundColor' , 'orange')
//  colorBoxS.eq(4).css('backgroundColor' , 'lightgreen')


//  colorBoxS.click((e)=>{
//  let bgColor = $(e.target).css('backgroundColor');
//  $(".change ").css({color:bgColor})
//  })


let colorBoxs = $('.box span');
for (let  index= 0; index <  colorBoxs.length;  index++) {
    colorBoxs.eq( index).css('backgroundColor' , grtRandemColor()) 
    
}

function grtRandemColor(){
    let r = Math.random()*255 ;
    let g = Math.random()*255 ;
    let b = Math.random()*255 ;
 return `rgb(${r} , ${g} ,${b})`
}

colorBoxs.click((e)=>{
     let bgColor = $(e.target).css('backgroundColor');
     $(".change ").css({color:bgColor})
     })


$(".img-item").click((e)=>{
  let ImgSrc = $(e.target).attr('src') ;
  $(".banner").css('background-image',  `url(${ImgSrc})`)
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).ready(()=>{

    $("#loading #spinner").fadeOut(1000 ,()=>{
        $('#loading ').fadeOut(1000 ,()=>{
            $('#loading ').remove() ;
        $("body").css('overflow-y' , 'auto')      
        })
    });
    
})







