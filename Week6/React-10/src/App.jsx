import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

function App() {

    const books = [
        { id: 1, bname: "Master React", price: 670 },
        { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
        { id: 3, bname: "Mongo Essentials", price: 450 }
    ];

    const blogs = [
        {
            id: 1,
            title: "React Learning",
            author: "Stephen Biz",
            description: "Welcome to learning React!"
        },
        {
            id: 2,
            title: "Installation",
            author: "Schwzdenier",
            description: "You can install React from npm."
        }
    ];

    const courses = [
        {
            id: 1,
            name: "Angular",
            date: "4/5/2021"
        },
        {
            id: 2,
            name: "React",
            date: "6/3/2021"
        }
    ];

    const showCourse = true;
    const showBook = true;
    const showBlog = true;

    return (
        <div className="container">

            {/* if-else */}

            {(() => {
                if (showCourse)
                    return <CourseDetails courses={courses} />;
                else
                    return <h2>No Courses</h2>;
            })()}

            {/* Ternary */}

            {showBook
                ? <BookDetails books={books} />
                : <h2>No Books</h2>
            }

            {/* Logical AND */}

            {showBlog && <BlogDetails blogs={blogs} />}

        </div>
    );
}

export default App;