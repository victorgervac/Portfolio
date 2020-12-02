import React, { useState, useEffect } from "react";
import { Header, Button, Segment, Card, Icon, Grid } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import axios from "axios";

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  }, []);

  // async await function demo
  // I can define asycn await within useEfect
  async function getRepos() {
    console.log("called getRepos");
    try {
      const res = await axios.get(
        `https://api.github.com/users/victorgervac/repos`
      );
      setRepos(res.data);
    } catch (err) {
      alert("error occuered getting repos");
    }
  }

  return (
    <AppContainer>
      <Button onClick={getRepos}>Get Repos</Button>
      <HeaderText fSize="large">My Portfolio</HeaderText>
      <Segment as={Transparent}>
        <HeaderText>My Projects</HeaderText>
        <Grid>
          <Grid.Row>
            {repos.map((r) => (
              <Grid.Column key={r.id} width={4}>
                {/* Not the most resuable */}
                <StyledCard>
                  <Card.Content>
                    <Card.Header>
                      <Truncated>{r.full_name}</Truncated>
                    </Card.Header>
                    <Card.Meta>{r.description}</Card.Meta>
                    {r.stargazers_count > 0 && (
                      <Star>
                        <Icon name="star" />
                      </Star>
                    )}
                  </Card.Content>
                  <Card.Content extra>
                    <ButtonLink href={r.html_url} target="_blank">
                      View
                    </ButtonLink>
                  </Card.Content>
                </StyledCard>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText>Contact</HeaderText>
      </Segment>
    </AppContainer>
  );
};

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.foreGround} !important;
  color: ${(props) => props.theme.foreGround} !important;
  background-color: ${(props) => props.theme.backGround} !important;
  &:hover {
    border: 1px solid ${(props) => props.theme.backGround} !important;
    background-color: ${(props) => props.theme.foreGround} !important;
    color: ${(props) => props.theme.backGround} !important;
  }
`;

const rotate360 = keyframes`
 from{
   transform: rotate(0deg);
 }
 to {
   transform: rotate(360deg);
 }
`;

const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s infinite linear;
`;
// when writing within the `` in a styled it is css syntax unless
// we interpolating than it is js
const StyledCard = styled(Card)`
  height: 200px;
  margin-bottom: 12px !important;
`;

const Truncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// google media quries
const AppContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    ${COLORS.PRIMARY},
    ${COLORS.SECONDARY}
  );
  @media (max-width: 768px) {
    background: linear-gradient(to bottom right, red, green);
  }
`;

const Transparent = styled.div`
  background: transparent !important; //in css files this is frowned upon and should be spariningly, it is more common to use when using components/css libraries
`;

// when I interpolate I can write js code

export default App;
