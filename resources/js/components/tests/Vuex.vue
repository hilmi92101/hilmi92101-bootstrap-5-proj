<template>   
    <div>  
        <h1>Vuex</h1>  

        <p>{{ currentLang }}</p>

    </div>   
</template>   
<script>  
    import { mapGetters } from 'vuex';

    export default {   
        components: {   
        },   
        props: {   
        },  
    	data() {   
            return {   
                   
            }   
        },    
        created() {   
        },   
    	methods: {   
              
        },   
        computed: {   
            ...mapGetters('Sample', [ 
                'currentLang', 
            ]),
        },   
        filters: {   
              
        }   
           
    }   
</script>