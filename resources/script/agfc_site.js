$('.agfc_centerpiece')
    .transition(
    {
        animation: 'drop',
        duration: 1000

    })
    ;


$('.agfc_nav_wrap')
    .transition(
    {
        animation: 'swing down',
        duration: 1000
    })
    ;


// $('.agfc_first_sub_icon')
// .hover()
// .transition(
//     {

//     }
// );

// $(document).ready(function() {
//     $('.agfc_first_sub_icon').hover(function(){
//         $(this).transition('bounce');
//     }, function(){});
// });

  $(document).ready(()=> {
    $('.agfc_first_sub_icon').hover(function(){
        console.log(this);
        $(this).transition('bounce');
    }, ()=>{});
});



    // $('.agfc_first_sub_icon').hover((x)=>{
    //      $(this).transition('jiggle');
    // }, ()=>{});
