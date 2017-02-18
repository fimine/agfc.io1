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

var target = $("#MoreInfo");

    $('.agfc_button_link').click(function () {

        // //Animate
        console.log($(this).attr('href'));

console.log(target);

        event.preventDefault();
        var $this = $(this),
            thisOffset = $this.offset(),
            thisTop = thisOffset.top + 300;

        $('html, body').animate({
            scrollTop: thisTop
        }, 400);
        return false;
    });
    //   $('.scrollTop a').scrollTop(); // TODO
}
scrollToAnchor();
