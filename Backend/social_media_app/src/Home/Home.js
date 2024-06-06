import React from 'react'
import './Home.css';
import Header from '../Header';
import SideRow from '../SideRow';
import Feed from '../Feed';
import Post from '../Post';
import Login from '../Login';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectItems } from '../Slices';
import { store } from '../Store';

function Home() {
    const [posts, setPosts] = useState([]);
    const state = store.getState();
    console.log(state)
    useEffect(() => {
        const fetchPosts = async () => {


            const res = await axios.get('http://localhost:8800/api/posts/timeline/all/618c0366c83be1cda4d3fe0f')
            setPosts(res.data)


            console.log(res)
            /*   setPosts(
                 res.data.sort((p1, p2) => {
                   return new Date(p2.createdAt) - new Date(p1.createdAt);
                 })
               );
               */
        };
        fetchPosts();
    }, []);
    console.log(posts)

    return (
        <div className="app">
            <Header></Header>
            <div className="feeds">



                <SideRow></SideRow>

                <Feed ></Feed>



            </div>
            <div>

                {
                    posts.map((p) => (
                        //  console.log(p)
                        <Post key={p.id} post={p}> </Post>
                    ))
                }

            </div>


        </div>
    )
}

export default Home
