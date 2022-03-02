import ButtonCourse from "components/ButtonCourse";
import CourseCard from "components/CourseCard";
import Title from "components/Title";

const OurCourses = ({ courses }) => {
  return (
    <div className="px-6 md:px-0 mt-24 md:mt-32 max-w-7xl mx-auto text-white flex flex-col justify-center ">
      <Title title="Impulsa tu carrera con los cursos más innovadores del sector construcción" />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-16 gap-6">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              title={course.title}
              src={course.cover}
              duration={course.duration}
              teacher={course.teacher}
              startDate={course.startDate}
              price={`S/. ${course.price}.00`}
              discount={`${course.discount} %`}
              finalPrice={`S/. ${Math.round(
                course.price * (1 - course.discount * 0.01)
              )}.00`}
              slug={course.slug}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <ButtonCourse />
      </div>
    </div>
  );
};

export default OurCourses;
