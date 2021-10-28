<template>   
    <div class="landing-starbucks">  

        <section>

            <!-- Circle -->
            <div :style="circleStyleObject" class="circle"></div>


            <!-- Header -->
            <header>
                <a href="#">
                    <img class="logo" src="/images/landing-starbucks/logo.png" alt="">
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>

            <!-- Content -->
            <div class="content">
                <!-- Text Box -->
                <div class="textBox">
                    <h2>
                        It's not just Coffee <br>
                        It's 
                        <span>Starbucks</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae quam eu quam dapibus malesuada quis et ex. Etiam risus metus, consequat nec tempor vitae, scelerisque ut nibh. 
                    </p>
                    <a href="#">Learn More</a>
                </div>

                <!-- Image Box -->
                <div class="imgBox">
                    <img 
                        :src="bannerImg" class="starbucks" alt=""
                    >
                </div>
            </div>
            
            <!-- Thumb -->
            <ul class="thumb">
                <li 
                    @click="runSlider('/images/landing-starbucks/img1.png', '#017143')"
                >
                    <img src="/images/landing-starbucks/thumb1.png" alt="">
                </li>
                <li 
                    @click="runSlider('/images/landing-starbucks/img2.png', '#eb7495')"
                >
                    <img src="/images/landing-starbucks/thumb2.png" alt="">
                </li>
                <li 
                    @click="runSlider('/images/landing-starbucks/img3.png', '#d752b1')"
                >
                    <img src="/images/landing-starbucks/thumb3.png" alt="">
                </li>
            </ul>

            <!-- Social Media -->
            <ul class="sci">
                <li><a href=""><img src="/images/landing-starbucks/facebook.png" alt=""></a></li>
                <li><a href=""><img src="/images/landing-starbucks/twitter.png" alt=""></a></li>
                <li><a href=""><img src="/images/landing-starbucks/instagram.png" alt=""></a></li>
            </ul>

            

        </section>
       
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
                bannerImg: `/images/landing-starbucks/img1.png`,
                circleStyleObject: {
                    background: '#017143',
                },
            }   
        },    
        created() {   
        },   
    	methods: { 

            runSlider(imgUrl, circleColor){
                this.bannerImg = imgUrl;

                this.changeCircleColor(circleColor);
            },

            changeCircleColor(color){
                this.circleStyleObject.background = color;
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