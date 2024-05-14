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
            delete this.Todo[i]
        }
    }
}).mount('#app');