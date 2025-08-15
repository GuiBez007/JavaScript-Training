let result = window.document.getElementsByTagName('p')[0]
        let gender = null
        let img = window.document.getElementById('iimg')
        let today_year = new Date().getFullYear()

        function verification() {
            gender = window.document.querySelector('input[name="gender"]:checked')
            if (gender === null)
                window.alert('Inform your data first!')
            else
                calcular()
        }

        function calcular(){
            gender = window.document.querySelector('input[name="gender"]:checked')
            gender = gender.value
            let year = window.document.getElementById('iyear')
            let age = today_year - year.value
            
            // Shows the result
            result.innerText = `I'm ${gender} and I'm ${age} years old` 

            // Images load
            img.style.height = "200px";
            img.style.width = "200px";

            if (age < 18) {
                if (gender === "Male")
                    img.style.backgroundImage = "url('Images/boy.png')"
                else
                    img.style.backgroundImage = "url('Images/girl.png')"
            } else {
                if (gender === "Female")
                    img.style.backgroundImage = "url('Images/woman.png')"
                else
                    img.style.backgroundImage = "url('Images/man.png')"
            }
        }