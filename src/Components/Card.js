import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // pahale se like huaa hai

      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // phle se like nhi hai course

      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // phle se empty na ho to

        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfuly");
    }
  }

  return (
    <div className="big-card">
      <div className="small-card">
        <img src={course.image.url} />

        <div className="icon">
          <button onClick={clickHandler}>
            <div className="btn">
              {!likedCourses.includes(course.id) ? (
                <FcLikePlaceholder />
              ) : (
                <FcLike />
              )}
            </div>
          </button>
        </div>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
