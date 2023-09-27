import React, { useContext } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    //throw new Error("lol");
    pet.animal(this.props.id).then(({ animal }) => {
      if (animal != undefined) {
        this.setState({
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

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
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
