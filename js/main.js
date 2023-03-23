 const { createApp } = Vue

  createApp({
    data() {
      return {
            arrayEmails : []
      }
    },
    methods: {

       getEmails(){
        for(let i = 0; i < 10; i++){
         
            const newMail = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((e) => {
                this.arrayEmails.push(e.data.response);
            }); 
        }
       }
       
    },

    mounted(){
        this.getEmails();
    }

  }).mount('#app')