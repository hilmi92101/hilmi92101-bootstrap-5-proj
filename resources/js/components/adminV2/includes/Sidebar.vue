<template>   
    <aside>  
        <div class="top">
            <div class="logo">
                <img :src="paths.vendor +  images.logo" alt="">
                <h2>EGA<span class="danger">TOR</span></h2>
            </div>
            <div class="close">
                <span class="material-icons-sharp">close</span>
            </div>
        </div>
        <div class="sidebar">
            <a v-for="link in links" href="#" :class="isActive(link.isActive)">
                <span class="material-icons-sharp">{{ link.icon }}</span>
                <h3>{{ link.title }}</h3>
                <span v-if="link.count > 0" class="message-count">{{ link.count }}</span>
            </a>
        </div>
    </aside>   
</template>   
<script>   

    export default {   
        components: {   
        },   
        props: {   
        },  
    	data() {   
            return {   
                paths: {
                    vendor: `/vendors/admin-v2/`,
                },
                images: {
                    logo: `images/logo.png`,
                },
                links: [
                    {
                        icon: 'grid_view',
                        title: 'Dashboard',
                        count: 0,
                        isActive: true,
                    },
                    {
                        icon: 'person_outline',
                        title: 'Customers',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'receipt_long',
                        title: 'Orders',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'insights',
                        title: 'Analytics',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'mail_outline',
                        title: 'Messages',
                        count: 26,
                        isActive: false,
                    },
                    {
                        icon: 'inventory',
                        title: 'Products',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'report_gmailerrorred',
                        title: 'Reports',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'settings',
                        title: 'Settings',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'add',
                        title: 'Add Product',
                        count: 0,
                        isActive: false,
                    },
                    {
                        icon: 'logout',
                        title: 'Logout',
                        count: 0,
                        isActive: false,
                    },
                ],
            }   
        },    
        created() {   
        },   
    	methods: {   
            isActive(isActive){
                if(isActive){
                    return `active`;
                }
            }
        },   
        computed: {   
        },   
        filters: {   
              
        }   
           
    }   
</script>

<style scoped>

</style>