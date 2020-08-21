import React from 'react'
import User from '../../components/users/User'
import { useQuery, gql } from '@apollo/client';

const GET_PEOPLE = gql`
  query getPeople {
    info(where: { radio3: 2 } limit: 7) {
      user_name
      user_age
      user_position
  }
 }`;
export default function SmallGroup() {
    const { loading, error, data:{getOnePair:info} } = useQuery(GET_PEOPLE);
  
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
