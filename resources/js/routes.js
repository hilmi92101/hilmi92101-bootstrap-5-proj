import THome from './components/tests/Home';  
import TAbout from './components/tests/About'; 

import LandingV1 from './components/landingV1/Index'; 
import LandingStarbucks from './components/landingStarbucks/Index'; 
import AdminV1 from './components/adminV1/Index'; 
import AdminV2 from './components/adminV2/Index'; 

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

        { 
            path:'/landing-starbucks', 
            component: LandingStarbucks 
        },
        { 
            path:'/admin-v1', 
            component: AdminV1 
        },
        { 
            path:'/admin-v2', 
            component: AdminV2 
        },
    ] 
}