const Slider = {
    imageIndex: 0,
    body: document.body,

    imageControlKeyboard: function(){
        console.log(Slider.imageIndex);
        this.body.addEventListener('keydown', function(e){
            if (e.which === 39){
                Slider.controlRight();
            }else if (e.which === 37){
                Slider.controlLeft();
            }
        });
    },

    controlRight: function(){
        if(this.imageIndex === 0){
            $('#slider').fadeOut(1000);
            this.imageIndex++;
            console.log(Slider.imageIndex);
        }else if (this.imageIndex === 1){
            $('#slider2').fadeOut(1000);
            this.imageIndex++;
            console.log(Slider.imageIndex);
        }
    },

    controlLeft: function(){
        if(this.imageIndex === 1){
            $('#slider').fadeIn(1000);
            this.imageIndex--;
            console.log(Slider.imageIndex);
        }else if (this.imageIndex === 2){
            $('#slider2').fadeIn(1000);
            this.imageIndex--;
            console.log(Slider.imageIndex);
        }
    }
};
Slider.imageControlKeyboard();