import "./review.css";
import starRed from "../../images/star.png";
import starWhite from "../../images/star-white.png";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import CardImg from "../../images/card-img.png";
import reviewImg1 from "../../images/review-img-1.png";
import reviewImg2 from "../../images/review-img-2.png";
import reviewImg3 from "../../images/review-img-3.png";

export default function Review() {
  return (
    <div className="reviews" id="reviews">
      <div className="reviews-wrapper">
        <h1>Reviews</h1>
        <div className="cards-wrapper">
          {Array.from({ length: 3 }).map((elem, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-title">
                  <img
                    src={
                      index === 0
                        ? reviewImg1
                        : index === 1
                        ? reviewImg2
                        : reviewImg3
                    }
                    alt=""
                    className="card-img"
                  />
                  &nbsp; &nbsp;
                  <h1>
                    {index === 0
                      ? "Ruslan Serikov"
                      : index === 1
                      ? `Anna Beglyakova`
                      : `Alexander Bombachka`}
                  </h1>
                </div>
                <div className="card-body">
                  <p>
                    {index === 0
                      ? `Incredibly delicious khachapuri, I would even say that the
                      best in Prague! I ordered delivery, after 30 minutes it was
                      on the table, everything came hot. Special respect for the
                      packaging! Keep it up`
                      : index === 1
                      ? `Ordered Khachapuri Adzharuli ("boat") today and also one with chicken. And that was one of the best Khachapuri I ever had. Definitely 5 stars and will order more times.`
                      : `Khachapuri is chic, a lot of cheese, adequate price. And absolutely sinful Napoleon, every time I buy a piece, even if I didn’t plan :)`}
                  </p>
                </div>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((elem, index) => {
                    return (
                      <img
                        src={elem !== 5 ? starRed : starWhite}
                        key={index}
                        className="star-img"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="control-buttons">
        <button className="control-btn">
          <img src={leftArrow} />
        </button>
        <button className="control-btn">
          <img src={rightArrow} />
        </button>
      </div>
    </div>
  );
}
