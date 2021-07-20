const text = document.querySelector(".text");
        const button1 = document.querySelector(".task1");
        const button2 = document.querySelector(".task2");
        const button3 = document.querySelector(".task3");

        function task1(){
            text.innerHTML = " ";
            const stringArr1 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr2 = ["item1", "item2", "item3", "item4", "item5"];
            const stringArr3 = ["item1", "item2", "item3", "item4"];
            const stringArr4 = ["item1", "item2", "item3"];
            const stringArr5 = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

                for (let i of stringArr1){
                    text.innerHTML += i;
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";

                for (let i of stringArr2){
                    text.innerHTML += i;
                    text.innerHTML += "  ";
                }
                text.innerHTML += "<br>";

                for (let i of stringArr3){
                    text.innerHTML += i;
                    text.innerHTML += "  ";
                }
                text.innerHTML += "<br>";

                for (let i of stringArr4){
                    text.innerHTML += i;
                    text.innerHTML += "  ";
                }
                text.innerHTML += "<br>";

                for (let i of stringArr5){
                    text.innerHTML += i;
                    text.innerHTML += "  ";
                }
                text.innerHTML += "<br>";
        }

        function task2(){
            text.innerHTML = " ";
            const stringArr1 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr2 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr3 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr4 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr5 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr6 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr7 = ["item1", "item2", "item3", "item4", "item5", "item6"];

                for (let i in stringArr1){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr1[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr2){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr2[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr3){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr3[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr4){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr4[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr5){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr5[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr6){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr6[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
                for (let i in stringArr7){
                    text.innerHTML += i;
                    text.innerHTML += "). ";
                    text.innerHTML += stringArr7[i];
                    text.innerHTML += "  ";   
                }
                text.innerHTML += "<br>";
        }

        function task3(){
            text.innerHTML = " ";
            const stringArr1 = ["item1", "item2", "item3", "item4", "item5"];
            const stringArr2 = ["item1", "item2", "item3", "item4", "item5", "item6"];
            const stringArr3 = ["item1", "item2", "item3", "item4"];
            const stringArr4 = ["item1", "item2", "item3", "item4", "item5"];
            const stringArr5 = ["item1", "item2", "item3"];
            let length1;
            for(let i = 0; i < stringArr1.length; i++){
                length1 = i;       
            }
            text.innerHTML += `Length of the 1st array is ${length1+1}`
            text.innerHTML += "<br>";

            let length2;
            for(let i = 0; i < stringArr2.length; i++){
                length2 = i;       
            }
            text.innerHTML += `Length of the 2nd array is ${length2+1}`
            text.innerHTML += "<br>";

            let length3;
            for(let i = 0; i < stringArr3.length; i++){
                length3 = i;       
            }
            text.innerHTML += `Length of the 3rd array is ${length3+1}`
            text.innerHTML += "<br>";

            let length4;
            for(let i = 0; i < stringArr4.length; i++){
                length4 = i;       
            }
            text.innerHTML += `Length of the 4th array is ${length4+1}`
            text.innerHTML += "<br>";

            let length5;
            for(let i = 0; i < stringArr5.length; i++){
                length5 = i;       
            }
            text.innerHTML += `Length of the 5th array is ${length5+1}`
            text.innerHTML += "<br>";
            
            
        }