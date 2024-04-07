import { IoBookmarkOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DragonNewsCard({ news }) {
  const { _id, title, image_url, details, rating, total_view, author } = news;
  return (
    <div className="mt-6 ">
      <div key={_id} className="border rounded-lg mb-8">
        <div className="flex justify-between items-center p-4  bg-[#f7f7f7]">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 rounded-full" src={author.img} alt="" />
            <div className="space-y-0.5">
              <h3 className=" font-medium">{author.name}</h3>
              <h4 className="text-sm text-[#706e6e]">
                {new Date(author.published_date).toLocaleDateString()}
              </h4>
            </div>
          </div>
          <div className="flex gap-2">
            <IoBookmarkOutline size={22} />
            <IoShareSocialOutline size={22} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold pb-5">{title}</h3>
          <img className="mb-8" src={image_url} alt="" />

          {details.length > 200 ? (
            <>
              <p>
                {" "}
                {details.slice(0, 200)}
                <Link
                  className="pl-2 text-orange-400 font-semibold"
                  to={`/news/${_id}`}
                >
                  Read More...
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>{details}</p>
            </>
          )}
        </div>
        <hr className="mx-4" />
        <div className="p-6 flex justify-between ">
          <div className="flex items-center gap-3">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h4 className="text-[#706F6F]">{rating.number}</h4>
          </div>
          <div className="flex items-center gap-2">
            <MdRemoveRedEye color="#706F6F" size={20} />
            <p className="text-[#706F6F]">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragonNewsCard;

DragonNewsCard.propTypes = {
  news: PropTypes.object,
};
