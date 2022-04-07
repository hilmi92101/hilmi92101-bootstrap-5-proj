<template>   
    <nav id="navbar" :class="collapseNav()" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div class="container">

            <a class="navbar-brand logo-image" href="index.html"><img src="/images/logo.svg" alt="alternative"></a> 

            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ms-auto navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#header">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#details">Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li :class="isDrop" class="nav-item dropdown" @mouseover="dropdownHovered" @mouseleave="dropdownNotHovered">
                        <a :class="isDrop" class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                        <ul :class="isDrop" class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="article.html">Article Details</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="btn-outline-sm" href="#contact">Contact us</a>
                </span>
            </div>
        </div>
    </nav>
</template>   
<script>   
    export default {   
        components: {   
        },   
        props: {   
        },  
    	data() {   
            return {  
                topNavCollapse: false, 


                showDropdown: false,
            }   
        },    
        created() {  
            this.checkIfScrolled(); 
        },   
    	methods: {   
            checkIfScrolled() {
                window.onscroll = () => {
                    //console.log(window.pageYOffset);
                    if(window.pageYOffset > 0){
                        this.topNavCollapse = true;
                    } else {
                        this.topNavCollapse = false;
                    }
                }
            },
            collapseNav(){

                if(this.topNavCollapse){
                    return `top-nav-collapse`;
                } else {
                    return ``;
                }

            },


            dropdownHovered(){
                this.showDropdown = true;
                console.log(this.showDropdown);
            },
            dropdownNotHovered(){
                this.showDropdown = false;
                if(this.containerHoveredStatus){
                    this.showDropdown = true;
                } else {
                    this.showDropdown = false;
                }
            },


            
              
        },   
        computed: {   
            isDrop(){
                if(this.showDropdown){
                    return `show`;
                } else {
                    return ``;
                }
            }
        },   
        filters: {   
              
        }   
           
    }   
</script>