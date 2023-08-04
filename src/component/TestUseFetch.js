import React from 'react';
import {useFetch} from "../hooks/useFetch";

const TestUseFetch = () => {
    const users = useFetch('/users')
    const posts = useFetch('/posts')
    const comments = useFetch('/comments')
    return (
        <div>
            {users.map(user=>(
                <div key={user.id}>
                  <div>id: {user.id}</div>
                  <div>name: {user.name}</div>
                  <div>username: {user.username}</div>
                      </div>
            ))}
            {posts.map(post=>(
                <div key={post.id}>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            ))}
        </div>
    );
};

export {TestUseFetch}