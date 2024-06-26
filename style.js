<script type="text/javascript">
  $(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,  // Number of slides to show at a time
      slidesToScroll: 1,  // Number of slides to scroll at a time
      autoplay: true,  // Autoplay option
      autoplaySpeed: 2000,  // Autoplay speed in milliseconds
      dots: true,  // Show dots navigation
      responsive: [
        {
          breakpoint: 768,  // Responsive breakpoints
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  });
</script>