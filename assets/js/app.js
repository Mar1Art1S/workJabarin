/* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    document.getElementsByTagName("body")[0].onload = function(){ vpSize();}
        document.getElementsByTagName("body")[0].onresize = function(){ vpSize();}

        var cnt = 0;
        function vpSize() {
                cnt += 1;
            var w = document.documentElement.clientWidth,
                h = document.documentElement.clientHeight,
                screenW = screen.width,
                screenH = screen.height;

            //document.getElementById("p1").innerHTML = w + "x" + h;
            document.getElementById("vpPara").innerHTML = "Viewport Resolution :" +  w + "x" + h;
            document.getElementById("vpSpan").innerHTML = "resize called "+ cnt +" times";
            document.getElementById("screenPara").innerHTML = "Screen Resolution :" +  screenW + "x" + screenH;
        }

