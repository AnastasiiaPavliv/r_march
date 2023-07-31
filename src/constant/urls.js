const baseUrl=`https://jsonplaceholder.typicode.com`;

const users='/users'
const posts='/posts'
const comments='/comments'

const urls={
    users,
    posts:{byId:(id)=>`${posts}/${id}`},
    comments
}
export {urls, baseUrl}