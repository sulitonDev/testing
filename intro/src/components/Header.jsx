import React from 'react';

const Header = ()=>{
    const name = 'Suliton';
    const age = 67;
    const person = {
        firstName:'Yunus Sulaiman',
        lastName: 'Ibrahim',
        level:400
    }
    
    return(
        <header>
            <h1>Konga</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <h2>{name}</h2>
            <p>{age}</p>
            <div>
                <h3>user</h3>
                <h4>full name: {person.firstName} {person.lastName}</h4>
                <p>level: {person.level}</p>
                <p>{7 + 9 }</p>
            </div>
        </header>
    )
}

export const Button = () =>{
    return(
      <button>click</button>
    )
}

// export {Button };
export default Header;