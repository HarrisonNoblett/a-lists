import React from "react";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import HorizontalScroll from "react-scroll-horizontal";

//deploy
function Watchlist(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="watchlistDiv">
      <div className="text-center">
        <h4 className="lead">{props.network} Watchlist</h4>
        <hr id="hr1" />
        {props.watchlist.length ? (
           <HorizontalScroll className="watchlistWrap">
             {/* <style>
           {
             "watchlistWrap {white-space: nowrap; display: block; display: flex;flex-wrap: nowrap; overflow: auto; width: 100%;}"
           }
         </style> */}
            {props.watchlist.map((watchlist) => (
              <button
                type="button"
                className="btn mr-1 btn-sm rounded shadow-lg topTen"
                key={watchlist._id}
              >
                <a href={watchlist.view_url}>
                  {" "}
                  <img
                    className="topPosters"
                    src={watchlist.poster_url}
                    alt="poster"
                  ></img>
                </a>
                <DeleteBtn onClick={() => props.handleDelete(watchlist._id)} />
              </button>
            ))}
          </HorizontalScroll>
        ) : (
          <h5>No Results to Display</h5>
        )}
      </div>
    </div>
  );
}
export default Watchlist;