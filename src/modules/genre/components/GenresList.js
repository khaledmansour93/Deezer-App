import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import GenreCard from "./GenreCard";
import Header from "./../../../components/Header";
import Loader from "./../../../components/Loader";
import { fetchGenres } from "./../actions/fetchGenres";

const mapStateToProps = (state) => ({
    genres: state.genre.genres,
});

const mapDispatchToProps = {
    fetchGenres,
};

const GenresList = (props) => {
    useEffect(() => {
        props.fetchGenres();
        // eslint-disable-next-line
    }, []);

    const renderGenreList = () => {
        if (!props.genres.length) {
            return <Loader />;
        }

        return props.genres.map((genre) => (
            <Grid.Column key={genre.id} mobile={16} tablet={8} computer={4}>
                <GenreCard genre={genre} />
            </Grid.Column>
        ));
    };

    return (
        <Container>
            <Header header="Genres" />
            <Grid>{renderGenreList()}</Grid>
        </Container>
    );
};

GenresList.propTypes = {
    genres: PropTypes.array.isRequired,
    fetchGenres: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
