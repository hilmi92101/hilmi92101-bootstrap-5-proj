<template>   

    <div class="custom-nav-1">
		<nav id="navbarExample" :class="collapseNav()" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
			<div class="container">

				<!-- Image Logo -->
				<a class="navbar-brand logo-image" href="index.html">
					<img src="vendors/landing-v1/images/logo.svg" alt="alternative">
				</a> 

				<!-- Text Logo - Use this if you don't have a graphic logo -->
				<!-- <a class="navbar-brand logo-text" href="index.html">Nubis</a> -->

				<button @click.prevent="toggleNavbar()" class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div :class="collapseOffCanvas()" class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul class="navbar-nav ms-auto navbar-nav-scroll">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#header">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#services">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#details">Details</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#features">Features</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
							<ul class="dropdown-menu" aria-labelledby="dropdown01">
								<li><a class="dropdown-item" href="article.html">Article Details</a></li>
								<li><div class="dropdown-divider"></div></li>
								<li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li>
								<li><div class="dropdown-divider"></div></li>
								<li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
							</ul>
						</li>
					</ul>
					<span class="nav-item">
						<a class="btn-solid-sm" href="#contact">Get quote</a>
					</span>
				</div> <!-- end of navbar-collapse -->
			</div> <!-- end of container -->
		</nav>
	
	
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
                scrolledToBottom: false,
                topNavCollapse: false,
                offCanvas: false,
            }   
        },    
        created() {  

            //this.checkIfHitBottom();
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

            checkIfHitBottom() {
                window.onscroll = () => {
                    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

                    console.log(bottomOfWindow);

                    if (bottomOfWindow) {
                        this.scrolledToBottom = true // replace it with your code
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

            collapseOffCanvas(){
                if(this.offCanvas){
                    return `open`;
                } else {
                    return ``;
                }
            },

            toggleNavbar(){
                this.offCanvas = !this.offCanvas;
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