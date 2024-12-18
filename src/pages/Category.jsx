import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchProductCategories,
  handleNextPage,
  handlePageNumber,
  handlePrevPage,
} from "../redux/slices/FeatureSlice";
import CategoryCard from "../components/CategoryCard";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, type, loading, posts, page } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchProductCategories(" "));
    dispatch(fetchPosts(1));
  }, [dispatch]);

  return (
    <div className="flex items-start w-full justify-center pt-24 flex-col">
      <ul className="flex gap-x-4 mb-2 flex-wrap justify-center w-full">
        {categories.map((cate, index) => (
          <h2
            key={index}
            className="text-xl text-white border p-3 font-semibold cursor-pointer first-letter:capitalize"
            onClick={() => dispatch(fetchProductCategories(cate))}
          >
            {cate}
          </h2>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-center w-full min-h-screen">
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : type.length === 0 ? (
          posts
            .slice(page, page * 10)
            .map((post) => (
              <Card key={post.id} post={post} image={post.images} />
            ))
        ) : (
          type.map((products) => (
            <CategoryCard key={products.id} products={products} />
          ))
        )}
      </div>

      <div className="w-full mb-5">
        {posts.length > 0 && type.length === 0 && (
          <div className="flex gap-x-2 w-full justify-center">
            <span
              className="border font-semibold text-xl p-2 cursor-pointer text-white px-4"
              onClick={() => dispatch(handlePrevPage(page - 1))}
            >
              Prev
            </span>
            <span className="flex flex-wrap">
              {[...Array(Math.round(150 / 50))].map((_, index) => (
                <NavLink
                  key={index}
                  onClick={() => {
                    dispatch(handlePageNumber(index + 1));
                  }}
                  className={`border p-2 text-white cursor-pointer w-12 font-bold hover:bg-gray-700 duration-200 text-center ${
                    page === index + 1 ? "bg-gray-600" : "bg-transparent"
                  }`}
                >
                  {index + 1}
                </NavLink>
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

export default Category;
