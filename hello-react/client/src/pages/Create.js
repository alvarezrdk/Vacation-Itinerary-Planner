import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Create = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
    <div>
      <input> Location </input>
      <input> Start Date </input>
      <input> End Date </input>
      <input> Guests </input>
    </div>
    </main>
  );
};

export default Create;
