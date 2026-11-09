// 1

const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
}





// 2

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}



// 3


const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// 4



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, current) => {
    return acc.concat(current);
  }, [] as T[]);

}


// 5



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter(
    (course) =>
      course.isPublished === true &&
      course.students >= minStudents
  );
}

