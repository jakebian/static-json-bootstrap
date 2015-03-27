(function () {

    $(document).ready(init)

    var landingEmails;

    function init() {
        new WOW().init();
        InitializeScrollit();
        initFirebase();
        $('#submitEmail').on('submit', handleFormSubmit);
    }

    function handleFormSubmit(evt) {
        evt.preventDefault();
        var email = $('#emailInput').val();
        if (isEmailValid(email)) {
            submitEmail(email);
        }
        else {
            $('.footer-info').text('Make sure you type a valid email!');
        }
    }

    function submitEmail(email) {
        landingEmails.push(email, function () {
            $('#submitEmail').fadeOut();
            $('.footer-title').text('All set!')
            $('.footer-info').text(getSuccessMessage(email))
        });
    }

    function getSuccessMessage(email) {
        return "We'll notify you at " + email + " when registration opens";
    }
    function initFirebase() {
        landingEmails = new Firebase('https://cutc-landing.firebaseio.com/landingEmails');
    }
    function InitializeScrollit() {
        $.scrollIt();
    }

    function isEmailValid(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

})();