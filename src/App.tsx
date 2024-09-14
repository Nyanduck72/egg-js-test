import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isJumpscared, setIsJumpscared] = useState<boolean>(false);

  useEffect(() => {
    // Ensure the Egg library is loaded before using it
    if (window.Egg) {
      const egg = new window.Egg();
      egg.addCode("f,u,n,c,i,o,n,a,l", () => {
        setIsJumpscared(true);
        const xd = new Audio("../public/Vine-boom-sound-effect.mp3");
        xd.play();
        const t = setTimeout(() => {
          setIsJumpscared(false);
        }, 1000); // Display the jumpscare for 1 second
        return () => clearTimeout(t);
      });
      egg.listen();
    }
  }, []);

  return (
    <div className="container">
      {isJumpscared && (
        <div className="jumpscare-container">
          <div className="jumpscare-content">BOO!</div>
        </div>
      )}
      <div className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum
        iste, velit at non fuga corporis. Corporis reiciendis minima tenetur est
        cumque! Beatae accusamus, adipisci numquam temporibus ullam
        reprehenderit incidunt!
      </div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias
        aperiam optio unde eos et facilis quod numquam iure, porro minima earum
        veniam, voluptas commodi architecto saepe tempore aut ullam.
      </div>
      <hr />
      <div className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum
        iste, velit at non fuga corporis. Corporis reiciendis minima tenetur est
        cumque! Beatae accusamus, adipisci numquam temporibus ullam
        reprehenderit incidunt!
      </div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias
        aperiam optio unde eos et facilis quod numquam iure, porro minima earum
        veniam, voluptas commodi architecto saepe tempore aut ullam.
      </div>
    </div>
  );
}

export default App;
