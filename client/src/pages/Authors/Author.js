import { useParams } from "react-router-dom";
import BookCard from "../Books/components/BookCard";

function Author() {
  const authorId = useParams();
  console.log(authorId.id);
  return (
    <>
      <div className="mx-4 my-4">
        <h1 className="font-serif text-6xl text-center">Author Name</h1>
        <p className="my-4 text-xl lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod
          veniam porro quasi aperiam ad explicabo facilis quisquam reprehenderit
          nobis et repellat iure harum magnam nemo voluptate soluta magni dicta
          dolores totam. Placeat officia sint saepe facere aliquam molestias!
          Molestias eveniet molestiae dolorem, non nostrum suscipit libero,
          necessitatibus quo blanditiis eius nesciunt similique. Odit rerum vel
          natus, excepturi reiciendis fugiat!
        </p>
        <h1 className="font-serif text-6xl text-center">Books Written</h1>
        <div className="mx-12 my-12 flex justify-center">
          <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
