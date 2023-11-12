import React, { useEffect, useState } from 'react';
import './repos.css'
import Portfolio from '../portfolio/Portfolio';

const Repos = () => {
  

const apiUrl = "https://api.github.com/users/";


const [getUser, setUserData] = useState([]);
const [topRepos, setTopRepos] = useState([]);
const [userName, setUserName] = useState('musyonchez')

useEffect(() => {
  setUserName('');
}, []);

async function getApiData() {
  const resp = await fetch(apiUrl + userName);
  const respData = await resp.json();

  setUserData(respData);
} 


async function reposlist() {
    const reposResp = await fetch(apiUrl + userName + '/repos');
    const reposRespData = await reposResp.json();
  
    if (Array.isArray(reposRespData)) {
      const topReposData = reposRespData
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 12);
  
      setTopRepos(topReposData);
    } else {
      // Handle the case where reposRespData is not an array
      console.error('Unexpected response format:', reposRespData);
    }
  }
  



  useEffect(() => {

  getApiData();}
  ,[])

  useEffect(() => {
      
      reposlist();
  },[])

  return (
    <div className='repos-container'>
      <div className='repos-title'>
        <span className='repos-top-word'>github</span>
        <span className='repos-bottom-word'>GITHUB</span>
      </div>
      <div className='repos-search'>
        <label htmlFor="search">
        <input type="text" id='search' placeholder='enter github-username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button className='github-search' onClick={() => { getApiData(); reposlist(); }} >Search</button>
        </label>
      </div>
      <div className='repos-header'>
  <a href="https://github.com/Musyonchez" target="_blank">
    <img src={getUser.avatar_url} alt="" />
  </a>
  <a href="https://github.com/Musyonchez" target="_blank">
    <h1>{getUser.name}</h1>
  </a>
</div>

      <p>{getUser.bio}</p>
      <div className='repos-button'>
        <button><a href="https://github.com/Musyonchez" target="_blank">Followers: {getUser.followers}</a></button>
        <button><a href="https://github.com/Musyonchez" target="_blank">Following: {getUser.following}</a></button>
        <button><a href="https://github.com/Musyonchez" target="_blank">Repos: {getUser.public_repos}</a></button>
      </div>
      <div className='repos-repos'>
        {topRepos.map((reposItem) => (
          <button>
            <a key={reposItem.id} className='reposItem' href="https://github.com/Musyonchez" target="_blank">
            {reposItem.name}
            </a>
          </button>
          
        )

        )}
      </div>
    </div>

  )
}

export default Repos

