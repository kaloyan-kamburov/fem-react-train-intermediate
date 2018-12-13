import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps(nextProps) {
    let photos = [];

    if (
      nextProps.media &&
      nextProps.media.photos &&
      nextProps.media.photos.photo
    ) {
      photos = nextProps.media.photos.photo.filter(
        photo => photo["@size"] === "pn"
      );
    }

    return {
      photos
    };
  }
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="Primary animal image" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            if (index > 0) {
              return (
                <img
                  key={photo.value}
                  data-index={index}
                  onClick={this.handleIndexClick}
                  src={photo.value}
                  className={index === active ? "active" : ""}
                  alt="animal thumbnail"
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
