import THome from './components/tests/Home';  
import TAbout from './components/tests/About'; 

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
    ] 
}