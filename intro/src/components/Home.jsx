import React from "react";
import '../home.css'
import Street from './Street'

const Home = ()=>{
    // const isLoading = false;
    const age = 70;
   return(
        <section>
            <Street name = 'awe' houses = {12} year = {2002}/>
            <Street name ='alice' houses = {43} year = {2004}/>
            <Street name = 'waheed' houses = {23} year = {2009}/>
            
            
        {/* ternary operator */}
            {age > 20 ? (
                <h1>he is matured</h1>
            ):(
               <div>
                 <h1>he is not matured</h1>
                 <p>he still needs to be trained</p>
               </div>
            )}
            {/* && */}
            {age > 20 && <p>i love codding</p>}
            
            <h1 style={{color:'red',fontSize:'45px'}}>coding is intrigueing</h1>
            <p className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit nihil in expedita aliquid. Laudantium, odit temporibus! Vel, facere rem? Repudiandae quia excepturi
                  voluptatibus tempora architecto magnam amet iste cum!</p>
        </section>
    )
}

export default Home





















// conditional rendering using if statement
/*import React from "react";
import '../home.css'

const Home = ()=>{
    // const isLoading = false;
    const age = 7;
    if(age < 20){
        return <h1>he is not qualified</h1>
    }

   else if(age > 60 && age < 70){
        return (
            <h1>he is qualified</h1>
        )
    }

   else if(age > 70 && age < 80){
        return <h1>He can be the president</h1>
    }
   
   return(
        <section>
            <h1 style={{color:'red',fontSize:'45px'}}>coding is intrigueing</h1>
            <p className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit nihil in expedita aliquid. Laudantium, odit temporibus! Vel, facere rem? Repudiandae quia excepturi
                  voluptatibus tempora architecto magnam amet iste cum!</p>
        </section>
    )
}

export default Home
*/