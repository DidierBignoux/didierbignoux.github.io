import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

class BackToTop extends React.Component {
  onClick = () => {
    window.location.reload();
  };

//   $('#back-top a').on("click", function () {
// 	$('body,html').animate({
// 		scrollTop: 0
// 	}, 1000);
// 	return false;
// });


  render() {
    return (
      <div id="back-top">
        <a href="sda">
          <FontAwesomeIcon className="icone" icon={faArrowUp} />
        </a>
      </div>
    );
  }
}

export default BackToTop;
