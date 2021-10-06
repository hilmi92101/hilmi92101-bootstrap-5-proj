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

                <div :class="{active: sidebarIsActive}" class="main">
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

                    <div class="card-box">
                        <div v-for="(card,index) in cards" class="custom-card-1">
                            <div>
                                <div class="numbers">{{ card.number }}</div>
                                <div class="card-name">{{ card.name }}</div>
                            </div>
                            <div class="icon-box">
                                <ion-icon :name="card.icon"></ion-icon>
                            </div>
                        </div> 
                    </div>
                    
                    <div class="details">
                        <div class="recent-orders">
                            <div class="custom-card-header">
                                <h2>Recent Orders</h2>
                                <a href="#" class="custom-button-1">View All</a>
                            </div>

                            <table class="custom-table-1">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Price</td>
                                        <td>Payment</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order,index) in orders">
                                        <td>{{ order.name }}</td>
                                        <td>{{ order.price }}</td>
                                        <td>{{ order.payment }}</td>
                                        <td>
                                            <span class="status delivered">
                                                {{ order.status }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

                sidebarIsActive: false,
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

                cards: [
                    {
                        name: 'Daily Views',
                        number: '1, 503',
                        icon: 'eye-outline',
                    },
                    {
                        name: 'Sales',
                        number: '80',
                        icon: 'cart-outline',
                    },
                    {
                        name: 'Comments',
                        number: '284',
                        icon: 'chatbubbles-outline',
                    },
                    {
                        name: 'Earning',
                        number: '$7, 842',
                        icon: 'cash-outline',
                    },

                ],

                orders: [

                    {
                        name: 'PS4',
                        price: '$1, 500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS5',
                        price: '$2, 500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS3',
                        price: '$1, 000',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
                    },
                    {
                        name: 'PS2',
                        price: '$500',
                        payment: 'Paid',
                        status: 'Delivered',
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