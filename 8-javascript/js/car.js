var brand = document.getElementById('brand');
var reference = document.getElementById('reference');
var cc = document.getElementById('cc');
var model = document.getElementById('model');
var color = document.getElementById('color');

// Vars Buttons
var btn_on = document.getElementById('btn-on');
var btn_off = document.getElementById('btn-off');
var btn_backward = document.getElementById('btn-backward');
var btn_pause = document.getElementById('btn-pause');
var btn_forward = document.getElementById('btn-forward');

var car = {
    brand: 'Bugatti',
    reference: 'VEYRON 16.4',
    cc: 1200,
    model: '2015',
    color: 'Patent Blue V',
    image: 'imgs/bugatti.png',
    
    //Metodos
    info: function(){
        brand.inner = this.brand;
        reference.innerText = this.reference;
        cc.innerText = this.cc + " cc"        ;
        model.innerText = this.model;
        color.innerText = this.color;
    },
    on: function(){
        console.log('on');
    },
    off: function(){
        console.log('off');
    },
    stop: function(){
        console.log('forward');
    },
    backward: function(){
        console.log('backward');
    }
    
};
car.info()