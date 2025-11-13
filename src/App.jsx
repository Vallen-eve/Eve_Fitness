import './App.css'
import Header from './components/Layout/Header'
import Hero from './components/Sections/Hero'
import Features from './components/Sections/Features'
import Wrapper from './components/Common/Wrapper'
import Display from './components/Sections/Display'
import About from './components/Sections/About'
import Services from './components/Sections/Services'
import Card from './components/Common/Card'
import Testimonials from './components/Sections/Testimonials'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
import Stats from './components/Sections/Stats'
import Signup from './components/Sections/Signup'
import Login from './components/Sections/Login'
import Home from './components/Sections/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  

  return (

    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>

                <Header />
          <Hero />
          <Wrapper className="absolute top-135 left-0 right-0 mx-auto w-11/12 md:w-9/12 lg:w-7/12">
            <Stats />
          </Wrapper>
          <Wrapper className="">
            <Features />
          </Wrapper>
          <Wrapper className="">
            <Display />
          </Wrapper>
          <Wrapper className="">
            <About />
          </Wrapper>
          <Wrapper className="">
            <Services />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              <Card 
              image={"card{1}.jpg"}
              title={"Exercise ball"}
              dis_price={"30.00"}
              price={"40.00"}
              
             
            />

            
            
            <Card 
            image={"card{2}.jpg"}
            title={"Exercise bike"}
            dis_price={"100.00"}
            price={"250.00"}
             
            />

            <Card 
            image={"card{3}.jpg"}
            title={"Exercise Dumbbells"}
            dis_price={"15.00"}
            price={"25.00"}
             
            />

            <Card 
            image={"card{4}.jpg"}
            title={"Exercise Kettlebell"}
            dis_price={"30.00"}
            price={"45.00"}
             
            />

            <Card 
            image={"card{5}.jpg"}
            title={"Exercise hex dumbbells"}
            dis_price={"65.00"}
            price={"50.00"}
              
            />

            <Card
            image={"card{7}.jpg"}
            title={"Exercise Sports Bra"}
            dis_price={"6.00"}
            price={"12.00"} 
             
            />
            <Card
            image={"card{8}.jpg"}
            title={"Gym attire"}
            dis_price={"12.00"}
            price={"18.00"} 
              
             
            />
            <Card
            image={"card9.jpg"}
            title={"Exercise Yoga Mat"}
            description={""}
            dis_price={"20.00"}
            price={"24.60"}

            />

            </div>
          
            

          </Wrapper>

          <Wrapper className="">
            <Testimonials />
          </Wrapper>
          <Wrapper className="bg-violet-500 py-10">
            <Contact />
          </Wrapper>

          <Wrapper className="bg-violet-950">
            <Footer />
          </Wrapper>

          </>
        }/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        
      

      </Routes>
    </BrowserRouter>


    
    
   

    
  )
}

export default App
