const {createApp}= Vue;

createApp({
    data(){
        return{
            compito : '',
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
            
        }
    }
}).mount('#app');