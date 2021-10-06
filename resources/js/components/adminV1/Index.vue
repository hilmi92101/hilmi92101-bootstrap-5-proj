<template>   
    <div>  
    
        <div class="custom-admin-1">
            <div class="custom-container-1">
                <div :class="{active: sidebarIsActive}" class="navigation">
                    <ul>
                        <li v-for="(link,index) in links" @mouseover="mouseOverLink(link)" :class="link.classes">
                            <a href="#">
                                <span class="icon">
                                    <ion-icon :name="link.icon"></ion-icon>
                                </span>
                                <span class="title">{{ link.title }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="main">
                    <div class="topbar">
                        <div @click="toggleSidebar()" class="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        <div class="search">
                            <label>
                                <input type="text" placeholder="Search here">
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>
                        <div class="user">
                            <img :src="images.user" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>   
</template>   
<script>   


    export default {   
        components: {   
        },   
        props: {   
        },  
    	data() {   
            return {   

                sidebarIsActive: true,
                links: [

                    {
                        icon: 'logo-apple',
                        title: 'Brand Name',
                        classes: '',
                    },
                    {
                        icon: 'home-outline',
                        title: 'Dashboard',
                        classes: '',
                    },
                    {
                        icon: 'people-outline',
                        title: 'Customers',
                        classes: '',
                    },
                    {
                        icon: 'chatbubble-outline',
                        title: 'Message',
                        classes: '',
                    },
                    {
                        icon: 'help-buoy-outline',
                        title: 'Help',
                        classes: '',
                    },
                    {
                        icon: 'settings-outline',
                        title: 'Settings',
                        classes: '',
                    },
                    {
                        icon: 'lock-closed-outline',
                        title: 'Password',
                        classes: '',
                    },
                    {
                        icon: 'log-out-outline',
                        title: 'Sign Out',
                        classes: '',
                    },
                    
                    
                ],

                images: {
                    user: '/images/user-icon-1.png',
                }
            }   
        },    
        created() {   
        },   
    	methods: {   

            toggleSidebar(){
                this.sidebarIsActive = !this.sidebarIsActive;
            },

            mouseOverLink(link){
                this.links.forEach(function(item) {
                    item.classes = '';
                });
                link.classes = 'hovered';
            },
              
        },   
        computed: {   
        },   
        filters: {   
              
        }   
           
    }   
</script>

<style scoped>

</style>