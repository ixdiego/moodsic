 console.log( 'ready!' );

            // click on a nav item - write click handler on .nav

            $( '.nav' ).click(function() {
                // alert( "Handler for .click() called." );



                // figure out which one i clicked on (home, about, contact) - if .nav hasClass A/B/C

                if ( $(this).hasClass('home') ) {
                    console.log("I am home");
                    // do something
                    // apply .is-active class to the one i clicked on - addClass is-active
                     $('.nav').removeClass('is-active');

                     $(this).addClass('is-active');

                    // remove .is-active class to any other .nav items - removeClass .is-active
                    // $('.nav').removeClass('is-active');
                }

                else if ( $(this).hasClass('about') ) {
                    // do something
                    console.log("about");

                     $('.nav').removeClass('is-active');

                     $(this).addClass('is-active');
            
                }

               else if ( $(this).hasClass('contact') ) {
                    // do something
                    console.log("contact me");

                    $('.nav').removeClass('is-active');


                    $(this).addClass('is-active');
                }



               


            });

            