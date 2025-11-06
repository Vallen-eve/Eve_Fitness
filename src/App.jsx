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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card 
              title="Personalized Workout Plans"
              description="Transforming homes into personalized sanctuaries that reflect your lifestyle and taste."
              image="/bg.jpg"
            />

            
            
            <Card 
              title="Nutrition & Meal Guidance"
              description="Designing innovative and functional commercial spaces that drive business success."
              image="/bg.jpg"
            />

            <Card 
              title="Community Challenges"
              description="Designing innovative and functional commercial spaces that drive business success."
              image="/bg.jpg"
            />

            <Card 
              title="Mind & Motivation"
              description="Designing innovative and functional commercial spaces that drive business success."
              image="/bg.jpg"
            />

            <Card 
              title="Progress Tracking"
              description="Designing innovative and functional commercial spaces that drive business success."
              image="/bg.jpg"
            />

            <Card 
              title="Progress Tracking"
              description="Designing innovative and functional commercial spaces that drive business success."
              image="/bg.jpg"
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
        
      

      </Routes>
    </BrowserRouter>


    
    
   

    
  )
}

export default App
