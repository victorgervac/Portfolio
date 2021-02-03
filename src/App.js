import React, { useState, useEffect } from "react";
import {Button, Segment, Card, Icon, Grid } from "semantic-ui-react";
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
      <HeaderText fSize="large">Victor Gervacio</HeaderText>
       <Segment as={Transparent}>
        <HeaderText fSize="small">Contact</HeaderText>
      <HeaderText fSize="DEFAULT"><Icon name="linkedin"><a href="https://www.linkedin.com/in/victorgervacio/">victorgervacio</a></Icon> </HeaderText>
      <HeaderText fSize="DEFAULT" style={{color: 'white'}}><Icon name="mail">victorgervacio33@gmail.com</Icon></HeaderText>
      <HeaderText fSize="DEFAULT"> <Icon name="phone">(435)7091779</Icon></HeaderText>
      </Segment>
      <Segment as={Transparent}>
      <HeaderText fSize="small">Skills</HeaderText>
      <HeaderText fSize="DEFAULT">HTML • CSS • JavaScript • React • Ruby on Rails • Git • GitHub • MySQL</HeaderText>
      </Segment>
      <Segment as={Transparent}>
      <HeaderText fSize="small">About</HeaderText>
      <HeaderText fSize="EXTRASMALL"> 
                                  I graduated from Park City High School.  I was raised in Acapulco, Mexico before moving to Utah since then I have lived here. I love nature, 
                                  taking long hikes, helping others. Dancing is one of my many passions and I was a scholar at the Wasatch Dance Studio.  
                                  I have attended many leadership conference and was a part of L.I.A (Latinos In Action) during high school.
                                  Seeking the challenge of solving real world problems through coding in a team environment. Interested in all areas of development including application front and back end work as well as testing and performance.</HeaderText>
      </Segment>
      <Segment as={Transparent}>
      <HeaderText fSize="small">Experience</HeaderText>
        <HeaderText fSize="small"><Icon name="github"><a href="https://github.com/victorgervac">Github</a></Icon></HeaderText>
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
        <HeaderText></HeaderText>
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
  height: 150px;
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
