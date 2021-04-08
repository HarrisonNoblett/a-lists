import React from "react";
import DeleteBtn from "../DeleteBtn";

function Watchlist(props) {
    return (
        <div className="jumbotron jumbotron-fluid shadow-lg">
          <div className="container text-center">
            <h2 className="lead">{props.network} WatchList</h2>
            <hr />
            {props.watchlist.length ? (
              <div>
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
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
    );
}
export default Watchlist;