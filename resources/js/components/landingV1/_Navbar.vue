<template>   

</template>  

<script>   
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
        },   
        filters: {   
              
        }   
           
    }   
</script>

<style scoped>

.navbar {
	background-color: #fcfafb;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 0.875rem;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}

.navbar .navbar-brand {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
}

.navbar .logo-image img {
    width: 126px;
	height: 32px;
}

.navbar .logo-text {
	color: #223150;
	font-weight: 700;
	font-size: 1.875rem;
	line-height: 1rem;
	text-decoration: none;
}

.offcanvas-collapse {
	position: fixed;
	top: 3.25rem; /* adjusts the height between the top of the page and the offcanvas menu */
	bottom: 0;
	left: 100%;
	width: 100%;
	padding-right: 1rem;
	padding-left: 1rem;
	overflow-y: auto;
	visibility: hidden;
	background-color: #fcfafb;
	transition: visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;
	transition: transform .3s ease-in-out, visibility .3s ease-in-out;
	transition: transform .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;
}

.offcanvas-collapse.open {
	visibility: visible;
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
}

.navbar .navbar-nav {
	margin-top: 0.75rem;
	margin-bottom: 0.5rem;
}

.navbar .nav-item .nav-link {
	padding-top: 0.625rem;
	padding-bottom: 0.625rem;
	color: #5e6576;
	text-decoration: none;
	transition: all 0.2s ease;
}

.navbar .nav-item.dropdown.show .nav-link,
.navbar .nav-item .nav-link:hover,
.navbar .nav-item .nav-link.active {
	color: #0092ff;
}

/* Dropdown Menu */
.navbar .dropdown .dropdown-menu {
	animation: fadeDropdown 0.2s; /* required for the fade animation */
}

@keyframes fadeDropdown {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
	}
}

.navbar .dropdown-menu {
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	border: none;
	background-color: #fcfafb;
}

.navbar .dropdown-item {
	padding-top: 0.625rem;
	padding-bottom: 0.625rem;
	color: #5e6576;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 0.875rem;
	text-decoration: none;
}

.navbar .dropdown-item:hover {
	background-color: #fcfafb;
	color: #0092ff;
}

.navbar .dropdown-divider {
	width: 100%;
	height: 1px;
	margin: 0.5rem auto 0.5rem auto;
	border: none;
	background-color: #d1d1d1;
}
/* end of dropdown menu */

.navbar .navbar-toggler {
	padding: 0;
	border: none;
	font-size: 1.25rem;
}

</style>