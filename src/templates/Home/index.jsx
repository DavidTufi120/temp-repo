import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import React from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState([]);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState("");

  const noMorePost = page + postsPerPage >= allPosts.length;

  let filteredPosts;
  if (searchValue) {
    filteredPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  } else {
    filteredPosts = posts;
  }

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
      </div>
      <br />
      <br />
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Não existem posts</h1>
      )}
      <div className="button-container">
        {!searchValue && (
          <Button
            text="Ver mais"
            onClick={loadMorePosts}
            disabled={noMorePost}
          />
        )}
      </div>
    </section>
  );
};
