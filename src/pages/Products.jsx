import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  handleNextPage,
  handlePageNumber,
  handlePrevPage,
} from "../redux/slices/FeatureSlice";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";

const Products = () => {
  const { loading, posts, input, page } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(page);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  return (
    <div className="min-h-screen flex justify-between items-center w-full pt-24 flex-col">
      <Outlet />
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Spinner />
        ) : (
          posts
            .filter((data) => data.title.toLowerCase().includes(input))
            .map((post) => (
              <Card key={post.id} post={post} image={post.images} />
            ))
        )}
      </div>
      <div className="w-full mb-5">
        {posts.length > 0 && (
          <div className="flex gap-x-2 w-full justify-center">
            <span
              className="border font-semibold text-xl p-2 cursor-pointer text-white px-4"
              onClick={() => dispatch(handlePrevPage(page - 1))}
            >
              Prev
            </span>
            <span className="flex flex-wrap">
              {[...Array(Math.round(150 / 50))].map((_, index) => (
                <span
                  key={index}
                  onClick={() => {
                    dispatch(handlePageNumber(index + 1));
                  }}
                  className={`border p-2 text-white cursor-pointer w-12 font-bold hover:bg-gray-700 duration-200 text-center ${page === index +1 ? "bg-gray-600": "bg-transparent"}`}
                >
                  {index + 1}
                </span>
              ))}
            </span>
            <span
              className="border font-semibold text-xl p-2 cursor-pointer text-white px-4"
              onClick={() => dispatch(handleNextPage(page + 1))}
            >
              Next
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
