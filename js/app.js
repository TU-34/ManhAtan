$(function(){


    $("#menu_burger").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("activ");
        $("#nav").toggleClass("activ");
    });

    // $("[data-collapse]").on("click", function(event){
    //     event.preventDefault();

    //     var $this =$(this),
    //         blockId = $this.data('collapse');
    //         console.log( blockId);
        

    //     $this.toggleClass("active");
    //     // $(blockId).slideToggle();
    // });


    //----------- accdrdion---------------------

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');
        console.log( blockId);
    

        $this.toggleClass("active");
    });



    $(".intro_buttom1").on("click", function(event){
        event.preventDefault();

        var elementButton = document.getElementById("bt1");
        elementButton.classList.add("activation");

        var element = document.getElementById("act1");
        element.classList.add("activation");

        // -------------------dell

        var predtButton = document.getElementById("bt2");
        predtButton.classList.remove("activation");

        var predElement = document.getElementById("act2");
        predElement.classList.remove("activation");
       
    });

    $(".intro_buttom2").on("click", function(event){
        event.preventDefault();

        var elementButton = document.getElementById("bt2");
        elementButton.classList.add("activation");

        var element = document.getElementById("act2");
        element.classList.add("activation");

        // -------------------dell

        var predtButton = document.getElementById("bt1");
        predtButton.classList.remove("activation");

        var predElement = document.getElementById("act1");
        predElement.classList.remove("activation");
    });



});