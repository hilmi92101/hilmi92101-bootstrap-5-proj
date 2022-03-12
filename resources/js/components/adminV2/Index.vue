<template>   
    <div class="admin-v2">
        <div class="container-admin-v2">  
            <Sidebar></Sidebar>

            <main>
                <h1>{{ title }}</h1>

                <div class="date">
                    <input type="date">
                </div>

                <div class="insights">
                    <div class="sales">
                        <span class="material-icons-sharp">analytics</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Sales</h3>
                                <h1>$25, 024</h1>
                            </div>
                            <div class="svg-progress svg-sales">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div class="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    <div class="expenses">
                        <span class="material-icons-sharp">bar_chart</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Expenses</h3>
                                <h1>$14, 160</h1>
                            </div>
                            <div class="svg-progress svg-expenses">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div class="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    <div class="income">
                        <span class="material-icons-sharp">stacked_line_chart</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Income</h3>
                                <h1>$10, 864</h1>
                            </div>
                            <div class="svg-progress svg-income">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div class="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                </div>

                <div class="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product No.</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders">
                                <td>{{ order.name }}</td>
                                <td>{{ order.id }}</td>
                                <td>{{ order.payment }}</td>
                                <td class="warning">{{ order.status }}</td>
                                <td class="primary">Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
            </main>

            <div class="right-section">
                <div class="top">
                    <button>
                        <span class="material-icons-sharp">menu</span>
                    </button>
                    <div class="theme-toggler">
                        <span class="material-icons-sharp active">light_mode</span>
                        <span class="material-icons-sharp">dark_mode</span>
                    </div>
                    <div class="profile">
                        <div class="info">
                            <p>Hey, <b>Daniel</b></p>
                            <small class="text-muted">Admin</small>
                        </div>
                        <div class="profile-photo">
                            <img :src="paths.vendor + images.profile" alt="">
                        </div>
                    </div>
                </div>
                <div class="recent-updates">
                    <h2>Recent Updates</h2>
                    <div class="updates">
                        <div  v-for="update in updates" class="update">
                            <div class="profile-photo">
                                <img :src="update.profileImg" alt="">
                            </div>
                            <div class="message">
                                <p v-html="update.text"></p>
                                <small class="text-muted">{{ update.createdAt }}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sales-analytics">
                    <h2>Sales Analytics</h2>
                    <!-- ITEM ONLINE -->
                    <div class="item online">
                        <div class="icon">
                            <span class="material-icons-sharp">shopping_cart</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>ONLINE ORDERS</h3>
                                <small class="text-muted">Last 24 hours</small>
                            </div>
                            <h5 class="success">+39%</h5>
                            <h3>3849</h3>
                        </div>
                    </div>
                    <!-- ITEM OFFLINE -->
                    <div class="item offline">
                        <div class="icon">
                            <span class="material-icons-sharp">local_mall</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>OFFLINE ORDERS</h3>
                                <small class="text-muted">Last 24 hours</small>
                            </div>
                            <h5 class="danger">-17%</h5>
                            <h3>1100</h3>
                        </div>
                    </div>
                    <!-- CUSTOMERS -->
                    <div class="item customers">
                        <div class="icon">
                            <span class="material-icons-sharp">person</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>NEW CUSTOMERS</h3>
                                <small class="text-muted">Last 24 hours</small>
                            </div>
                            <h5 class="success">+25%</h5>
                            <h3>849</h3>
                        </div>
                    </div>
                    <!-- ADD NEW PRODUCT -->
                    <div class="item add-product">
                        <div>
                            <span class="material-icons-sharp">add</span>
                            <h3>Add Product</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>   
</template>   
<script>   

    import Sidebar from './includes/Sidebar';

    export default {   
        components: {   
            Sidebar,
        },   
        props: {   
        },  
    	data() {   
            return {   
                title: 'Dashboard',
                paths: {
                    vendor: `/vendors/admin-v2/`,
                },
                images: {
                    profile: `images/profile-1.jpg`,
                    profile2: `images/profile-2.jpg`,
                },
                orders: [
                    {
                        name: 'Mini Drone',
                        id: '21123',
                        payment: 'Due',
                        status: 'Pending',
                    },
                    {
                        name: 'Mini Drone',
                        id: '21123',
                        payment: 'Due',
                        status: 'Pending',
                    },
                    {
                        name: 'Mini Drone',
                        id: '21123',
                        payment: 'Due',
                        status: 'Pending',
                    },
                    {
                        name: 'Mini Drone',
                        id: '21123',
                        payment: 'Due',
                        status: 'Pending',
                    },
                    {
                        name: 'Mini Drone',
                        id: '21123',
                        payment: 'Due',
                        status: 'Pending',
                    },

                ],
                updates:[
                    {
                        profileImg: '/vendors/admin-v2/images/profile-2.jpg',
                        text: `<b>Mike Tyson</b> received his order of Night Lion tech GPS drone.`,
                        createdAt: '2 Minutes Ago', 
                    },
                    {
                        profileImg: '/vendors/admin-v2/images/profile-3.jpg',
                        text: `<b>Mike Tyson</b> received his order of Night Lion tech GPS drone.`,
                        createdAt: '2 Minutes Ago', 
                    },
                    {
                        profileImg: '/vendors/admin-v2/images/profile-4.jpg',
                        text: `<b>Mike Tyson</b> received his order of Night Lion tech GPS drone.`,
                        createdAt: '2 Minutes Ago', 
                    },

                ],
            }   
        },    
        created() {   
        },   
    	methods: {   
              
        },   
        computed: {   
        },   
        filters: {   
              
        }   
           
    }   
</script>

<style scoped>

</style>