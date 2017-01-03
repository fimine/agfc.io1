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

// $(document).ready(() => {
//     $('.agfc_first_sub_icon').hover(function () {
//         $(this).transition('bounce');
//     }, () => { });
// });


$('.agfc_nav_wrap')
  .sticky({
     
    context: '#Header1'
  })
   console.log(this);
;


// go to anchor:
function scrollToAnchor() {
    $('.agfc_button_link').click(function () {
        console.log(this);

        // //Animate
        console.log($(this).attr('href'));
        console.log($($(this).attr('href')));

        event.preventDefault();
        var $this = $(this),
            thisOffset = $this.offset(),
            thisTop = thisOffset.top;

        $('html, body').animate({
            scrollTop: thisTop
        }, 400);
        return false;
    });
    //   $('.scrollTop a').scrollTop(); // TODO
}
scrollToAnchor();
