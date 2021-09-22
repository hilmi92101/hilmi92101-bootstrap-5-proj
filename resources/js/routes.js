import THome from './components/tests/Home';  
import TAbout from './components/tests/About'; 

import LandingV1 from './components/landingV1/Index'; 

export default { 
    mode: 'history', 
    routes: [ 
        { 
            path:'/', 
            component: THome 
        }, 
        { 
            path:'/about', 
            component: TAbout 
        }, 


        { 
            path:'/landing-v1', 
            component: LandingV1 
        },
    ] 
}