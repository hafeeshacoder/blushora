import {
    Link
} from "react-router-dom";


function CourseCard({
    image,
    alt,
    title,
    description,
    courseKey
}) {

    return (

        <div className="card">

            {image && (

                <img
                    src={image}
                    alt={alt || title}
                />

            )}


            <h3>
                {title}
            </h3>


            <p>
                {description}
            </p>


            <Link
                className="btn viewCourseBtn"
                to="/course-details"
                reloadDocument
                data-course={courseKey}
                onClick={() => {

                    localStorage.setItem(
                        "selectedCourseKey",
                        courseKey
                    );

                }}
            >
                View Details
            </Link>

        </div>

    );

}


export default CourseCard;