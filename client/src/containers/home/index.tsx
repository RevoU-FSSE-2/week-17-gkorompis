import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';
import ProfileContainer from './ProfileContainer';

/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ProfileDocument {
    username: string
}
interface ProfileState {
    loading: boolean,
    profileState?: ProfileDocument[]
    error?: Error
}
interface Stores {
  profile: ProfileState
}

/************************************* COMPONENT */ 

const HomePage = () => {
  const dispatch= useDispatch();
  const profile = useSelector((state:Stores)=>state.profile);
  const {loading, error, profileState} = profile;
  // console.log({loading, error, profileState});

  useEffect(()=>{
    dispatch(profileAction() as unknown as AnyAction);
    // console.log("### profileState", {profileState});
  }, [dispatch]);
  return (
    <div className="profile-page page">
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p> error...</p>
      ) :  (
        <ProfileContainer data={profileState}/>
      ) 
      }
    </div>
  );
}
export default HomePage;
