import { useEffect, useState } from "react";
import './CardBindingComponent.css'

export default function CardBindingComponent() {
  const [imgData, setImgData] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setImgData(data);
      });
  }, []);

  return (
    <div>
      {imgData && imgData.results && imgData.results.length > 0 && (
        <div className="main-container">
          <div>
            <img
              src={imgData.results[0].picture.large}
              height={200}
              alt="User"
            />
          </div>
          <div>
            <div className="contents">
              <h5>{imgData.results[0].name.first}</h5>
            </div>
            <div className="contents">
              <h5>{imgData.results[0].gender}</h5>
            </div>
            <div className="contents">
              <h5>{imgData.results[0].phone}</h5>
            </div>
          </div>
          <div>
            <div className="contents">
              <h5>{imgData.results[0].name.last}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
