const {createApp}= Vue;

createApp({
    data(){
        return{
            og:{
                compito : '',
                Boolean:true,
            },
            Todo:[],
            show:false
        }
    },
    methods:{
        addLista(){
            if(this.compito!=''){
                this.Todo.push(this.compito)
            }
        },
        remove(i){
             this.Todo.splice(i,1);
            
        },
        change(value){
            this.Boolean=!this.Boolean
            console.log(this.Boolean)
            return this.Boolean

        }
       
    }
}).mount('#app');