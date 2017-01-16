angular.module("index", []);
angular.module("index").controller("contactController", function($scope) {
  $scope.servicos = [
      { value: 0, label: 'Instalação, Manutenção de Ar condicionado' },
      { value: 1, label: 'Consultoria Técnica'                       },
      { value: 2, label: 'Solicitar orçamento'                       }
  ];
  $scope.contact = {
    nome: 'André Leite', tipoServ: 1, email: 'pelomedrado@gmail.com',
    desc: 'Descrição', tel: '9-7966 3600'
  };
  $scope.enviar = function() {
    console.log($scope.contact);
  };
});

$(document).ready(function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());

        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");

        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");

        });
    });

});
