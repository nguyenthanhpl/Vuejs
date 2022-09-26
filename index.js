var vueInstance = new Vue({
    el: '#obj',
    data: {
        noidung: 'Nguyễn Tuấn Thành',
    },
    methods: {
        changeValue : function(event){
            this.noidung= event.target.value;
        }

    },
    
    el:'#price',
    data:{
        price:'20000'
    },methods:{
        formatPrice(){
            var number = this.price;
            return new Intl.NumberFormat('de-DE',{style: 'currency',
            currency:'VND'}).format(number);
            console.log(this.price);
        }
    }
    });
    console.log(vueInstance);