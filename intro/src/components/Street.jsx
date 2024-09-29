import React from 'react'
import Button from './Button'
const Street = ({name,houses,year})=>{
    return(
        <section>

            <div>
                <h3>i love coding</h3>
                <Button content='refresh'/>
       

            </div>
            <h1>{name}</h1>
            <p>houses:{houses}</p>
            <p>{year}</p>
            <p>populated</p>
            {year > 2000 ? (
                <h1>the house is old</h1>
            ):(
                <h2>the house is just built</h2>
            )}
        </section>
    )
}
export default Street

































































// import React from 'react'
// const Street =({name,houses})=>{
//     return(
//       <section>
//         <h1>{name}</h1>
//         <p>houses:{houses}</p>
//         <p>populated</p>
//         {houses > 20 ?  (
//            <h1>populated</h1>
//         ):(
//             <h2>not populated</h2>
//         )}
//       </section>
//     )

// }
