import React, { useContext } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    //throw new Error("lol");
    pet.animal(this.props.id).then(({ animal }) => {
      if (animal != undefined) {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city} ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      } else {
        throw new Error("lol");
      }
    }, console.error);
  }

  adopt = () => {
    navigate(this.state.url);
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const { animal, breed, location, description, name, media, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}> No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
