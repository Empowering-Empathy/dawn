import React, { useState, Fragment }from 'react'
import User from '../../components/users/User'
import { useQuery, gql } from '@apollo/client';

const GET_ONE_PAIR = gql`
  query GetOnePair {
    info(where: { radio3: 1 } limit: 1) {
      user_name
      user_age
      user_position
  }
 }`;

 export default function One() { 
    const { loading, error, data:{GetOnePair:info} } = useQuery(GET_ONE_PAIR);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    
    return (info && info.map(user =>(
        <User name={user.user_name} age={user.user_age} job={user.user_position}/>
    )))
  

    
}



