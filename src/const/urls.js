const baseURL=`https://api.themoviedb.org/3`

const urls={
    movies:(page)=>`/discover/movie?page=${page}`,
    movie:(id)=>`/movie/${id}`,

}
export {baseURL, urls}