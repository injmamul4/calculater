
 let input = document.getElementById("input-box");
        let buttons = document.querySelectorAll("button");
        let string = "";

        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                if (e.target.innerHTML == "=") {
                    string = eval(string);
                    input.value = string;
                }

                else if(e.target.innerHTML == "AC") {
                    string = "";
                    input.value = string;
                }

                else if(e.target.innerHTML == "DEL"){
                    string = string.substring(0, string.length - 1);
                    input.value = string;
                }

                else {
                    string += e.target.innerHTML;
                    input.value = string
                }
            })
        })
    