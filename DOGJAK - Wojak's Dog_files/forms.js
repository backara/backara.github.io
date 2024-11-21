function isSpForm() {
    // check load sp form
    if ($('form[class^=sp-]').length) {
        const spForm = $('form[class^=sp-]'),
            spInputs = $(spForm).find('input'),
            spButton = $(spForm).find('button');
        // mirror inputs
        $('.w-input[name^=Email], .w-input[name^=email]').on('keyup', function() {
            $(spInputs[0]).val($(this).val());
        });

        // remove classes for animation
        $('[form-submitted]').removeClass('active');
        // after submited wf form
        $('form[name^=wf-form-]').submit(function(e) {
            let formSubmitted = $(e.target);
            $(formSubmitted).find('input:not(:submit)').val('');
            // add classes to animate elements
            $(formSubmitted).find('[form-submitted]').addClass('active');
            setTimeout(() => {
                // return do default elements
                $(formSubmitted).find('[form-submitted]').removeClass('active');
            }, 4000);
            // submit sp form
            $(spButton).click();
            console.log('form was submitted');
            return false
        });
        console.log('isSpForm launched');


        // open remodal when user is leaving page
        let modal = $('[data-remodal-id=form]').remodal();
        let once = true;
        if (typeof modal !== 'undefined' && modal !== false) {
            $(document).bind("mouseleave", function(e) {
                if (e.pageY - $(window).scrollTop() <= 1 && once) {
                    once = false;
                    modal.open();
                }
            });
        }
        $(document).on('opened', '[data-remodal-id=form]', function() {
            once = false;
        });

    } else {
        // rerun fun if sp form haven't loaded
        setTimeout(isSpForm, 1000)
    }
}
isSpForm();