import React, { useState, useEffect } from "react"
import Footer from "../Footer/Footer";
import { v4 as uuidv4 } from 'uuid';
import "./Buttons.scss";
interface Joke {
  value: string ;
}

const Buttons: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [clickCategory, setClickCategory] = useState<string | null>(null);
  const [phrase, setPhrase] = useState<Joke | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res: Response) => res.json())
      .then((res: string[]) => setCategories(res))
      .catch((error: Error) => console.log(error));
  }, []);

  useEffect(() => {
    if (clickCategory) {
      fetch(`https://api.chucknorris.io/jokes/random?category=${clickCategory}`)
        .then((res: Response) => res.json())
        .then((res: Joke) => setPhrase(res));
    }
  }, [clickCategory, clickCount]);

  const onHandleClick = (category: string) => {
    if (categories.includes(category)) {
      setClickCategory(category);
      setClickCount(clickCount + 1);
    }
  };

  const elements = categories.map((item) => {
    return (
      <div className="button" key={uuidv4()}>
        <button className="button__button" onClick={() => onHandleClick(item)}>
          {item}
        </button>
      </div>
    );
  });

  return (
    <div className="DataCategoryButtons">
      {elements}
      <Footer value={phrase?.value}></Footer>
    </div>
  );
};

export default Buttons;
