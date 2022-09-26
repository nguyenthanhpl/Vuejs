var VueInstance = new Vue({
    el: '#app',
    data: {
        counter: 0,
        clientX: 0,
        clientY: 0,
    },
    methods:{
        handleClick(number, event){
            console.log('click',event.target),
            this.counter+=number;
        },
        handlemousemove(e){
            console.log(e),
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleSubmit(e){
            console.log(e);
        },
        handlemousemoveChild(e){
            //e.stopPropagation()
            console.log('handlemousemoveChild',e.target);
        }
    }
})